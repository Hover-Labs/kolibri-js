import { InMemorySigner } from '@taquito/signer'
import OvenClient from '../src/oven-client'
import HarbingerClient from '../src/harbinger-client'
import BigNumber from 'bignumber.js'
import sleep from './helpers/sleep'
import StableCoinClient from '../src/stable-coin-client'
import Network from '../src/network'
import CONTRACTS from '../src/contracts'

/**
 * Tests for an OvenClient.
 *
 * These tests are not hermetic.
 */

// Allow extra time for RPCs
jest.setTimeout(60_000 * 10) // 10 minutes

const NODE_URL = 'https://rpctest.tzbeta.net'

// Adress of an oven.
const OVEN_ADDRESS = 'KT1SXhvMjA4RVEjWuLyrsYgt1TU3xfeLUDEb'

// Secret for a test account.
const TEST_ACCOUNT_SECRET =
  'edsk3aeocSRnxdWVFm3ShaALUeCTy4PgL6JdeGvzbLjX5jn8D9ZXw5'

// A StableCoinClient
const stableCoinClient = new StableCoinClient(
  NODE_URL,
  Network.Delphi,
  CONTRACTS.DELPHI.OVEN_REGISTRY,
  CONTRACTS.DELPHI.MINTER,
  CONTRACTS.DELPHI.OVEN_FACTORY,
)

// Time to sleep to let operations settle.
const SLEEP_TIME = 120

// Retry 5 times to fix flakes.
jest.retryTimes(10)

// Harbinger Client
const harbingerClient = new HarbingerClient(
  NODE_URL,
  CONTRACTS.DELPHI.HARBINGER_NORMALIZER,
)

test('oven client - can borrow', async function () {
  // Let any pending transactions settle
  await sleep(SLEEP_TIME)

  // GIVEN an OvenClient
  const signer = await InMemorySigner.fromSecretKey(TEST_ACCOUNT_SECRET)
  const ovenClient = new OvenClient(
    NODE_URL,
    signer,
    OVEN_ADDRESS,
    stableCoinClient,
    harbingerClient,
  )

  // WHEN borrow is called
  const operationHash = await ovenClient.borrow(
    new BigNumber(100 * Math.pow(10, 18)),
  )

  // THEN the hash exists
  expect(operationHash).toBeDefined()
})

test('oven client - gets collateralization ratio', async function () {
  // GIVEN an OvenClient
  // TODO(keefertaylor): Refactor this to be in one place.
  const signer = await InMemorySigner.fromSecretKey(TEST_ACCOUNT_SECRET)

  const ovenClient = new OvenClient(
    NODE_URL,
    signer,
    OVEN_ADDRESS,
    stableCoinClient,
    harbingerClient,
  )

  // WHEN the collateralization ratio is retrieved
  const collateralizationRatio = await ovenClient.getCollateralizationRatio()

  // THEN the ratio is positive
  expect(collateralizationRatio.isGreaterThan(new BigNumber(0))).toBeTruthy()
})

test('oven client - gets and sets baker', async function () {
  // Let any pending transactions settle
  await sleep(SLEEP_TIME)

  // GIVEN an OvenClient
  // TODO(keefertaylor): Refactor this to be in one place.
  const signer = await InMemorySigner.fromSecretKey(TEST_ACCOUNT_SECRET)
  const ovenClient = new OvenClient(
    NODE_URL,
    signer,
    OVEN_ADDRESS,
    stableCoinClient,
    harbingerClient,
  )

  // WHEN a baker is set to none
  const clearBakerHash = await ovenClient.setBaker(null)
  await sleep(SLEEP_TIME)

  // THEN the operation hash exists
  expect(clearBakerHash).toBeDefined()

  // WHEN the baker is retrieved
  let baker: string | null = await ovenClient.getBaker()

  // THEN the baker is undefined.
  expect(baker).toBeNull()

  // WHEN the baker is set.
  const newBaker = 'tz1RomaiWJV3NFDZWTMVR2aEeHknsn3iF5Gi'
  const setBakerHash = await ovenClient.setBaker(newBaker)
  await sleep(SLEEP_TIME)

  // THEN the hash exists.
  expect(setBakerHash).toBeDefined()

  // WHEN the baker is retrieved.
  baker = await ovenClient.getBaker()

  // THEN the baker is the new baker.
  expect(baker).toEqual(newBaker)
})

test('oven client - getOwner', async function () {
  // GIVEN an OvenClient
  // TODO(keefertaylor): Refactor this to be in one place.
  const signer = await InMemorySigner.fromSecretKey(TEST_ACCOUNT_SECRET)
  const ovenClient = new OvenClient(
    NODE_URL,
    signer,
    OVEN_ADDRESS,
    stableCoinClient,
    harbingerClient,
  )

  // WHEN the owner is retrieved
  const owner = await ovenClient.getOwner()

  // THEN the stability fees are positive.
  expect(owner).toEqual('tz1YfB2H1NoZVUq4heHqrVX4oVp99yz8gwNq')
})

test('oven client - isLiquidated', async function () {
  // GIVEN an OvenClient
  // TODO(keefertaylor): Refactor this to be in one place.
  const signer = await InMemorySigner.fromSecretKey(TEST_ACCOUNT_SECRET)
  const ovenClient = new OvenClient(
    NODE_URL,
    signer,
    OVEN_ADDRESS,
    stableCoinClient,
    harbingerClient,
  )

  // WHEN liquidation is tested for.
  const isLiquidated = await ovenClient.isLiquidated()

  // THEN the stability fees are positive.
  expect(isLiquidated).toEqual(false)
})

test('oven client - retrieves borrowed tokens', async function () {
  // GIVEN an OvenClient
  // TODO(keefertaylor): Refactor this to be in one place.
  const signer = await InMemorySigner.fromSecretKey(TEST_ACCOUNT_SECRET)
  const ovenClient = new OvenClient(
    NODE_URL,
    signer,
    OVEN_ADDRESS,
    stableCoinClient,
    harbingerClient,
  )

  // WHEN the amount of borrowed tokens is retrieved.
  const borrowedTokens = await ovenClient.getBorrowedTokens()

  // THEN the stability fees are positive.
  expect(borrowedTokens.isGreaterThan(0)).toBeTruthy()
})

test('oven client - retrieves stability fees', async function () {
  // GIVEN an OvenClient
  // TODO(keefertaylor): Refactor this to be in one place.
  const signer = await InMemorySigner.fromSecretKey(TEST_ACCOUNT_SECRET)
  const ovenClient = new OvenClient(
    NODE_URL,
    signer,
    OVEN_ADDRESS,
    stableCoinClient,
    harbingerClient,
  )

  // WHEN stability fees are retrieved.
  const stabilityFees = await ovenClient.getStabilityFees()

  // THEN the stability fees are positive.
  expect(stabilityFees.isGreaterThan(0)).toBeTruthy()
})

test('oven client - retrieves total outstanding tokens', async function () {
  // GIVEN an OvenClient
  // TODO(keefertaylor): Refactor this to be in one place.
  const signer = await InMemorySigner.fromSecretKey(TEST_ACCOUNT_SECRET)
  const ovenClient = new OvenClient(
    NODE_URL,
    signer,
    OVEN_ADDRESS,
    stableCoinClient,
    harbingerClient,
  )

  // WHEN the total outstanding tokens are retrieved.
  const totalOutstandingTokens = await ovenClient.getTotalOutstandingTokens()
  const stabilityFees = await ovenClient.getStabilityFees()
  const borrowedTokens = await ovenClient.getBorrowedTokens()

  // THEN the total outstanding tokens are greater than the stability fees and the borrowed tokens.
  expect(totalOutstandingTokens.isGreaterThan(stabilityFees)).toBeTruthy()
  expect(totalOutstandingTokens.isGreaterThan(borrowedTokens)).toBeTruthy()
})

test('oven client - retrieves oven balance', async function () {
  // GIVEN an OvenClient
  // TODO(keefertaylor): Refactor this to be in one place.
  const signer = await InMemorySigner.fromSecretKey(TEST_ACCOUNT_SECRET)
  const ovenClient = new OvenClient(
    NODE_URL,
    signer,
    OVEN_ADDRESS,
    stableCoinClient,
    harbingerClient,
  )

  // WHEN the balance is retrieved.
  const balance = await ovenClient.getBalance()

  // THEN the balance is positive.
  expect(balance.isGreaterThan(0)).toBeTruthy()
})

test('oven client - can deposit', async function () {
  // Let any pending transactions settle
  await sleep(SLEEP_TIME)

  // GIVEN an OvenClient
  // TODO(keefertaylor): Refactor this to be in one place.
  const signer = await InMemorySigner.fromSecretKey(TEST_ACCOUNT_SECRET)
  const ovenClient = new OvenClient(
    NODE_URL,
    signer,
    OVEN_ADDRESS,
    stableCoinClient,
    harbingerClient,
  )

  // WHEN a deposit is processed
  const operationHash = await ovenClient.deposit(new BigNumber(1_000_000))

  // THEN the hash exists
  expect(operationHash).toBeDefined()
})

test('oven client - can withdraw', async function () {
  // Let any pending transactions settle
  await sleep(SLEEP_TIME)

  // GIVEN an OvenClient
  const signer = await InMemorySigner.fromSecretKey(TEST_ACCOUNT_SECRET)
  const ovenClient = new OvenClient(
    NODE_URL,
    signer,
    OVEN_ADDRESS,
    stableCoinClient,
    harbingerClient,
  )

  // WHEN withdraw is called
  const operationHash = await ovenClient.withdraw(new BigNumber('900000'))

  // THEN the hash exists
  expect(operationHash).toBeDefined()
})

test('oven client - can repay', async function () {
  // Let any pending transactions settle
  await sleep(SLEEP_TIME)

  // GIVEN an OvenClient
  const signer = await InMemorySigner.fromSecretKey(TEST_ACCOUNT_SECRET)
  const ovenClient = new OvenClient(
    NODE_URL,
    signer,
    OVEN_ADDRESS,
    stableCoinClient,
    harbingerClient,
  )

  // WHEN borrows is called
  const operationHash = await ovenClient.repay(
    new BigNumber(10 * Math.pow(10, 18)),
  )

  // THEN the hash exists
  expect(operationHash).toBeDefined()
})
