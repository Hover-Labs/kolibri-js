import { TezosToolkit, TransactionWalletOperation } from '@taquito/taquito'
import { InMemorySigner } from '@taquito/signer'
import { TransactionOperation } from '@taquito/taquito/dist/types/operations/transaction-operation'
import BigNumber from 'bignumber.js'
import { interestRateToApy } from './utils'

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
   * Wishlist of features:
   * - Get addresses's balance of kUSD in the pool
   * - Get pool interest rate
   * - Get conversion rate of LP Token to kUSD
   */

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
  public async getInterestRate(): Promise<BigNumber> {
    const savingsPoolContract = await this.tezos.wallet.at(this.savingsPoolAddress)
    const savingsPoolStorage: any = await savingsPoolContract.storage()
    const interestRate = savingsPoolStorage.interestRate
    return interestRateToApy(interestRate)
  }

}
