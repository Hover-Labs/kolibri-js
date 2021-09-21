import { ContractGroup } from '../types/contracts'

const contracts: ContractGroup = {
  MINTER: 'KT1Vwqaf7RCKfzcQ6r6JpQN1cWmy6Z2z2qu1',
  OVEN_PROXY: 'KT1C39aEForRcXyjw1sHwSThX1tKHnTxRUdo',
  OVEN_FACTORY: 'KT1CmUwZTtHFgoELFbipZKKR1X3WPz88Zdnh',
  TOKEN: 'KT1LrCSMUKKyZwhnKh9EXhvTspJ4YP1et95U',
  OVEN_REGISTRY: 'KT1NeEZDA2HuLpuhwRJ4fZ7sqcYfgxpGBoya',
  DEVELOPER_FUND: 'KT1BEDFemDcC5K6QYVXF2oW6bcjw2Q9yVchw',
  STABILITY_FUND: 'KT1DaCndUJwZzCr7BiZRH8mxr6mpPu88mJpe',
  ORACLE: 'KT1PKen2GEgadnzzvxhSCNmAZc2EKKzssUYv',
  HARBINGER_NORMALIZER: 'KT1LV3DjqarkgQ4PvCZCgbAKYi438WYcehTu',

  LIQUIDITY_POOL: 'KT1LgMkgxNiNoRc6niDjcjwBCnFJMsET8LNq',

  DEXES: {
    QUIPUSWAP: {
      POOL: 'KT1N3YZz4yq732Jdy7BSEWbFsSvvoTDFa1si',
      FA1_2_FACTORY: 'KT1N4jJ9VPYv33PLtuihowJ1Jt7YaBcwPNds',
      FA2_FACTORY: null,
    },
    PLENTY: {
      POOL: null,
      PLENTY_QUIPUSWAP_POOL: null,
      PLENTY_TOKEN: null,
    },
  },

  KOLIBRI_BAKER: 'tz1burnburnburnburnburnburnburjAYjjX',

  GOVERNOR: 'KT1EM4yY8oFFcwpDunRmTHrdmC1bMuaf5UGu',
  PAUSE_GUARDIAN: 'KT1Q5QMBRK8Rw9LcXyYTU4yymjVZfsjdFPq5',
  BREAK_GLASS_MULTISIG: 'KT1CRTvNvLmb8g5znXi81hNgiEUhtJoUhVY2',
  FUND_ADMIN: null,

  DAO: 'KT1GWP7gd7tjPAcfkxKatEiqzaBF1ZeQ4Ewb',
  DAO_TOKEN: 'KT1TMbbW4paWVLbd6MWziNkDDVb29GHMt68y',
  DAO_COMMUNITY_FUND: 'KT1JeW1qvVPjukRdPaAxQ3NvziquTbHdnLGe',

  FARMS: {
    KUSD: {
      farm: 'KT1M97HUZBVibMipbNdk3qTxaaYpnEsvnonY',
      reserve: 'KT1HPJZFhANUceL6yfShPRyBGV1Vvk2Ku2ow',
    },
    QLKUSD: {
      farm: 'KT1Rdit9FA79UbDebKmd6oYcTigXiTZkk9vS',
      reserve: 'KT1WxfBvKLRRaSTBucmrK4B9BpqdV43HrhdL',
    },
    KUSD_LP: {
      farm: 'KT1T5dQ2839MUXF6DqwgD1gMdHi3nCDqqmmQ',
      reserve: 'KT1CjZnG5v4XQpNiR2coEsAHpfQt9WDMVRgj',
    },
  },

  VESTING_CONTRACTS: {
    tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb:
      'KT1L2b8fzMZ7Wqz6fep33KFuHGNwTmfFubsc',
    tz1QM9J63wfTrGW7HLotr7Kshy8q8LhdorJe:
      'KT1Uz3eeuJ1twthYuA8KSD4jH2sC8kE8u92m',
    tz1YvwHP7TDbAMWf2sFZ5AzjRPe4GyA7Fc46:
      'KT1H3SR817FnZhQNpY1JYRmUn7HH4KQXRAPF',
  },

  BREAK_GLASS_CONTRACTS: {
    MINTER: 'KT1BHDD4NZ2exapEoT6gceeb56Yqa3dSqEMh',
    OVEN_PROXY: 'KT1XZsPmHzPJvi8EciUA4Sn1xFsP6Emas1rB',
    OVEN_FACTORY: 'KT1DLFkJqHJMWSXDz4PzZDbJyYV9W8bV49vd',
    TOKEN: 'KT1H5uMAt7kXZ4UnZFs1NXxRn8z5tNCybSHU',
    OVEN_REGISTRY: 'KT1KYbhndz2GSkUJF7jfK6AebbZGnY1EEz4Z',
    DEVELOPER_FUND: 'KT1M2jVFyjgxt39RryUV4tLHDT7ENVn5cu9o',
    STABILITY_FUND: 'KT1MuSzLGcrXK4pKPoBJyEHqu2RS72XcTsw9',
    ORACLE: 'KT1ASVrEkBAdb1PofJXWt2mNdEp4ZUarnCz7',
    LIQUIDITY_POOL: 'KT1GK3Ga2zBDQkbWCmroFRoA67ynmqqYW2mm',
    DAO_COMMUNITY_FUND: 'KT1NgQ8pTx7xxHQmcyURexendvuG7DGf9fzA',
    VESTING_VAULTS: {
      tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb:
        'KT1KJ38ouopsJJvbmqndwkZT7vUXJ7SfQMEf',
      tz1QM9J63wfTrGW7HLotr7Kshy8q8LhdorJe:
        'KT1EngRUthDFP1Jt92F27qdtWrBYPdejMMX8',
      tz1YvwHP7TDbAMWf2sFZ5AzjRPe4GyA7Fc46:
        'KT19muXAYYzQLhy4Dnr2ZYhjG2d47ShmSDAG',
    },
  },
}

export default contracts