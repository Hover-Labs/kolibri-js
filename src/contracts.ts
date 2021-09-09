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

    // DEX Configurations
    DEXES: {
      QUIPUSWAP: {
        POOL: null,
        FA1_2_FACTORY: null,
        FA2_FACTORY: null,
      },
      PLENTY: {
        POOL: null,
        PLENTY_QUIPUSWAP_POOL: null,
        PLENTY_TOKEN: null
      }
    },

    // Below values are not applicable to testnet deployment.
    KOLIBRI_BAKER: null,

    // Governance Roles
    GOVERNOR: null,
    PAUSE_GUARDIAN: null,
    BREAK_GLASS_MULTISIG: null,
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
  // Currently Granadanet
  TEST: {
    MINTER: 'KT1VbxEqFMijFsMoL5v3u2fhLPWVWPH3jP8H',
    OVEN_PROXY: 'KT1NxrySajZEbDEdoDa6rG4YL4jvAatzdDrs',
    OVEN_FACTORY: 'KT1SyzcYyaA8wp7JoZzxMZtB7ugvK3XvFF1V',
    TOKEN: 'KT1VKtbg6piYE3GowALFN6P8MFQF3MMZT44j',
    OVEN_REGISTRY: 'KT1Ez2RCnrXYK1ffrhpJAZuiJPy971HaZmYg',
    DEVELOPER_FUND: 'KT1AzhPYRh5nAUJ9Bcor4GVWPcwXidfstmua',
    STABILITY_FUND: 'KT1Kixna8UhDjwFqSV4sfbS4J5fSnqcJc8YS',
    ORACLE: 'KT1KAgw6myNA9iH3AAg1P5BtztWeAGguGTSr',
    HARBINGER_NORMALIZER: 'KT1SUP27JhX24Kvr11oUdWswk7FnCW78ZyUn',

    // Kolibri Liquidity Pool
    LIQUIDITY_POOL: 'KT1AQuWowr3WKwF69oTGcKaJrMajic3CKwR2',

    // DEX Configurations
    DEXES: {
      QUIPUSWAP: {
        POOL: "KT1BatFVF1vchbxANDJRVccKEdYppqe58Pxg",
        FA1_2_FACTORY: 'KT1EmfR5bSZN7mWgapE8FZKdbJ3NLjDHGZmd',
        FA2_FACTORY: null,
      },
      PLENTY: {
        POOL: null,
        PLENTY_QUIPUSWAP_POOL: null,
        PLENTY_TOKEN: null,
      }
    },

    // Below values are not applicable to testnet deployment.
    KOLIBRI_BAKER: 'tz1burnburnburnburnburnburnburjAYjjX',

    // Governance Roles
    GOVERNOR: 'KT1AqANbbQwdrSrAX5aDrZpwhQCX8mFoX6Si',
    PAUSE_GUARDIAN: 'KT1Qzm95Cd9C6CmAfwVKLCp5rxkwC2G9pi1k',
    BREAK_GLASS_MULTISIG: 'KT1VqdBh1iHcQj5BMsi5XpnTSqQpLtLDWTKe',
    FUND_ADMIN: null,

    // DAO
    DAO: 'KT1XXaDPnHktNboNpAxP7YsFs1Bhye5rgjZ5',
    DAO_TOKEN: 'KT1LDn9Mh3Y8MxMHDFtnG4q1BQVeTMNbgfgq',
    DAO_COMMUNITY_FUND: 'KT1CmS2LrMmQ5JHgPsmAByhQBg9BJUh2i8Vb',

    // Farm Stuff
    FARMS: {
      KUSD: {
        farm: 'KT1BWmQPzn8GcQkQTaU6tRFRgrpPQFpMYBtW',
        reserve: 'KT1EmweeRXWBQsRmzp3YrV4fftpS4nSdWPcx',
      },
      QLKUSD: {
        farm: 'KT1MQEKWeJC1ei95GwtJaezT4cQp8i5CNus8',
        reserve: 'KT1WmrPTHTFNzoC4BA34Hi9PS8qMJZAkFedQ',
      },
      KUSD_LP: {
        farm: 'KT1TgMN91K55if1caJgFQqM7BEazkpAxBFAJ',
        reserve: 'KT1JmgmXTDwsTxGpCYnNXuE8KKkR31JDdLbE',
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

    // DEX Configurations
    DEXES: {
      QUIPUSWAP: {
        POOL: "KT1K4EwTpbvYN9agJdjpyJm4ZZdhpUNKB3F6",
        FA1_2_FACTORY: 'KT1Lw8hCoaBrHeTeMXbqHPG4sS4K1xn7yKcD',
        FA2_FACTORY: 'KT1SwH9P1Tx8a58Mm6qBExQFTcy2rwZyZiXS',
      },
      PLENTY: {
        POOL: "KT1UNBvCJXiwJY6tmHM7CJUVwNPew53XkSfh",
        PLENTY_QUIPUSWAP_POOL: "KT1X1LgNkQShpF9nRLYw3Dgdy4qp38MX617z",
        PLENTY_TOKEN: "KT1GRSvLoikDsXujKgZPsGLX8k8VvR2Tq95b"
      }
    },

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
      KUSD: {
        farm: 'KT1HDXjPtjv7Y7XtJxrNc5rNjnegTi2ZzNfv',
        reserve: 'KT1GmtXscYcFhgpcXDuY6Dk6hYqpErsYmxp2',
      },
      QLKUSD: {
        farm: 'KT18oxtA5uyhyYXyAVhTa7agJmxHCTjHpiF7',
        reserve: 'KT1XqMecdis3bZTeLQn6qVYPsWNoh9cWtbot',
      },
      KUSD_LP: {
        farm: 'KT1RB179ddATKbCi7E8ben91bo2hqRRPrNQf',
        reserve: 'KT1UUZvqqBpR6oku4YDxb1oDDfxrfiKaAMgA',
      },
    },
  },
}

export default CONTRACTS
