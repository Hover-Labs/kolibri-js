import { ContractGroup } from '../types/contracts'

const contracts: ContractGroup = {
  MINTER: 'KT1C5AC8HootcoyUXxayUQoVMHaAeXB2YqDC',
  OVEN_PROXY: 'KT1VcBAevCCeZJe5C2WGyjrHGt8PZnEEy7AA',
  OVEN_FACTORY: 'KT1Xp9CgidYGbZdopfTW1JQsrD8i5wzHYT8b',
  TOKEN: 'KT1MDof21NLULskssbUv7rZuNYpCboB6tyQu',
  OVEN_REGISTRY: 'KT1BRocb23Ec3V7Lk1tXep2fmhuBAZU7PeZm',
  DEVELOPER_FUND: 'KT1AD7BikbRdvpAyWUTFT5mN3jgADL7Huv7B',
  STABILITY_FUND: 'KT1EcNmD12afdpSSKi98fKh8sS3zEecWrZ5w',
  ORACLE: 'KT1HBPxqRKLWFs3ttM3fq3vyhp4bods6iam7',
  HARBINGER_NORMALIZER: 'KT1JFhDzhu6UDFFpNVLUoBtVQG5DGztSuiEn',
  LIQUIDITY_POOL: 'KT1SRz4kQsXTc38UVJjWJMLBr82Dh5j8RF9i',
  SAVINGS_POOL: 'KT1CVJDSJ9Lr6zQxVtcgwuCJjZ5SQCcWDFrv',
  DEXES: {
    QUIPUSWAP: {
      POOL: 'KT1RaeQ8f9PmK5hXm4x67mbvWYvKgUEv1Yd4',
      FA1_2_FACTORY: 'KT1D69FXbocGJsHTbVThcgZ1kUkESYUk3Ruj',
      FA2_FACTORY: null,
    },
    PLENTY: { POOL: null, PLENTY_QUIPUSWAP_POOL: null, PLENTY_TOKEN: null },
  },
  KOLIBRI_BAKER: null,
  GOVERNOR: 'KT1LEghbyN9QK8VrQjtdqbutz6jT9Z5pTFBb',
  PAUSE_GUARDIAN: 'KT1Pmnp8NvEMCojim1iidAfKqEv4Hw1ZSrE3',
  BREAK_GLASS_MULTISIG: 'KT1MFLf5SFgKszdjxXqJhgrgcXASzBLNYoUY',
  FUND_ADMIN: null,
  DAO: 'KT1PSp5X6hEwpxwUCLNL2QaEgssqSfWuQV2K',
  DAO_TOKEN: 'KT1MMHnHYpzRZQxwZBKPizRMtnM7fNQQbfxC',
  DAO_COMMUNITY_FUND: 'KT1EHLq2THz7X7hxMHJfqyfm2D65oTEten2j',
  FARMS: {
    KUSD: {
      farm: 'KT1XE7JisZ6AAiBC1KZrWbfKikndLDtrd5Q3',
      reserve: 'KT1VR3213e2jPYsadgggqdtCSwymu4CZeWng',
    },
    QLKUSD: {
      farm: 'KT1N2JDDNLdHrMdza9mfZX8axzFgX4bNY9VW',
      reserve: 'KT1ATzmQq5nre99NZh8f1mSiJV6xFkRvamgJ',
    },
    KUSD_LP: {
      farm: 'KT1FEDmCoGLBCo5mt6sLUQDc97bNUSAbuLtN',
      reserve: 'KT1FC1sokSrECjxNkdt8AVBvPtTDpWyiaECb',
    },
    YOUVES_FLAT: {
      farm: null,
      reserve: null,
    },
  },
  PAYMENT_VAULTS: {
    tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb: ['KT1XUKeMZDTeAQNEYrhif61BkcSjbERR6Kav'],
  },
  VOTING_VAULTS: {
    tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb: 'KT1XUKeMZDTeAQNEYrhif61BkcSjbERR6Kav'
  },
  BREAK_GLASS_CONTRACTS: {
    MINTER: 'KT1Q5N3KZtsyo7TTLFfWSmk98bBaFdFe44hm',
    OVEN_PROXY: 'KT1T4qDyNsGEnxprtChrL59Hmaw6iLUDEtuz',
    OVEN_FACTORY: 'KT1JaMew4SysUS28yaBpsgyKfYe2Vbuce592',
    TOKEN: 'KT1RvthAPoUWEiFSxbPnBwU1Zm8K6CprFeTV',
    OVEN_REGISTRY: 'KT1VJba14CRj2kkKLvsyXgXtsmVuGMhgbeNf',
    DEVELOPER_FUND: 'KT1B4bx8vVw3mb5aaTXN7qDzTQDu6UUC9ciQ',
    STABILITY_FUND: 'KT18nKvHJYDtqua7ATHStAofiYM5Wx9HPxuq',
    ORACLE: 'KT1PGrMN85JYw9d6eCHgJeZ6ceViDCtFhQ6F',
    LIQUIDITY_POOL: 'KT1Xpj5rigkMK3TNexHiehkVnscWKRyyyJBb',
    SAVINGS_POOL: 'KT1WnKoVnBWPA8VUqMYfVfMgiX6pda5Z8gNn',
    DAO_COMMUNITY_FUND: 'KT1SVzcqJE9Hvo5PjtxRTTYSThpQEaaFNGHy',
    PAYMENT_VAULTS: {
      tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb: ['KT1N8xjKYSawu93uG8LuTHPsYPMeGdWQHffL'],
    },
  },
}

export default contracts
