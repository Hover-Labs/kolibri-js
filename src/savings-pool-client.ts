import { TezosToolkit, TransactionWalletOperation } from '@taquito/taquito'
import { InMemorySigner } from '@taquito/signer'
import { TransactionOperation } from '@taquito/taquito/dist/types/operations/transaction-operation'
import BigNumber from 'bignumber.js'
import { compoundingLinearApproximation, getTokenBalance, interestRateToApy } from './utils'
import CONSTANTS from './constants'
import Address from './types/address'

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
  public constructor(
    nodeUrl: string,
    wallet: InMemorySigner,
    public readonly savingsPoolAddress: string,
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
   * Deposit kUSD into the liquidity pool and receive LP tokens.
   * 
   * @param kUSDAmount The amount of kUSD to deposit.
   * @returns The operation hash
   */
  public async deposit(kUSDAmount: BigNumber): Promise<TransactionOperation | TransactionWalletOperation> {
    const savingsPoolContract = await this.tezos.wallet.at(this.savingsPoolAddress)
    const sendArgs = { amount: 0, mutez: true }
    return await savingsPoolContract.methods['deposit'](kUSDAmount).send(sendArgs)
  }

  /**
   * Remove LP tokens from the liquidity pool and receive kUSD
   * 
   * @param lpTokenAmount The amount of LP tokens to redeem.
   * @returns The operation hash
   */
  public async redeem(lpTokenAmount: BigNumber): Promise<TransactionOperation | TransactionWalletOperation> {
    const savingsPoolContract = await this.tezos.wallet.at(this.savingsPoolAddress)
    const sendArgs = { amount: 0, mutez: true }
    return await savingsPoolContract.methods['redeem'](lpTokenAmount).send(sendArgs)
  }

  /**
   * Get the interest rate of the pool.
   */
  public async getInterestRateAPY(): Promise<BigNumber> {
    const savingsPoolContract = await this.tezos.wallet.at(this.savingsPoolAddress)
    const savingsPoolStorage: any = await savingsPoolContract.storage()
    const interestRate = savingsPoolStorage.interestRate
    return interestRateToApy(interestRate)
  }

  /** 
   * Get the size of the pool in kUSD, accounting for the current time.
   */
  public async getPoolSize(): Promise<BigNumber> {
    const savingsPoolContract = await this.tezos.wallet.at(this.savingsPoolAddress)
    const savingsPoolStorage: any = await savingsPoolContract.storage()
    const poolSize = savingsPoolStorage.underlyingBalance
    const lastInterestUpdate = savingsPoolStorage.lastInterestCompoundTime
    const interestRate = savingsPoolStorage.interestRate

    // TODO(keefertaylor): Similiar to the API in StableCoin client. Consider deduping / refactoring.
    const time = new Date()
    const deltaMs = time.getTime() - lastInterestUpdate.getTime()
    const deltaSecs = Math.floor(deltaMs / 1000)
    const numPeriods = Math.floor(deltaSecs / CONSTANTS.COMPOUND_PERIOD_SECONDS)

    return compoundingLinearApproximation(poolSize, interestRate, numPeriods)
  }

  /**
   * Get the number of LP tokens in existence.
   */
  public async getLPTokenTotal(): Promise<BigNumber> {
    const savingsPoolContract = await this.tezos.wallet.at(this.savingsPoolAddress)
    const savingsPoolStorage: any = await savingsPoolContract.storage()
    return savingsPoolStorage.totalSupply
  }

  /**
   * Get the conversion rate of 1 LP token to kUSD, denominated in kUSD.
   */
  public async getLPTokenConversionRate(): Promise<BigNumber> {
    const poolSize = await this.getPoolSize()
    const totalLPTokens = await this.getLPTokenTotal()

    // NOTE: KSR LP tokens are denominated in 36 digits, and kUSD uses 18 so we upscale the kUSD size to be 
    //       the same precision.
    return poolSize.times(CONSTANTS.PRECISION).times(CONSTANTS.PRECISION).dividedBy(totalLPTokens)
  }

  /** 
   * Get the LP token balance for the given account.
   */
  public async getLPTokenBalance(address: Address): Promise<BigNumber> {
    return getTokenBalance(address, this.savingsPoolAddress, this.tezos)
  }

  /**
   * Get the kUSD balance for a given account, if they turned in all of their LP tokens.
   */
  public async getkUSDTokenBalance(address: Address): Promise<BigNumber> {
    const conversionRate = await this.getLPTokenConversionRate()
    const lpTokenBalance = await this.getLPTokenBalance(address)

    // NOTE: KSR LP tokens are denominated in 36 digits, and kUSD uses 18 so we upscale the kUSD size to be 
    //       the same precision.
    return conversionRate.times(lpTokenBalance).dividedBy(CONSTANTS.PRECISION)
  }
}
