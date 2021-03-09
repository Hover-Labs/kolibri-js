import HarbingerClient from './src/harbinger-client'
import CONTRACTS from './src/contracts'
import OvenClient from './src/oven-client'
import StableCoinClient from './src/stable-coin-client'
import Network from './src/network'
import { InMemorySigner } from '@taquito/signer'

const main = async () => {
  try {
    const nodeUrl = "https://rpc.tzbeta.net"
    const ovenAddr = "KT1BjuSU32EnHWwD5wHPAH9xPnqrRKPmsMRW"
    const secretKey = "edsk3aeocSRnxdWVFm3ShaALUeCTy4PgL6JdeGvzbLjX5jn8D9ZXw5"
    const signer = await InMemorySigner.fromSecretKey(secretKey)
    const harbingerClient = new HarbingerClient(nodeUrl, CONTRACTS.MAIN.HARBINGER_NORMALIZER)
    const stableCoinClient = new StableCoinClient(nodeUrl, Network.Mainnet, CONTRACTS.MAIN.OVEN_REGISTRY, CONTRACTS.MAIN.MINTER, CONTRACTS.MAIN.OVEN_FACTORY)
    const ovenClient = new OvenClient(nodeUrl, signer, ovenAddr, stableCoinClient, harbingerClient)

    const interest = await ovenClient.getStabilityFees()
    console.log(interest.toFixed())
  } catch (e) {
    console.log(e)
  }
}
main()