import Address from './types/address'
import { TezosToolkit, TransactionWalletOperation } from '@taquito/taquito'
import { TempleWallet } from '@temple-wallet/dapp'
import { InMemorySigner } from '@taquito/signer'
import HarbingerClient from './harbinger-client'
import Mutez from './types/mutez'
import Shard from './types/shard'
import { TransactionOperation } from '@taquito/taquito/dist/types/operations/transaction-operation'
import StableCoinClient from './stable-coin-client'

import BigNumber from 'bignumber.js'

// Conversion constant to change mutez into shard precision.
// TODO(keefertaylor): Refactor into a utils class.
const MUTEZ_DIGITS = 6
const SHARD_DIGITS = 18

const MUTEZ_TO_SHARD = new BigNumber(Math.pow(10, SHARD_DIGITS - MUTEZ_DIGITS))
const SHARD_PRECISION = new BigNumber(Math.pow(10, SHARD_DIGITS))

/**
 * Controls interaction with an Oven.
 */
export default class OvenClient {
  /** A TezosToolkit */
  private readonly tezos: TezosToolkit

  /**
   * Create a new OvenClient.
   *
   * @param nodeUrl The URL of the node to connect to.
   * @param wallet The wallet which will interact with this Oven.
   * @param ovenAddress The address of the oven.
   * @param stableCoinClient The stable coin client
   * @param harbingerClient The harbinger price oracle client
   */
  public constructor(
    nodeUrl: string,
    wallet: InMemorySigner | TempleWallet,
    public readonly ovenAddress: Address,
    public readonly stableCoinClient: StableCoinClient,
    public readonly harbingerClient: HarbingerClient,
  ) {
    const tezos = new TezosToolkit(nodeUrl)

    // TODO(keefertaylor): Refactor this to be less nonsense.
    if (wallet instanceof InMemorySigner) {
      // Wallet is InMemorySigner
      tezos.setProvider({ signer: wallet })
    } else {
      // Wallet is Thanos Wallet
      tezos.setWalletProvider(wallet)
    }

    this.tezos = tezos
  }

  /**
   * Retrieve the utilization of collateral in the oven.
   *
   * This number represents how much of the user's maximum borrow limit is used. If the number is greater than 1, the
   * user may be liquidated.
   *
   * Mathematically, this is defined as:
   * collateral utilization =  (amount borrowed) / (amount you can borrow)
   * collateral utilization = = (borrowed kUSD) / (amount of XTZ in Oven * Price of XTZ / collateral requirement)
   *
   * @returns The collateral utilization ratio as an integer with 18 digits of precision (ex. 80% is represented as
   *          800_000_000_000_000_000)
   */
  public async getCollateralUtilization(): Promise<Shard> {
    // Get XTZ price as a shard.
    const { price } = await this.harbingerClient.getPriceData()
    const priceShard = price.multipliedBy(MUTEZ_TO_SHARD) // 18 digits

    // Get the current XTZ balanace of the oven.
    const currentBalance = await this.getBalance() // 18 digits

    // Get value of collateral as a shard.
    const collateralValue = currentBalance
      .multipliedBy(MUTEZ_TO_SHARD)
      .multipliedBy(priceShard)
      .dividedBy(SHARD_PRECISION) // 18 digits

    // Get borrowed collateral as a shard.
    const totalBorrowedTokens = await this.getTotalOutstandingTokens() // 18 digits

    return totalBorrowedTokens.times(SHARD_DIGITS).dividedBy(collateralValue)
  }

  /**
   * Retrieve the collateralization ratio of the oven.
   *
   * @deprecated This method returns a number that isn't particularly useful and may be removed in a future version
   *             of this library. Please use `getCollateralUtilization` instead.
   * TODO(keefertaylor): Remove this method.
   *
   * @returns The collateralization ratio as a shard.
   */
  public async getCollateralizationRatio(): Promise<Shard> {
    console.warn(
      "This method is deprecated and probably isn't giving you the value you expect. Consider using `getCollateralUtilization` instead",
    )

    // Get XTZ price as a shard.
    const { price } = await this.harbingerClient.getPriceData()
    const priceShard = price.multipliedBy(MUTEZ_TO_SHARD)

    // Get the current XTZ balanace of the oven.
    const currentBalance = await this.getBalance()

    // Get value of collateral as a shard.
    const collateralValue = currentBalance.multipliedBy(MUTEZ_TO_SHARD).multipliedBy(priceShard)
    const collateralValueInkUSD = collateralValue.multipliedBy(SHARD_PRECISION)

    // Get borrowed collateral as a shard.
    const totalBorrowedTokens = await this.getTotalOutstandingTokens()

    // TODO(keefertaylor): Refactor this to utils for re-use.
    return collateralValueInkUSD.dividedBy(totalBorrowedTokens).multipliedBy(new BigNumber(100))
  }

  /**
   * Retrieve the baker for the oven.
   *
   * @returns The baker for the oven.
   */
  public async getBaker(): Promise<Address | null> {
    try {
      return await this.tezos.rpc.getDelegate(this.ovenAddress)
    } catch (e: any) {
      // If 404 was received then the baker is actually just null.
      // See:
      // - https://github.com/ecadlabs/taquito/issues/556
      // - https://gitlab.com/tezos/tezos/-/issues/490
      if (e.status === 404) {
        return null
      }

      // If another error occurred, rethrow.
      throw e
    }
  }

  /**
   * Retrieve the owner of the oven.
   *
   * @returns The address which owns the oven.
   */
  public async getOwner(ovenStorage: any | undefined = undefined): Promise<Address> {
    const resolvedOvenStorage = ovenStorage ?? ((await (await this.tezos.wallet.at(this.ovenAddress)).storage()) as any)
    return resolvedOvenStorage.owner
  }

  /**
   * Retrieve the number of tokens borrowed against the oven.
   *
   * NOTE: This method does *NOT* include stability fees. Please see:
   * `getStabilityFees` and `getTotalOutstandingTokens`.
   *
   * @returns The amount of tokens borrowed.
   */
  public async getBorrowedTokens(ovenStorage: any | undefined = undefined): Promise<Shard> {
    const resolvedOvenStorage = ovenStorage ?? ((await (await this.tezos.wallet.at(this.ovenAddress)).storage()) as any)
    return resolvedOvenStorage.borrowedTokens
  }

  /**
   * Retrieve the total number of tokens outstanding on the vault.
   *
   * This method includes the stability fees and borrowed tokens. For individual
   * breakdowns, see `getStabilityFees` and `getBorrowedTokens`.
   *
   * @param time The time to calculate the values at. Defaults to the current time.
   * @param ovenStorage The pre-fetched oven storage
   * @returns The amount of tokens owed in stability fees.
   */
  public async getTotalOutstandingTokens(
    time: Date = new Date(),
    ovenStorage: any | undefined = undefined,
  ): Promise<Shard> {
    const stabilityFees = await this.getStabilityFees(time, ovenStorage)
    const borrowedTokens = await this.getBorrowedTokens()
    return stabilityFees.plus(borrowedTokens)
  }

  /**
   * Retrieve the number of tokens owed in stability fees against the oven.
   *
   * @param time The time to calculate the values at. Defaults to the current time.
   * @param ovenStorage The pre-fetched oven storage
   * @returns Interest rate data for the system.
   */
  public async getStabilityFees(time: Date = new Date(), ovenStorage: any | undefined = undefined): Promise<Shard> {
    const resolvedOvenStorage = ovenStorage ?? ((await (await this.tezos.wallet.at(this.ovenAddress)).storage()) as any)
    const stabilityFeeTokens: BigNumber = resolvedOvenStorage.stabilityFeeTokens

    const interestData = await this.stableCoinClient.getInterestData(time)
    const ovenInterestIndex: BigNumber = resolvedOvenStorage.interestIndex
    const borrowedTokens = await this.getBorrowedTokens(ovenStorage)
    const minterInterestIndex: BigNumber = interestData.globalInterestIndex

    const ratio = minterInterestIndex.times(SHARD_PRECISION).div(ovenInterestIndex).integerValue()
    const totalPrinciple = borrowedTokens.plus(stabilityFeeTokens)
    const newTotalTokens = ratio.times(totalPrinciple).div(SHARD_PRECISION).integerValue()
    return newTotalTokens.minus(borrowedTokens)
  }

  /**
   * Query if the Oven is liquidated.
   *
   * @returns A boolean representing the liquidation state.
   */
  public async isLiquidated(ovenStorage: any | undefined = undefined): Promise<boolean> {
    const resolvedOvenStorage = ovenStorage ?? ((await (await this.tezos.wallet.at(this.ovenAddress)).storage()) as any)
    return resolvedOvenStorage.isLiquidated
  }

  /**
   * Get the balance of the oven.
   *
   * @returns The oven balance in mutez.
   */
  public async getBalance(): Promise<Mutez> {
    return await this.tezos.tz.getBalance(this.ovenAddress)
  }

  /**
   * Set the baker of the oven.
   *
   * @param baker The baker for the oven.
   * @returns The operation hash
   */
  public async setBaker(baker: Address | null): Promise<TransactionOperation | TransactionWalletOperation> {
    return this.invokeOvenMethod('setDelegate', baker)
  }

  /**
   * Liquidate an Oven.
   *
   * @returns The operation hash.
   */
  public async liquidate(): Promise<TransactionOperation | TransactionWalletOperation> {
    return this.invokeOvenMethod('liquidate', [['unit']])
  }

  /**
   * Borrow tokens against an Oven's collateral.
   *
   * @param tokens The number of tokens to borrow.
   * @returns The operation hash.
   */
  public async borrow(tokens: Shard): Promise<TransactionOperation | TransactionWalletOperation> {
    return this.invokeOvenMethod('borrow', tokens)
  }

  /**
   * Deposit XTZ into the Oven.
   *
   * @param mutez The amount of XTZ to deposit, specified in mutez.
   * @returns The operation hash.
   */
  public async deposit(mutez: Mutez): Promise<TransactionOperation | TransactionWalletOperation> {
    return this.invokeOvenMethod('default', [['unit']], Number(mutez))
  }

  /**
   * Withdraw XTZ from the Oven.
   *
   * @param mutez The amount of XTZ to withdraw, specified in mutez.
   * @returns The operation hash.
   */
  public async withdraw(mutez: Mutez): Promise<TransactionOperation | TransactionWalletOperation> {
    return this.invokeOvenMethod('withdraw', mutez)
  }

  /**
   * Repay borrowed tokens.
   *
   * @param tokensToRepay The number of tokens to repay.
   * @returns The operation hash.
   */
  public async repay(tokensToRepay: Shard): Promise<TransactionOperation | TransactionWalletOperation> {
    return this.invokeOvenMethod('repay', tokensToRepay)
  }

  /**
   * Invoke a method in the oven contract.
   *
   * @param entrypoint The entry point to invoke.
   * @param args The arguments to send with the invocation.
   * @param amount The amount of XTZ to send with the operation, specified in mutez.
   * @returns The operation hash.
   */
  private async invokeOvenMethod(
    entrypoint: string,
    args: any,
    amount = 0,
  ): Promise<TransactionOperation | TransactionWalletOperation> {
    const ovenContract = await this.tezos.wallet.at(this.ovenAddress)
    const sendArgs = { amount: amount, mutez: true }
    return await ovenContract.methods[entrypoint](args).send(sendArgs)
  }
}
