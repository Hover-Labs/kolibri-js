import { ContractGroup } from '../types/contracts'

const contracts: ContractGroup = {
  MINTER: 'KT1ECitbrVyYeVQJQXC8CLpyGsumSXNjm72R',
  OVEN_PROXY: 'KT1Qd8gG2uqPrpTiykxPY8omJzR3Rf9A53fg',
  OVEN_FACTORY: 'KT1GpuNB3CBnX7vv9fdfNbisUqJpXgb1SQxr',
  TOKEN: 'KT1MDQ2wiBTKnkznULsdKgpyf9AL9qsF3x7C',
  OVEN_REGISTRY: 'KT1U4dr4RHRWBTUQ9Fj63k78RYNB4diqvMUy',
  DEVELOPER_FUND: 'KT1LJEQMzwHRTceGmGPR8tbAH5mMSkPXFZPv',
  STABILITY_FUND: 'KT1JPwovHNegWZLpxGNrNd64m9LiYkhCiEhQ',
  ORACLE: 'KT1FBFtoqsodkLRQndRsrcrCv5VMdFik6ZU4',
  HARBINGER_NORMALIZER: 'KT1PMQZxQTrFPJn3pEaj9rvGfJA9Hvx7Z1CL',
  YOUVES_PROXY: null,

  LIQUIDITY_POOL: 'KT1Wt4bHiSaZjA35FdyXV1bBhLFTEo9DudKB',
  SAVINGS_POOL: null,

  DEXES: {
    QUIPUSWAP: {
      POOL: 'KT1HbTh2sCEJjRds46DxBUUYqtKpZDWPMJNJ',
      FA1_2_FACTORY: 'KT1HrQWkSFe7ugihjoMWwQ7p8ja9e18LdUFn',
      FA2_FACTORY: null,
    },
    PLENTY: {
      POOL: null,
      PLENTY_QUIPUSWAP_POOL: null,
      PLENTY_TOKEN: null,
    },
  },

  KOLIBRI_BAKER: 'tz1aWXP237BLwNHJcCD4b3DutCevhqq2T1Z9', // Random

  GOVERNOR: 'KT1QRWpDtE6ZK4gBpZKpjfrN2QJN5MjQZuxD',
  PAUSE_GUARDIAN: 'KT1QvrDcaket7jsLF6jyUma9ixFkH4jH1J99',
  BREAK_GLASS_MULTISIG: 'KT1LHF8Uc5MWgnHHHSvkbkcrd8FiRVh4L1tF',
  FUND_ADMIN: 'KT1QvrDcaket7jsLF6jyUma9ixFkH4jH1J99',

  DAO: 'KT1LTnsLdnc4QcdtQPXWrqy5nx2QfJ1cHXpy',
  DAO_TOKEN: 'KT1JxNEcPUTVwqKzaBe2cAw6rQmjF5Kx7CmG',
  DAO_COMMUNITY_FUND: 'KT1MfDcTYvqjNmjQKHRxr9YDphLTtMUYHbvG',

  FARMS: {
    KUSD: {
      farm: 'KT1AUFT5ySxK2UE63x689X3V26wt48UkiMWK',
      reserve: 'KT1Rpns7j1o53SRSAcLoaEMW8t7YbfgqNsxC',
    },
    QLKUSD: {
      farm: 'KT1RLPgXPofFdfKNc7ckbjm4bAwk1RMDqhDB',
      reserve: 'KT1XdY1J9ZJXTHngX8EewVDUzqSa1mUGTfXF',
    },
    KUSD_LP: {
      farm: 'KT1TscJ89RMksEb4CEca41hJo49Fyhicmqgv',
      reserve: 'KT1UpoukRNFNYykzuSxjVqfUXa5ApzUcPqZB',
    },
    YOUVES_FLAT: {
      farm: null,
      reserve: null,
    },
  },

  PAYMENT_VAULTS: {
    tz1YeYpdJshsXxkPdSdKUJaF1QmH1ngCrJ7V: ['KT1UpziYhnqkLmhHhjBKAf4Z4VqPDW9jaK7J'],
    tz1Xh11mHYWxbYHv55AVhsPPPJeSp8PunERB: ['KT1NVBwsunSuFwxUWki5Y5ZW7voaXahGUpWf'],
    tz1cNABC2qtbbHKDDKdvxRkcyopL1kEfbpgV: ['KT1D1UyDWN2Q52SENuWjq8DdxVqqsmqQT1JQ'],
  },

  VOTING_VAULTS: {
    tz1YeYpdJshsXxkPdSdKUJaF1QmH1ngCrJ7V: 'KT1UpziYhnqkLmhHhjBKAf4Z4VqPDW9jaK7J',
    tz1Xh11mHYWxbYHv55AVhsPPPJeSp8PunERB: 'KT1NVBwsunSuFwxUWki5Y5ZW7voaXahGUpWf',
    tz1cNABC2qtbbHKDDKdvxRkcyopL1kEfbpgV: 'KT1D1UyDWN2Q52SENuWjq8DdxVqqsmqQT1JQ',
  },

  BREAK_GLASS_CONTRACTS: {
    MINTER: 'KT1PuF7NbRKZTyxHsijboUobFrSQFFCG2uDf',
    OVEN_PROXY: 'KT1HeWCmuEGsyE3czZ33hz1ViZYQF9xu8jLH',
    OVEN_FACTORY: 'KT1QAiqr7TfMvQu1g7DCBoHnR6mEsRD6UstC',
    TOKEN: 'KT1QK94ic1fdkRqTuz65MGBVZgsUshaAGajh',
    OVEN_REGISTRY: 'KT1KCbEcRNXe2xHQQxZp2vd8Z2gAKAHnyoun',
    DEVELOPER_FUND: 'KT1DNwiDbWSWC7Ds2dtJDsapsGjHQ2PG8Nwn',
    STABILITY_FUND: 'KT1M5mg5SnwmAVxRpSByJuZA6jVxwAbkimoF',
    ORACLE: 'KT1KgFbmCzM7zAUUTcEaRY8ihLqP4qbECnhU',
    LIQUIDITY_POOL: 'KT1GgmsuYQKGZijaftRELjHuTUF7bFvHurY3',
    SAVINGS_POOL: null,
    DAO_COMMUNITY_FUND: 'KT197Z7Ajs3xDzACJgJH2GS4c3HkwKyiKC7A',
    PAYMENT_VAULTS: {
      tz1YeYpdJshsXxkPdSdKUJaF1QmH1ngCrJ7V: ['KT1MzxAPTk1rcrf3QtfPFQdAG3TCCpwzBqGB'],
      tz1Xh11mHYWxbYHv55AVhsPPPJeSp8PunERB: ['KT1X4ZjbEWSPZsMbBy9FT5LfhWfUQHG6dvD9'],
      tz1cNABC2qtbbHKDDKdvxRkcyopL1kEfbpgV: ['KT1Kb5Pd9KtZ3RzoQnu1jrkskbGJG94fRhcb'],
    },
  },
}

export default contracts
