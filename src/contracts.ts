/**
 * A property bag of known canonical contracts.
 */
const CONTRACTS = {
  // Currently Florencenet.
  ZERO: {
    // Core Contracts
    MINTER: 'KT1KE5Y2Fd9UzAC4XwpLYWRqXHB9z7HWvrYF',
    OVEN_PROXY: 'KT1Vn25ue2srymaScZxJZtp6kc2V4rLQJP4R',
    OVEN_FACTORY: 'KT1Q1oqQV2xJbWhv43MMi2XkKaDCmtUxwHtY',
    TOKEN: 'KT1LWN8m9JMAzeV4nyfzpVigchr84NWGQbUw',
    OVEN_REGISTRY: 'KT1Q9g8SDry6xaLACc1i3JYuoFc95Jhm5ev2',
    DEVELOPER_FUND: 'KT1W362sRxV7gvdYZnAdRVD2eG1dmwKhN3kS',
    STABILITY_FUND: 'KT1X6v5nRD3PH4SqyEXrMtUcGhL7v7gJaWz6',
    ORACLE: 'KT1DVg3kBs9KZpz62pkrmLjgiS7qNDreuX8X',

    // Dependent contracts
    HARBINGER_NORMALIZER: 'KT1SUP27JhX24Kvr11oUdWswk7FnCW78ZyUn',
    // NOTE: Below values are not applicable to testnet deployment.
    KOLIBRI_BAKER: 'tz3WXYtyDUNL91qfiCJtVUX746QpNv5i5ve5',

    // Liquidity Pools
    DEXTER_POOL: '',
    QUIPUSWAP_POOL: '',

    // Governance Roles
    GOVERNOR: '',
    PAUSE_GUARDIAN: '',
    FUND_ADMIN: '',
  },
  TEST: {
    MINTER: 'KT1HerTuyyZBEX5Gtr6GvCjwgPL36p4jPsXX',
    OVEN_PROXY: 'KT1K3DSsQJha7HiYzVvuHUpEiubFPihPvq8Y',
    OVEN_FACTORY: 'KT1BQH1okg2cMg88P8CwRgiNvUpNBSh87PKv',
    TOKEN: 'KT1NSxh1bBJxHkT5ScXwzg4LcuNYQY1abrjR',
    OVEN_REGISTRY: 'KT1VzD6ttSzh7tG8WNvVnkBMi7roRCUoDQk1',
    DEVELOPER_FUND: 'KT1HKd8xE9nJe3JGMoE4hy4fHLvBiekd5Nnz',
    STABILITY_FUND: 'KT1Gjexj6kdDPgf1GDTboCiJyUwGUBcu9bzc',
    ORACLE: 'KT1AnzCgiibDXkWiakufXjBUeUtzuWNdNAXe',
    HARBINGER_NORMALIZER: 'KT1RCNpUEDjZAYhabjzgz1ZfxQijCDVMEaTZ',
    // Below values are not applicable to testnet deployment.
    KOLIBRI_BAKER: 'tz3WXYtyDUNL91qfiCJtVUX746QpNv5i5ve5',

    // Liquidity Pools
    DEXTER_POOL: '',
    QUIPUSWAP_POOL: '',

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

    // Liquidity Pools
    DEXTER_POOL: 'KT1AbYeDbjjcAnV1QK7EZUUdqku77CdkTuv6',
    QUIPUSWAP_POOL: 'KT1CiSKXR68qYSxnbzjwvfeMCRburaSDonT2',

    // Governance Roles
    GOVERNOR: 'KT1JBmbYxTv3xptk2CadgEdMfjUCUXKEfe5u',
    PAUSE_GUARDIAN: 'KT1VWKfxhcwJ8H7aRYEYjwaqAfBSQk4J7zAw',
    FUND_ADMIN: 'KT1Le2tWBZv8KLQKJmZfLTVYiyaTELtx6zQW',
  },
}

export default CONTRACTS
