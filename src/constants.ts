import BigNumber from 'bignumber.js'

/** The number of seconds in a compound interest period */
const COMPOUND_PERIOD_SECONDS = 60

/** Constants used across Kolibri-JS */
const CONSTANTS = {
  COMPOUND_PERIOD_SECONDS,

  /** The number of periods that occur per year. */
  COMPOUNDS_PER_YEAR: (365 * 24 * 60 * 60) / COMPOUND_PERIOD_SECONDS, // (Number of seconds in year) / (seconds per compound)

  /** The number of decimals in smart contract precision */
  PRECISION: new BigNumber(Math.pow(10, 18)),
}

export default CONSTANTS
