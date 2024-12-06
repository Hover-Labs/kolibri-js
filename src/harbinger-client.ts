import Address from './types/address'
import { TezosToolkit } from '@taquito/taquito'
import Mutez from './types/mutez'

/** Asset pair to query */
const ASSET_CODE = 'XTZUSDT'

/**
 * Price feed data.
 */
export type HarbingerPriceFeedData = {
  time: Date
  price: Mutez
}

/**
 * Interacts with a Harbinger Oracle.
 */
export default class HarbingerClient {
  /** A TezosToolkit */
  private readonly tezos: TezosToolkit

  /**
   * Construct a new Oracle Client.
   *
   * @param nodeUrl The URL of the node to connect to.
   * @param oracleAddress The address of the Youves Oracle contract to read price from.
   * @param ovenProxyAddress The address of the oven proxy that is calling for the oracle data.
   */
  public constructor(
    nodeUrl: string,
    public readonly oracleAddress: Address,
    public readonly ovenProxyAddress: Address,
  ) {
    this.tezos = new TezosToolkit(nodeUrl)
  }

  /**
   * Retrieve price feed data.
   */
  public async getPriceData(): Promise<HarbingerPriceFeedData> {
    const oracleContract = await this.tezos.contract.at(this.oracleAddress)
    const result = await oracleContract.contractViews
      .get_price_with_timestamp(ASSET_CODE)
      .executeView({ viewCaller: this.ovenProxyAddress })
    const assetData = result

    return {
      time: new Date(Math.floor(new Date(assetData.last_update_timestamp).getTime() / 1000)), // taquito returns timestamp in ms not s
      price: assetData.price, // Note: assetData.price is a BigNumber
    }
  }
}
