import CONTRACTS from '../src/contracts'
import TokenClient from '../src/token-client'
import BigNumber from 'bignumber.js'

const NODE_URL = 'https://sandbox.hover.engineering'

/**
 * Tests for Token client.
 *
 * These tests are not hermetic.
 */

// An address that will not hold tokens.
const NON_TOKEN_HOLDER_ADDRESS = 'tz1abmz7jiCV2GH2u81LRrGgAFFgvQgiDiaf'

// An address which should have some tokens.
// const TEST_ACCOUNT_ADDRESS = 'tz1YfB2H1NoZVUq4heHqrVX4oVp99yz8gwNq'

// Contracts
const CONTRACT_GROUP = CONTRACTS.SANDBOX

// Token Client under test.
const tokenClient = new TokenClient(NODE_URL, CONTRACT_GROUP.TOKEN!)

// Allow extra time for RPCs
jest.setTimeout(30_000) // 30 seconds

test('token client - reports zero for a non holder', async function () {
  // GIVEN a TokenClient

  // WHEN a balance is requested
  const balance = await tokenClient.getBalance(NON_TOKEN_HOLDER_ADDRESS)

  // THEN the balance is reported as zero.
  expect(balance.isEqualTo(new BigNumber(0))).toBeTruthy()
})

// TODO(keefertaylor): Write a test for an account that does have tokens.
