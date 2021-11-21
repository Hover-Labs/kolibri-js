import CONTRACTS from '../src/contracts'
import HarbingerClient from '../src/harbinger-client'
import BigNumber from 'bignumber.js'

/**
 * Tests for Harbinger client.
 *
 * These tests are not hermetic.
 */

const NODE_URL = 'https://sandbox.hover.engineering'

// Allow extra time for RPCs
jest.setTimeout(30_000) // 30 seconds

// Client under test
const harbingerClient = new HarbingerClient(NODE_URL, CONTRACTS.SANDBOX.HARBINGER_NORMALIZER!)

test('harbinger client - gets date', async function () {
  // GIVEN a Harbinger Client

  // WHEN price data is fetched
  const priceData = await harbingerClient.getPriceData()

  // THEN the data is less than an hour old
  const currentTime = Date.now() / 1000 // Javascript reports in MS instead of secs
  const priceFeedTime = priceData.time.getTime() / 1000
  const threeHours = 3 * 60 * 60
  const deltaSeconds = currentTime - priceFeedTime
  expect(deltaSeconds).toBeGreaterThanOrEqual(0)
  expect(deltaSeconds).toBeLessThan(threeHours)
})

test('harbinger client - gets price', async function () {
  // GIVEN a Harbinger Client

  // WHEN price data is fetched
  const priceData = await harbingerClient.getPriceData()

  // THEN the reported price is a realistic value (greater than $1 and less than $3)
  // TODO(keefertaylor): Create and use ConversionUtils
  const tezToXTZ = new BigNumber(Math.pow(10, 6))
  const priceInDollars = new BigNumber(priceData.price).dividedBy(tezToXTZ)
  expect(priceInDollars.isGreaterThanOrEqualTo(new BigNumber(1))).toBeTruthy()
  expect(priceInDollars.isLessThanOrEqualTo(new BigNumber(3))).toBeTruthy()
})
