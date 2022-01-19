/**
 * A property bag of known canonical contracts.
 */

import { Contracts } from './types/contracts'

import MAINNET from './contracts/mainnet'
import HANGZHOUNET from './contracts/hangzhounet'
import SANDBOXNET from './contracts/sandbox'

const CONTRACTS: Contracts = {
  ZERO: HANGZHOUNET,
  TEST: HANGZHOUNET,
  MAIN: MAINNET,
  SANDBOX: SANDBOXNET,
}

export default CONTRACTS
