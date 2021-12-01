import { ContractGroup } from '../types/contracts'

const contracts: ContractGroup = {
  MINTER: 'KT1WG5yMCdbXz8T3YFSC1Rz2BYaqbnfLEdzH',
  OVEN_PROXY: 'KT1VRa3fE2VUDwTtuE9vnUVzsNnKgEeZeoDJ',
  OVEN_FACTORY: 'KT1X5uQDsyPnqwRmVyaoXMKKLLVmEytRaikq',
  TOKEN: 'KT1XUshaJCUzYpq4n6Vi9Nttzv3xJJiaBi1n',
  OVEN_REGISTRY: 'KT1Mu4HTyPLwKgujFaX5Aa7W1hBqC475zANL',
  DEVELOPER_FUND: 'KT1X4avQDL5ye9o9wyMTKv9qAhWqKYEzcwXS',
  STABILITY_FUND: 'KT1R1Sb7MihDJEgEpLot6Gomns4Y5aGeUGLS',
  ORACLE: 'KT1CPa4QnnzgTtuHAtNNyJ5r1YyuicHPzsPu',
  HARBINGER_NORMALIZER: 'KT1AQuWowr3WKwF69oTGcKaJrMajic3CKwR2',

  LIQUIDITY_POOL: 'KT1D7zz3DVX896HSkogN9hgpJfwdRTP3gLRZ',

  DEXES: {
    QUIPUSWAP: {
      POOL: 'KT1W2xssxEmgHqTCgQCkmTXWg8XMhz52HGaZ',
      FA1_2_FACTORY: 'KT1EmfR5bSZN7mWgapE8FZKdbJ3NLjDHGZmd',
      FA2_FACTORY: null,
    },
    PLENTY: {
      POOL: null,
      PLENTY_QUIPUSWAP_POOL: null,
      PLENTY_TOKEN: null,
    },
  },

  KOLIBRI_BAKER: 'tz1SwJwrKe8H1yi6KnYKCYkVHPApJRnZcHsa', // Random

  GOVERNOR: 'KT1NoMT4s5LtZgHBjDK5KLicVCnsR3nSx5h8',
  PAUSE_GUARDIAN: 'KT1Nk2aWSm1L2x9wbGS2uhNiYigv6YYaeBX6',
  BREAK_GLASS_MULTISIG: 'KT1G62d6QqJPfPxiDm8qWGKQtTbVxS4jtQBf',
  FUND_ADMIN: 'KT1Nk2aWSm1L2x9wbGS2uhNiYigv6YYaeBX6',

  DAO: 'KT1WKacTyYYof7kVLgGEDFLdgRE8PJRL3CuP',
  DAO_TOKEN: 'KT1VAoRN2YcyAhF2NMnABoDivEZ1gb33Au31',
  DAO_COMMUNITY_FUND: 'KT1Dw5WwTEmcHJt4LWPUb2t5Z12bs5TuBy8t',

  FARMS: {
    KUSD: {
      farm: 'KT18mLdRAbq5Bg3vv44fmWd4UsuXyTDcnGsM',
      reserve: 'KT1PGD9rC2vyFwqHDKP9BuugWeXEbZQTUesX',
    },
    QLKUSD: {
      farm: 'KT1JJZQGnBFBvV1ktXMHqZBc8v4HrKbdHvD6',
      reserve: 'KT1QbSmJuNb2ScxNPyazaQLjCUTwkgaR8ruZ',
    },
    KUSD_LP: {
      farm: 'KT1TQ4wagJw4tWt3RS7bdGYkuCHovZiWNRMx',
      reserve: 'KT1U4c9peMZrFvfoeHchjEubFKS6ZJLY2X7H',
    },
  },

  VESTING_CONTRACTS: {
    tz1YeYpdJshsXxkPdSdKUJaF1QmH1ngCrJ7V:
      'KT1W3LnUpzZ8vKQXFznti9ns17pQbvZb9Rny',
    tz1Xh11mHYWxbYHv55AVhsPPPJeSp8PunERB:
      'KT1TaafQdBrvUSUmEBvdhADLFteRKNGunSms',
    tz1cNABC2qtbbHKDDKdvxRkcyopL1kEfbpgV:
      'KT1WBNSdtq3hhFqBf3i1ygnNxT2HKHXydhqp',
  },

  BREAK_GLASS_CONTRACTS: {
    MINTER: 'KT1AtscwTtsqFhSZFGV4dYs1kdou75HXBe4C',
    OVEN_PROXY: 'KT1CHE9uRnAkNcVRFEb9oub2MFinQ98kirpz',
    OVEN_FACTORY: 'KT1AzLmbBV3X1Rw9xf4Vw8ge7pusXXo4XiQN',
    TOKEN: 'KT1WVWTANP6Sg7fFy3eX3Pd1PZiZ31jaqekN',
    OVEN_REGISTRY: 'KT1UcL8MCNwSGc5DkPspDZJQuoLyHKH7yTUE',
    DEVELOPER_FUND: 'KT1P4HSpY5qdSvdA1zPGsJtWk4UhVabBfT5d',
    STABILITY_FUND: 'KT1PTAbPMF8o4j7rgrfeE1Z5wark9UYebE23',
    ORACLE: 'KT1MvD2A7ZNtg5ynYdvAkdn1xDc2CnVnEPjn',
    LIQUIDITY_POOL: 'KT1GNFHdjtxn3aS5mvqJEbtu3giQmHVYpkY5',
    DAO_COMMUNITY_FUND: 'KT1Cfm4Gt4pk6gib7iV4kN5JaLzUHCsoq2Um',
    VESTING_VAULTS: {
      tz1YeYpdJshsXxkPdSdKUJaF1QmH1ngCrJ7V:
        'KT1N1ubznVUii92HQoS7RrdgM9puip9VFoE6',
      tz1Xh11mHYWxbYHv55AVhsPPPJeSp8PunERB:
        'KT1DTavQ3Jfz9aQ6c7tLAgxsvXp9eQqGwfEa',
      tz1cNABC2qtbbHKDDKdvxRkcyopL1kEfbpgV:
        'KT1AtzxsHvujG4thYdzafQchQgc7wzHQtEFe',
    },
  },
}

export default contracts
