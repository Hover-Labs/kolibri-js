import { ContractAbstraction, ContractMethod, TezosToolkit, TransactionWalletOperation, Wallet } from '@taquito/taquito'
import { InMemorySigner } from '@taquito/signer'
import { TransactionOperation } from '@taquito/taquito/dist/types/operations/transaction-operation'
import BigNumber from 'bignumber.js'
import { compoundingLinearApproximation, getTokenBalance, interestRateToApy } from './utils'
import CONSTANTS from './constants'
import Address from './types/address'
import Decimal from 'decimal.js'

/**
 * Controls interaction with the Kolibri Savings Pool.
 */
export default class SavingsPoolClient {
  /** A TezosToolkit */
  private readonly tezos: TezosToolkit

  /**
   * Create a new Savings Pool Client.
   *
   * @param nodeUrl The URL of the node to connect to.
   * @param wallet The wallet which will interact with this Oven.
   * @param savingsPoolAddress The address of the Kolibri Savings Pool.
   */
  public constructor(nodeUrl: string, wallet: InMemorySigner, public readonly savingsPoolAddress: string) {
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
   * Deposit kUSD into the liquidity pool and receive LP tokens.
   *
   * Note: Deposit operations require an approval to be issued. This method will not issue an approval automatically.
   *
   * @param kUSDAmount The amount of kUSD to deposit.
   * @param savingsPoolContract The savings pool contract
   * @returns The operation hash
   */
  public async deposit(
    kUSDAmount: BigNumber,
    savingsPoolContract: ContractAbstraction<Wallet> | undefined = undefined,
  ): Promise<TransactionOperation | TransactionWalletOperation> {
    const depositTransaction = await this.makeDepositTransaction(kUSDAmount, savingsPoolContract)
    const sendArgs = { amount: 0, mutez: true }
    return await depositTransaction.send(sendArgs)
  }

  /**
   * Returns a Taquito transaction that will deposit kUSD into the liquidity pool and receive LP tokens.
   *
   * Note: Deposit operations require an approval to be issued. This method will not include an approval in the
   *       transaction.
   *
   * @param kUSDAmount The amount of kUSD to deposit.
   * @param savingsPoolContract The savings pool contract
   * @returns A transaction that will deposit kUSD.
   */
  public async makeDepositTransaction(
    kUSDAmount: BigNumber,
    savingsPoolContract: ContractAbstraction<Wallet> | undefined = undefined,
  ): Promise<ContractMethod<Wallet>> {
    const resolvedSavingsPoolContract = savingsPoolContract ?? (await this.tezos.wallet.at(this.savingsPoolAddress))
    return resolvedSavingsPoolContract.methods['deposit'](kUSDAmount)
  }

  /**
   * Remove LP tokens from the liquidity pool and receive kUSD
   *
   * Note: Redeem operations require an approval to be issued. This method will not issue an approval automatically.
   *
   * @param lpTokenAmount The amount of LP tokens to redeem.
   * @param savingsPoolContract The savings pool contract
   * @returns The operation hash
   */
  public async redeem(
    lpTokenAmount: BigNumber,
    savingsPoolContract: ContractAbstraction<Wallet> | undefined = undefined,
  ): Promise<TransactionOperation | TransactionWalletOperation> {
    const makeRedeemTransaction = await this.makeRedeemTransaction(lpTokenAmount, savingsPoolContract)
    const sendArgs = { amount: 0, mutez: true }
    return await makeRedeemTransaction.send(sendArgs)
  }

  /**
   * Returns a taquito transaction that will remove LP tokens from the liquidity pool and receive kUSD
   *
   *
   * Note: Redeem operations require an approval to be issued. This method will not include an approval in the
   *       transaction. *
   * @param lpTokenAmount The amount of LP tokens to redeem.
   * @param savingsPoolContract The savings pool contract
   * @returns A transaction that will redeem LP tokens
   */
  public async makeRedeemTransaction(
    lpTokenAmount: BigNumber,
    savingsPoolContract: ContractAbstraction<Wallet> | undefined = undefined,
  ): Promise<ContractMethod<Wallet>> {
    const resolvedSavingsPoolContract = savingsPoolContract ?? (await this.tezos.wallet.at(this.savingsPoolAddress))
    return resolvedSavingsPoolContract.methods['redeem'](lpTokenAmount)
  }

  /**
   * Get the interest rate of the pool.
   */
  public async getInterestRateAPY(savingsPoolStorage: any | undefined = undefined): Promise<Decimal> {
    const resolvedSavingsPoolStorage =
      savingsPoolStorage ?? ((await (await this.tezos.wallet.at(this.savingsPoolAddress)).storage()) as any)

    const interestRate = resolvedSavingsPoolStorage.interestRate
    return interestRateToApy(interestRate)
  }

  /**
   * Get the size of the pool in kUSD, accounting for the current time.
   */
  public async getPoolSize(savingsPoolStorage: any | undefined = undefined, time = new Date()): Promise<BigNumber> {
    const resolvedSavingsPoolStorage =
      savingsPoolStorage ?? ((await (await this.tezos.wallet.at(this.savingsPoolAddress)).storage()) as any)

    const poolSize = resolvedSavingsPoolStorage.underlyingBalance
    const lastInterestUpdateTime = resolvedSavingsPoolStorage.lastInterestCompoundTime
    const interestRate = resolvedSavingsPoolStorage.interestRate

    // TODO(keefertaylor): Similiar to the API in StableCoin client. Consider deduping / refactoring.
    const lastUpdate = new Date(`${lastInterestUpdateTime}`)
    const deltaMs = time.getTime() - lastUpdate.getTime()
    const deltaSecs = Math.floor(deltaMs / 1000)
    const numPeriods = Math.floor(deltaSecs / CONSTANTS.COMPOUND_PERIOD_SECONDS)

    return compoundingLinearApproximation(poolSize, interestRate, numPeriods)
  }

  /**
   * Get the number of LP tokens in existence.
   */
  public async getLPTokenTotal(savingsPoolStorage: any | undefined = undefined): Promise<BigNumber> {
    const resolvedSavingsPoolStorage =
      savingsPoolStorage ?? ((await (await this.tezos.wallet.at(this.savingsPoolAddress)).storage()) as any)
    return resolvedSavingsPoolStorage.totalSupply
  }

  /**
   * Get the conversion rate of 1 LP token to kUSD, denominated in kUSD.
   */
  public async getLPTokenConversionRate(
    savingsPoolStorage: any | undefined = undefined,
    time = new Date(),
  ): Promise<BigNumber> {
    const poolSize = await this.getPoolSize(savingsPoolStorage, time)
    const totalLPTokens = await this.getLPTokenTotal(savingsPoolStorage)

    // NOTE: KSR LP tokens are denominated in 36 digits, and kUSD uses 18 so we upscale the kUSD size to be
    //       the same precision.
    return poolSize.times(CONSTANTS.PRECISION).times(CONSTANTS.PRECISION).dividedBy(totalLPTokens)
  }

  /**
   * Get the LP token balance for the given account.
   */
  public async getLPTokenBalance(
    address: Address,
    tokenContractStorage: any | undefined = undefined,
  ): Promise<BigNumber> {
    return getTokenBalance(address, this.savingsPoolAddress, this.tezos, tokenContractStorage)
  }

  /**
   * Get the kUSD balance for a given account, if they turned in all of their LP tokens.
   */
  public async getkUSDTokenBalance(
    address: Address,
    savingsPoolStorage: any | undefined = undefined,
    tokenContractStorage: any | undefined = undefined,
  ): Promise<BigNumber> {
    const conversionRate = await this.getLPTokenConversionRate(savingsPoolStorage)
    const lpTokenBalance = await this.getLPTokenBalance(address, tokenContractStorage)

    // NOTE: KSR LP tokens are denominated in 36 digits, and kUSD uses 18 so we upscale the kUSD size to be
    //       the same precision.
    return conversionRate.times(lpTokenBalance).dividedBy(CONSTANTS.PRECISION)
  }
}
