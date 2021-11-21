import { TezosToolkit } from '@taquito/taquito'
import Shard from './types/shard'
import Address from './types/address'
import BigNumber from 'bignumber.js'
import { getTokenBalance } from './utils'

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
   * Get the balance of tokens for a user.
   *
   * @returns The token balance.
   */
  public async getBalance(address: Address): Promise<Shard> {
    return getTokenBalance(address, this.tokenAddress, this.tezos)
  }
}
