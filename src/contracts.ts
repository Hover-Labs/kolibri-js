/**
 * A property bag of known canonical contracts.
 */

import { Contracts } from './types/contracts'

const CONTRACTS: Contracts = {
  // Currently Granada.
  ZERO: {
    // Core Contracts
    MINTER: null,
    OVEN_PROXY: null,
    OVEN_FACTORY: null,
    TOKEN: null,
    OVEN_REGISTRY: null,
    DEVELOPER_FUND: null,
    STABILITY_FUND: null,
    ORACLE: null,

    // Dependent contracts
    HARBINGER_NORMALIZER: null,

    // Kolibri Liqiudity Pool
    LIQUIDITY_POOL: null,

    // DEX Liquidity Pools
    DEXTER_POOL: null,
    QUIPUSWAP_POOL: null,

    // Below values are not applicable to testnet deployment.
    KOLIBRI_BAKER: null,

    // Governance Roles
    GOVERNOR: null,
    PAUSE_GUARDIAN: null,
    FUND_ADMIN: null,

    // DAO
    DAO: null,
    DAO_TOKEN: null,
    DAO_COMMUNITY_FUND: null,

    // Farm Stuff
    FARMS: {
      KUSD: { farm: null, reserve: null },
      QLKUSD: { farm: null, reserve: null },
      KUSD_LP: { farm: null, reserve: null },
    },
  },
  // Currently Florencenet
  TEST: {
    MINTER: 'KT1D9u1ef1VzRZx8AjpsLJCqv4uPFLmzdT5W',
    OVEN_PROXY: 'KT1X1BYZF3wP9EAZ7okYv87zhkrTKbDjug26',
    OVEN_FACTORY: 'KT1Tyq8vniz3XkpkhDmZti7dsNcfGHu67cLr',
    TOKEN: 'KT1HXo8XvX5ocv7CVxL4j4MAbkdQ2cN9iYnt',
    OVEN_REGISTRY: 'KT1VxKv1vK6uBs13sMLaRRrUXR9R2L2LNKdZ',
    DEVELOPER_FUND: 'KT1QVurDjLM8f5raBqk6JgKamKU1iWSAmoBC',
    STABILITY_FUND: 'KT1UhVNRdzSrriNdbcbBkQqqekTD6kkbSC9T',
    ORACLE: 'KT1AqL2o5PLzJKBdt8hvC3kSLRHUPYDrnPeY',
    HARBINGER_NORMALIZER: 'KT1SUP27JhX24Kvr11oUdWswk7FnCW78ZyUn',

    // Kolibri Liquidity Pool
    LIQUIDITY_POOL: 'KT1BdG1nhvkERTxT54PEguqwBxmvMPv3cnXT',

    // DEX Liquidity Pools
    DEXTER_POOL: null,
    QUIPUSWAP_POOL: 'KT1NXCok7TeTd83y4zQPPJDFD13PmjkXJYZR',

    // Below values are not applicable to testnet deployment.
    KOLIBRI_BAKER: 'tz1burnburnburnburnburnburnburjAYjjX',

    // Governance Roles
    GOVERNOR: 'KT1MXu5TeCGawRrUUzm4FNbYmXfmUH9CWn9E',
    PAUSE_GUARDIAN: 'KT18fXMqzPastzmV7x39Aci25V5Aecy7iary',
    FUND_ADMIN: null,

    // DAO
    DAO: 'KT1CPgrVxyjGodR85ThAQCYgQwVJGB9HwpJR',
    DAO_TOKEN: 'KT1QaYndtyAs12EdUWBb5vWUnY5JWD4CpHdE',
    DAO_COMMUNITY_FUND: 'KT1E1E3C9fkqKBdFxBjgicMUMkfy1WgvVDpx',

    // Farm Stuff
    FARMS: {
      KUSD: {
        farm: 'KT1JxGBRxMHjsTEbngoS1tngssHaH2qsWFfR',
        reserve: 'KT1VKkZaVfE4B4H7HT9hJUwU2RKGg1VtgUwq',
      },
      QLKUSD: {
        farm: 'KT1UFJyomYDoqfq3iAA9VcrTVZ6hdZRHHhr9',
        reserve: 'KT19aGWgJWn3jdWsnax2tyaJEPWAAYz3Zxpe',
      },
      KUSD_LP: {
        farm: 'KT1Pujim4kvDhcav5wSddfkvUkqVHbYASr9S',
        reserve: 'KT1MDGh6gbyvTft7YHWyRzrzthFAjBo8w2Ax',
      },
    },
  },
  MAIN: {
    // Core Contracts
    MINTER: 'KT1Ty2uAmF5JxWyeGrVpk17MEyzVB8cXs8aJ',
    OVEN_PROXY: 'KT1JdufSdfg3WyxWJcCRNsBFV9V3x9TQBkJ2',
    OVEN_FACTORY: 'KT1Mgy95DVzqVBNYhsW93cyHuB57Q94UFhrh',
    TOKEN: 'KT1K9gCRgaLRFKTErYt1wVxA3Frb9FjasjTV',
    OVEN_REGISTRY: 'KT1Ldn1XWQmk7J4pYgGFjjwV57Ew8NYvcNtJ',
    DEVELOPER_FUND: 'KT1SorR4UFBkUJeYVbtXZBNivUV1cQM6AqRR',
    STABILITY_FUND: 'KT18wngSoTUqEJiNaYuhcrfYCtsczLUVVkTp',
    ORACLE: 'KT1Tj6xknbwjyK5gyfESNR6WESBcP3yX1mmj',

    // Dependent Contracts
    HARBINGER_NORMALIZER: 'KT1AdbYiPYb5hDuEuVrfxmFehtnBCXv4Np7r',
    KOLIBRI_BAKER: 'tz1abmz7jiCV2GH2u81LRrGgAFFgvQgiDiaf',

    // Kolibri Liqiudity Pool
    LIQUIDITY_POOL: 'KT1AxaBxkFLCUi3f8rdDAAxBKHfzY8LfKDRA',

    // DEX Liquidity Pools
    DEXTER_POOL: 'KT1AbYeDbjjcAnV1QK7EZUUdqku77CdkTuv6',
    QUIPUSWAP_POOL: 'KT1K4EwTpbvYN9agJdjpyJm4ZZdhpUNKB3F6',

    // Governance Roles
    GOVERNOR: 'KT1JBmbYxTv3xptk2CadgEdMfjUCUXKEfe5u',
    PAUSE_GUARDIAN: 'KT1VWKfxhcwJ8H7aRYEYjwaqAfBSQk4J7zAw',
    BREAK_GLASS_MULTISIG: 'KT1PQXekmMqzhT1NHn9QmehEFKQWbkvM6eP2',
    FUND_ADMIN: 'KT1Le2tWBZv8KLQKJmZfLTVYiyaTELtx6zQW',

    // DAO
    DAO: 'KT1WZ1HJyx5wPt96ZTjtWPotoPUk7pXNPfT2',
    DAO_TOKEN: 'KT1JkoE42rrMBP9b2oDhbx6EUr26GcySZMUH',
    DAO_COMMUNITY_FUND: 'KT1RyoAZJ3za3FzYsTJYvqzzq4oEW5xnumdQ',

    // Farm Stuff
    FARMS: {
      KUSD: { farm: 'KT1HDXjPtjv7Y7XtJxrNc5rNjnegTi2ZzNfv', reserve: 'KT1GmtXscYcFhgpcXDuY6Dk6hYqpErsYmxp2' },
      QLKUSD: { farm: 'KT18oxtA5uyhyYXyAVhTa7agJmxHCTjHpiF7', reserve: 'KT1XqMecdis3bZTeLQn6qVYPsWNoh9cWtbot' },
      KUSD_LP: { farm: 'KT1RB179ddATKbCi7E8ben91bo2hqRRPrNQf', reserve: 'KT1UUZvqqBpR6oku4YDxb1oDDfxrfiKaAMgA' },
    },
  },
}

export default CONTRACTS
