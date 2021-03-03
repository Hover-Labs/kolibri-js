import axios from 'axios'
import Network from './network'

/** Constants */
const INDEXER_RPC_BASE = 'https://api.better-call.dev/v1/'

export type BigMapValue = {
  data: {
    key: BigMapData
    value: BigMapData
    key_hash: string
    key_string: string
    level: number
    timestamp: string
  }
  count: number
}

export type BigMapData = {
  prim: string
  type: string
  value: string
}

/**
 * Helper API client for talking to Better Call Dev's Indexer.
 */
export default class BetterCallDevClient {
  public constructor(private readonly network: Network) {}

  public async getBigMapValues(bigMapId: string): Promise<Array<BigMapValue>> {
    const axiosAPI = axios.create({
      baseURL: INDEXER_RPC_BASE,
    })
    const endpoint = `bigmap/${this.network}/${bigMapId}/keys?size=10000`
    const response = await axiosAPI.get(endpoint)
    return response.data
  }
}
