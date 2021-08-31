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
      }
    }

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
  // Currently Florencenet
  TEST: {
    MINTER: 'KT1Dyo9ejFcYdberxNccnM5dXW4BQeHywzVW',
    OVEN_PROXY: 'KT19bJZ5tFj6b18UHCoFzBJDSKjw7YPSPCoe',
    OVEN_FACTORY: 'KT1W9U8hHMVkNLCX3wzARbQNPThVCXsx1zWn',
    TOKEN: 'KT1Q311Q9mq96oyGTgTurV1qUb4ZJhxtt7vc',
    OVEN_REGISTRY: 'KT1MvP45tMbML1HLj7kbWPgBJVMg3U8kaELy',
    DEVELOPER_FUND: 'KT1TEBPhW5vU9Gx4Uhk7uT8woagL4Fnq8Dy1',
    STABILITY_FUND: 'KT1MJvEb8Y42fGEqGtc73xafKjKviBJyjbFG',
    ORACLE: 'KT1FfvNSwMLkTQRHZAen2AwPsJn5zTVmBCmo',
    HARBINGER_NORMALIZER: 'KT1SUP27JhX24Kvr11oUdWswk7FnCW78ZyUn',

    // Kolibri Liquidity Pool
    LIQUIDITY_POOL: 'KT19RUbUUizsy7arXiziEi9d2nfJNMG74KxS',

    // DEX Configurations
    DEXES: {
      QUIPUSWAP: {
        POOL: "KT1XcRsVNqvwRNyfoqZaKenPT2mQdLd2d8fS",
        FA1_2_FACTORY: 'KT195gyo5G7pay2tYweWDeYFkGLqcvQTXoCW',
        FA2_FACTORY: 'KT1HjLwPC3sbh6W5HjaKBsiVPTgptcNbnXnc',
      }
    },

    // Below values are not applicable to testnet deployment.
    KOLIBRI_BAKER: 'tz1burnburnburnburnburnburnburjAYjjX',

    // Governance Roles
    GOVERNOR: 'KT1FgXQEvUrkNcEq2NhWTDrbMDsYVcqiyzKk',
    PAUSE_GUARDIAN: 'KT1HJsPFQraWeSLYAKFCMkqb8cEMnoxbUNcY',
    BREAK_GLASS_MULTISIG: 'KT1XSm7VjrdzafKzyfHPfNCWjvZRbLATG8uL',
    FUND_ADMIN: null,

    // DAO
    DAO: 'KT1E3aVbNwX5AwpSQ151dp3Qg4Wf9mGEs3ex',
    DAO_TOKEN: 'KT1AWcomAKZCnksHc5QdnBWPPtt3mGY8jgaD',
    DAO_COMMUNITY_FUND: 'KT1V7QWkYyjym6T2MCREQCRE4E2RcRFe5JPW',

    // Farm Stuff
    FARMS: {
      KUSD: {
        farm: 'KT1UZmapT4rQ5Jdo2N4GDt2AywcZrUhJ611g',
        reserve: 'KT1KwTXw5WqXJbBPVZvdxtd92izd6YWCepwc',
      },
      QLKUSD: {
        farm: 'KT1RhRMT8A6vK9J36TNPKe4gSahptZjjtwPR',
        reserve: 'KT1RTzkFurCPRQzFabszTiDavysDrJwcZAan',
      },
      KUSD_LP: {
        farm: 'KT1NarJp1kXFKaSqDoRhtj53eMFuLP1GRTz3',
        reserve: 'KT1EuDcUmubxJgfZcXXpvSiPkahJpW5nMFQ3',
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
