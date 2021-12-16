import Shard from './types/shard'
import Address from './types/address'
import BigNumber from 'bignumber.js'
import { getTokenBalance } from './utils'
import { TezosToolkit, TransactionWalletOperation } from '@taquito/taquito'
import { TransactionOperation } from '@taquito/taquito/dist/types/operations/transaction-operation'
import { TempleWallet } from '@temple-wallet/dapp'
import { InMemorySigner } from '@taquito/signer'

/** Interacts with the Untitled Stable Coin project's token. */
export default class TokenClient {
  /** A TezosToolkit */
  private readonly tezos: TezosToolkit

  /**
   * Create  a new TokenClient.
   * @param nodeUrl The URL of the node to connect to.
   * @param tokenAddress The address of the Token.
   */
  public constructor(nodeUrl: string, private readonly tokenAddress: Address) {
    this.tezos = new TezosToolkit(nodeUrl)
  }

  /**
   * Approve an allowance for an FA1.2 token
   *
   * @param spender The account who can spend
   * @param amount The amount to spend
   * @param wallet The wallet that will approve
   */
  public async approveToken(
    spender: string,
    amount: BigNumber,
    wallet: InMemorySigner | TempleWallet,
  ): Promise<TransactionWalletOperation | TransactionOperation> {
    if (wallet instanceof InMemorySigner) {
      // Wallet is InMemorySigner
      this.tezos.setProvider({ signer: wallet })
    } else {
      // Wallet is Temple Wallet
      this.tezos.setWalletProvider(wallet)
    }

    const tokenContract = await this.tezos.contract.at(this.tokenAddress)
    return tokenContract.methods.approve(spender, amount).send()
  }

  /**
   * Get the balance of tokens for a user.
   *
   * @returns The token balance.
   */
  public async getBalance(address: Address, tokenContractStorage: any | undefined = undefined): Promise<Shard> {
    return getTokenBalance(address, this.tokenAddress, this.tezos, tokenContractStorage)
  }
}
