/**
 * A property bag of known canonical contracts.
 */
const CONTRACTS = {
  // Currently Florencenet.
  ZERO: {
    // Core Contracts
    MINTER: 'KT1XRZcTtAMSona8scisWHMqjS1mPY9MYgAs',
    OVEN_PROXY: 'KT1SaLAE26yfEZNWDeMguHGynULz4MbXoo7i',
    OVEN_FACTORY: 'KT1DzoRyZi5EH4RRutBLiFbfQiXVzUZPp2mz',
    TOKEN: 'KT1TYGatFGXccm23ctedPScmkJZQjUN8n4iK',
    OVEN_REGISTRY: 'KT1NCBuKhGcBbQUPegZV87NweGN6EyYotGUR',
    DEVELOPER_FUND: 'KT1GaoN7QJf6BTBdAbBU4Sn2HkKBURYiKdWw',
    STABILITY_FUND: 'KT1EED1wfZcYS796kCm5qUDf3fngxSF67gRR',
    ORACLE: 'KT1Sf2MED2gU2tweMYaq7W9eoUgWZ5Fbxpdm',

    // Dependent contracts
    HARBINGER_NORMALIZER: 'KT1SUP27JhX24Kvr11oUdWswk7FnCW78ZyUn',

    // Kolibri Liqiudity Pool
    LIQUIDITY_POOL: 'KT1GYqNCmUnJSA5AkXxRzwovaLHRHnQkp1zK',

    // DEX Liquidity Pools
    DEXTER_POOL: '',
    QUIPUSWAP_POOL: 'KT1HWzVA95Ui3MeX8Pz5gQnnE1PT1DZjWJGE',

    // Below values are not applicable to testnet deployment.
    KOLIBRI_BAKER: 'tz3WXYtyDUNL91qfiCJtVUX746QpNv5i5ve5',

    // Governance Roles
    GOVERNOR: '',
    PAUSE_GUARDIAN: '',
    FUND_ADMIN: '',
  },
  TEST: {
    MINTER: 'KT1NqcE3wAjfp99EzwSsNdBuowaE3PmHaSCY',
    OVEN_PROXY: 'KT1PZKErvGKaKAV3qy4AKD4Dz5cunt3mnVyd',
    OVEN_FACTORY: 'KT1ALpDwwLGpxacBk1dkwmpbhGW3FTQ5cvvw',
    TOKEN: 'KT1L8zmG4ZwibgJwJxYZGJsjJeM7VA8qWEao',
    OVEN_REGISTRY: 'KT1AKDqitMnNYfhM24CsJmXQJM5mVEjn4zSa',
    DEVELOPER_FUND: 'KT1HoCss473Pvod9Ve1bRAVCmMdBgb9eCGsu',
    STABILITY_FUND: 'KT1Tm5b6xR5pWchW2nkJKfG9vRp7qSMjDxQn',
    ORACLE: 'KT1RHRDxB2NcPRzTti2Z2vL1aNQeKGxu8by8',
    HARBINGER_NORMALIZER: 'KT1RCNpUEDjZAYhabjzgz1ZfxQijCDVMEaTZ',

    // Kolibri Liqiudity Pool
    LIQUIDITY_POOL: 'KT1TTQL5Pv8KKfRDwXhsozNpLFAA76kzogiL',

    // DEX Liquidity Pools
    DEXTER_POOL: '',
    QUIPUSWAP_POOL: 'KT1MHhqWBK1aaCQdAQ1YLkuZyK8J1JJJBDuR',

    // Below values are not applicable to testnet deployment.
    KOLIBRI_BAKER: 'tz3WXYtyDUNL91qfiCJtVUX746QpNv5i5ve5',

    // Governance Roles
    GOVERNOR: '',
    PAUSE_GUARDIAN: '',
    FUND_ADMIN: '',
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
    FUND_ADMIN: 'KT1Le2tWBZv8KLQKJmZfLTVYiyaTELtx6zQW',
  },
}

export default CONTRACTS
