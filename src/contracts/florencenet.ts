import { ContractGroup } from '../types/contracts'

const contracts: ContractGroup = {
  MINTER: 'KT1Dyo9ejFcYdberxNccnM5dXW4BQeHywzVW',
  OVEN_PROXY: 'KT19bJZ5tFj6b18UHCoFzBJDSKjw7YPSPCoe',
  OVEN_FACTORY: 'KT1W9U8hHMVkNLCX3wzARbQNPThVCXsx1zWn',
  TOKEN: 'KT1Q311Q9mq96oyGTgTurV1qUb4ZJhxtt7vc',
  OVEN_REGISTRY: 'KT1MvP45tMbML1HLj7kbWPgBJVMg3U8kaELy',
  DEVELOPER_FUND: 'KT1TEBPhW5vU9Gx4Uhk7uT8woagL4Fnq8Dy1',
  STABILITY_FUND: 'KT1MJvEb8Y42fGEqGtc73xafKjKviBJyjbFG',
  ORACLE: 'KT1FfvNSwMLkTQRHZAen2AwPsJn5zTVmBCmo',
  HARBINGER_NORMALIZER: 'KT1SUP27JhX24Kvr11oUdWswk7FnCW78ZyUn',
  YOUVES_PROXY: null,

  LIQUIDITY_POOL: 'KT19RUbUUizsy7arXiziEi9d2nfJNMG74KxS',
  SAVINGS_POOL: null,

  DEXES: {
    QUIPUSWAP: {
      POOL: 'KT1XcRsVNqvwRNyfoqZaKenPT2mQdLd2d8fS',
      FA1_2_FACTORY: 'KT195gyo5G7pay2tYweWDeYFkGLqcvQTXoCW',
      FA2_FACTORY: 'KT1HjLwPC3sbh6W5HjaKBsiVPTgptcNbnXnc',
    },
    PLENTY: {
      POOL: null,
      PLENTY_QUIPUSWAP_POOL: null,
      PLENTY_TOKEN: null,
    },
  },

  KOLIBRI_BAKER: 'tz1burnburnburnburnburnburnburjAYjjX',

  GOVERNOR: 'KT1FgXQEvUrkNcEq2NhWTDrbMDsYVcqiyzKk',
  PAUSE_GUARDIAN: 'KT1HJsPFQraWeSLYAKFCMkqb8cEMnoxbUNcY',
  BREAK_GLASS_MULTISIG: 'KT1XSm7VjrdzafKzyfHPfNCWjvZRbLATG8uL',
  FUND_ADMIN: null,

  DAO: 'KT1E3aVbNwX5AwpSQ151dp3Qg4Wf9mGEs3ex',
  DAO_TOKEN: 'KT1AWcomAKZCnksHc5QdnBWPPtt3mGY8jgaD',
  DAO_COMMUNITY_FUND: 'KT1V7QWkYyjym6T2MCREQCRE4E2RcRFe5JPW',

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
    YOUVES_FLAT: {
      farm: null,
      reserve: null,
    },
  },

  PAYMENT_VAULTS: {
    tz1YeYpdJshsXxkPdSdKUJaF1QmH1ngCrJ7V: ['KT1MBPwY93j5LN2u3UQcsEUDA927FfcxaTSr'],
    tz1Xh11mHYWxbYHv55AVhsPPPJeSp8PunERB: ['KT1AXRyS5bgWWSV77xU5yNXKgDQ7NE7rbnPH'],
    tz1cNABC2qtbbHKDDKdvxRkcyopL1kEfbpgV: ['KT1H3Z1NWBEyUt1kzU1BV7GZZfMa991xPbDB'],
  },

  VOTING_VAULTS: {
    tz1YeYpdJshsXxkPdSdKUJaF1QmH1ngCrJ7V: 'KT1MBPwY93j5LN2u3UQcsEUDA927FfcxaTSr',
    tz1Xh11mHYWxbYHv55AVhsPPPJeSp8PunERB: 'KT1AXRyS5bgWWSV77xU5yNXKgDQ7NE7rbnPH',
    tz1cNABC2qtbbHKDDKdvxRkcyopL1kEfbpgV: 'KT1H3Z1NWBEyUt1kzU1BV7GZZfMa991xPbDB',
  },

  BREAK_GLASS_CONTRACTS: {
    MINTER: 'KT1AbZ25BiDxtAvwFcsnyzCBJzz6iZPPMVRk',
    OVEN_PROXY: 'KT1SysbBUcNKWKZVrSiViGASqM5gF4qMuGtf',
    OVEN_FACTORY: 'KT1Jo7Fd4HRrH3jRaMkqVMewi7EG7mD1mjgK',
    TOKEN: 'KT1V56wAh8g51gm4UeFcN17NNS82vUuZwSwg',
    OVEN_REGISTRY: 'KT1TjEEEPTE3nVsNX33T5Diqf8fNsE1HVYjA',
    DEVELOPER_FUND: 'KT19QWUZJPnMxwCXnY2t7jsabsixm2en8rv1',
    STABILITY_FUND: 'KT1UZ87trx6AEEumGAkqYnvLHuN6YjWoJDos',
    ORACLE: 'KT1SowWqkYXHLKoHGufY5fWsu3hhTnjiPtCZ',
    LIQUIDITY_POOL: 'KT19DRghrW6DRx2EPdU2d3vtb3BFp4aafoj9',
    SAVINGS_POOL: null,
    DAO_COMMUNITY_FUND: 'KT1AfVMYNWeopTmeidAgmJTjYwstNcwGsimF',
    PAYMENT_VAULTS: {
      tz1YeYpdJshsXxkPdSdKUJaF1QmH1ngCrJ7V: ['KT1TBRnJYGtxWFooJj2e4BDAtJizyHgfkC6G'],
      tz1Xh11mHYWxbYHv55AVhsPPPJeSp8PunERB: ['KT1X9LArjPpoPpSxEoj2rfv6ojGEYokneyz9'],
      tz1cNABC2qtbbHKDDKdvxRkcyopL1kEfbpgV: ['KT1RQkJHpaQXV4cfgwdjHuNatNRpgb9abywg'],
    },
  },
}

export default contracts
