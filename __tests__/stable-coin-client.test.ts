import CONTRACTS from '../src/contracts'
import Network from '../src/network'
import StableCoinClient from '../src/stable-coin-client'
import sleep from './helpers/sleep'
import { InMemorySigner } from '@taquito/signer'
import BigNumber from 'bignumber.js'

/**
 * Tests for StableCoinClient.
 *
 * These tests are not hermetic.
 */

const NODE_URL = 'https://sandbox.hover.engineering'

// A test account
const TEST_ACCOUNT_ADDRESS = 'tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb'
const TEST_ACCOUNT_SECRET = 'edsk3QoqBuvdamxouPhin7swCvkQNgq4jP5KZPbwWNnwdZpSpJiEbq'

// Contracts
const CONTRACT_GROUP = CONTRACTS.SANDBOX

// Token Client under test.
const stableCoinClient = new StableCoinClient(
  NODE_URL,
  Network.Sandbox,
  CONTRACT_GROUP.OVEN_REGISTRY!,
  CONTRACT_GROUP.MINTER!,
  CONTRACT_GROUP.OVEN_FACTORY!,
)

// Time to sleep to let operations settle.
// TODO(keefertaylor): Dedupe this across tests.
const SLEEP_TIME = 120

// Allow extra time for RPCs and confirmations
// TODO(keefertaylor): Can we configure this timeout globally.
// TODO(keefertaylor): Consider reducing this when confirmations is a configurable parameter in stable coin client.
jest.setTimeout(60_000 * 5) // 5 minutes

// Retry 5 times to fix flakes.
jest.retryTimes(10)

test('stable coin client - deploys an oven', async function () {
  // Let any pending transactions settle
  await sleep(SLEEP_TIME)

  // GIVEN a StableCoinClient and a signer
  // TODO(keefertaylor): see if this can be refactored into a global before hook.
  const signer = await InMemorySigner.fromSecretKey(TEST_ACCOUNT_SECRET)

  // WHEN an oven is opened.
  const operationHash = await stableCoinClient.deployOven(signer)

  // THEN the operation hash exists.
  expect(operationHash).toBeDefined()
})

test('stable coin client - gets simple stability fee', async function () {
  // GIVEN a StableCoinClient

  // WHEN the simple stability fee is retrieved
  const simpleStabilityFee = await stableCoinClient.getSimpleStabilityFee()

  // THEN the ratio is the expected value
  // TODO(keefertaylor): Wire conversion utils.
  expect(simpleStabilityFee.isEqualTo(new BigNumber(18800000000))).toBeTruthy()
})

test('stable coin client - gets stability fee as apy', async function () {
  // GIVEN a StableCoinClient

  // WHEN the stability fee apy is retrieved
  const simpleStabilityFee = await stableCoinClient.getStabilityFeeApy()

  // THEN the ratio is the expected value
  expect(simpleStabilityFee.isGreaterThan(new BigNumber(0))).toBeTruthy()
})

test('stable coin client - gets collateralization ratio', async function () {
  // GIVEN a StableCoinClient

  // WHEN the collateralization ratio is retrieved
  const collateralizationRatio = await stableCoinClient.getRequiredCollateralizationRatio()

  // THEN the ratio is the expected value
  // TODO(keefertaylor): Wire conversion utils.
  expect(collateralizationRatio.isEqualTo(new BigNumber(200 * Math.pow(10, 18)))).toBeTruthy()
})

test('stable coin client - gets interest rate data', async function () {
  // GIVEN a StableCoinClient

  // WHEN interest rate data is retrieved
  const data = await stableCoinClient.getInterestData()

  // THEN the data is defined
  expect(data).toBeDefined()
})

test('stable coin client - retrieves oven count', async function () {
  // GIVEN a StableCoinClient

  // WHEN the oven count is retrieved.
  const ovenCount = await stableCoinClient.getOvenCount()

  // THEN a positive number of ovens are reported.
  expect(ovenCount).toBeGreaterThan(0)
})

test('stable coin client - retrieves ovens owned by address', async function () {
  // GIVEN a StableCoinClient

  // WHEN the list of ovens are returned for an address
  const ovens = await stableCoinClient.ovensOwnedByAddress(TEST_ACCOUNT_ADDRESS)

  // THEN a positive number of ovens are reported.
  expect(ovens.length).toBeGreaterThan(0)
})
