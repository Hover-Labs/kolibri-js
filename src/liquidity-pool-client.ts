import Address from './types/address'
import { TezosToolkit, TransactionWalletOperation } from '@taquito/taquito'
import { TempleWallet } from "@temple-wallet/dapp";
import { InMemorySigner } from '@taquito/signer'
import { TransactionOperation } from '@taquito/taquito/dist/types/operations/transaction-operation'

/**
 * Controls interaction with the Kolibri Liquidity Pool.
 */
export default class LiquidityPoolClient {
  /** A TezosToolkit */
  private readonly tezos: TezosToolkit

  /**
   * Create a new Liquidity Pool Client.
   *
   * @param nodeUrl The URL of the node to connect to.
   * @param wallet The wallet which will interact with this Oven.
   * @param liquidityPoolAddress The address of the Kolibri Liquidity Pool.
   */
  public constructor(
    nodeUrl: string,
    wallet: InMemorySigner | TempleWallet,
    public readonly liquidityPoolAddress: Address,
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
   * Liquidate an Oven using the liquidity pool.
   *
   * @param targetOvenAddress The oven to liquidate.
   * @returns The operation hash
   */
  public async liquidate(targetOvenAddress: Address): Promise<TransactionOperation | TransactionWalletOperation> {
    const liquidityPoolContract = await this.tezos.wallet.at(this.liquidityPoolAddress)
    const sendArgs = { amount: 0, mutez: true }
    return await liquidityPoolContract.methods['liquidate'](targetOvenAddress).send(sendArgs)
  }
  
  /**
   * Get the exchange rate of 1 LP token to kUSD as a string.
   *
   * @param precision The number of decimals to included
   */ 
  public async getExchangeRate(precision: number): Promise<string> {
    // Load kUSD Contract
    const kUSDContract = await this.tezos.wallet.at(contracts.TOKEN)
    const kUSDStorage = await kUSDContract.storage()

    // Load Liq Pool Contract
    const liqContract = await this.tezos.wallet.at(contracts.LIQUIDITY_POOL)
    const liqStorage = await liqContract.storage()

    // Get number of kUSD in the liquidity pool
    const poolBalance = await kUSDStorage.balances.get(contracts.LIQUIDITY_POOL)
    if (poolBalance === undefined){
      this.poolBalance = new BigNumber(0)
    } else {
      this.poolBalance = poolBalance.balance
    } 

    // Get number of LP tokens outstanding
    const lpBalance = liqStorage.totalSupply

    // Changed fixed point numbers into decimals 
    const KUSD_MANTISSA = Math.pow(10, 18) // kUSD has 18 decimals
    const LP_MANTISSA = Math.pow(10, 36).  // LP has 36 decimals
    const kUSDBalanceDecimal = poolBalance.dividedBy(KUSD_MANTISSA)
    const lpBalanceDecimal = lpBalance.dividedBy(LP_MATISSA)

    // Calculate an exchange rate
    // toFixed() will give you n digits of precision
    const redeemRate = poolBalanceDecimal.dividedBy(lpBalanceDecimal).toFixed(2)
  }
}
