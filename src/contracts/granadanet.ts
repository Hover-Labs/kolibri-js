import { ContractGroup } from '../types/contracts'

const contracts: ContractGroup = {
  MINTER: 'KT1FTe5QUYWtXAwJQRURxDytCskQaDQzRmCZ',
  OVEN_PROXY: 'KT1E8xEYHGgryHgWmUZ78Qwr2G9XGKWfrnk2',
  OVEN_FACTORY: 'KT1JiYnLfkin3CcKUhPHJTSQshn9nTcmJgB8',
  TOKEN: 'KT1Dh3w91QeeSWLojbKJchVa5cMPqpQpGSbe',
  OVEN_REGISTRY: 'KT19k3KmZMHto6cpucovJpHBgf1NVDQtcbWp',
  DEVELOPER_FUND: 'KT1LX4JaR6yrsN7WvGsnqnniedsTHSkK79Rj',
  STABILITY_FUND: 'KT1QLstqetgBVxubH9ki6r5sMEGpwDTRSo9i',
  ORACLE: 'KT1Qci7MKefJxbtTponFPJF2iBMJFjadHvY7',
  HARBINGER_NORMALIZER: 'KT1AQuWowr3WKwF69oTGcKaJrMajic3CKwR2',

  LIQUIDITY_POOL: 'KT1Nj6zZWfC5iSTEVFbDH16fU3PUimB29gi9',

  DEXES: {
    QUIPUSWAP: {
      POOL: 'KT1KEghgLSyQRyYi5QSjYr9zYHSHEH66fSJE',
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

  GOVERNOR: 'KT1D4U4FchZUFqkRQZy4m5f9bK7LksaWRUKR',
  PAUSE_GUARDIAN: 'KT1X6o6bSsRYBQMLgzHXEiM4WViDpLigL3aQ',
  BREAK_GLASS_MULTISIG: 'KT1EHSYkRZoPcunijHu1ohhL4dbNPgeN6VAf',
  FUND_ADMIN: 'KT1X6o6bSsRYBQMLgzHXEiM4WViDpLigL3aQ',

  DAO: 'KT1FPU9n41XVNLsp3WHUrQzUPAu5WmXJEGnW',
  DAO_TOKEN: 'KT1Un8gsc3iQjPiW5yB8NX6aNGcWb5kwt1zr',
  DAO_COMMUNITY_FUND: 'KT1EZoZpHnJWFHw3wNYt2yiZkeMAasCMX6Wm',

  FARMS: {
    KUSD: {
      farm: 'KT1B8B7y5NZQBD6thrGNWgFU4hxGgALEJkrL',
      reserve: 'KT1XF6ZkgxSGCk2hEj7D9sdp3jZ9kGdozL5L',
    },
    QLKUSD: {
      farm: 'KT1R64Fp37WZwGyRa5dqdpsJCycTinL8ALyi',
      reserve: 'KT1LA35YDYDPER8L1LW1KWoEXUxAYtJ2BsPS',
    },
    KUSD_LP: {
      farm: 'KT1HoQWpZQbga6yYjUr4ZASzQKXqETcH4rj5',
      reserve: 'KT1WuADhwbo2a8348BExMUigU8B6NWZBcHFb',
    },
  },

  VESTING_CONTRACTS: {
    tz1YeYpdJshsXxkPdSdKUJaF1QmH1ngCrJ7V:
      'KT1Sv3wpMRvQbTE1J6cq2mpJnHXnYvZ8KypA',
    tz1Xh11mHYWxbYHv55AVhsPPPJeSp8PunERB:
      'KT1R8yEPU7jaBzka68o8WDXb3Xgnpgbw9nZX',
    tz1cNABC2qtbbHKDDKdvxRkcyopL1kEfbpgV:
      'KT1SrgtuHnESCcpLxarXv2YykjNfuEETXTJQ',
  },

  BREAK_GLASS_CONTRACTS: {
    MINTER: 'KT19FJFEHPEHu5YLufJMRNdpuDb7SGvFL2nH',
    OVEN_PROXY: 'KT1R9287AvXLiBmkfnVrjHPTidQCR8qS1v7n',
    OVEN_FACTORY: 'KT1K2Lz8S74Dsu8VDx52WwwMo7QgRLFh3bKK',
    TOKEN: 'KT1Lzy1gjMNezWNr1BGpFkt5oq9joadeyodw',
    OVEN_REGISTRY: 'KT1GndBKjX3S9mfG334g9cqdqxbXQmawUG5Y',
    DEVELOPER_FUND: 'KT1KKLzMkopHAZ5ZNYJb643amAWT6Cibu7oC',
    STABILITY_FUND: 'KT1T8o7VS8sd9peLFcsrXHqQ5Fm8bnVpihcU',
    ORACLE: 'KT1EJCaVVw1fa9qYo6k5wVWSWQcH4ck25GeR',
    LIQUIDITY_POOL: 'KT1PfwFtsNYFop5A6sceQs6g7DuSBnrNMXG9',
    DAO_COMMUNITY_FUND: 'KT1XTe1VHBqGdVCsW66dvd45aLwCTM2PMd76',
    VESTING_VAULTS: {
      tz1YeYpdJshsXxkPdSdKUJaF1QmH1ngCrJ7V:
        'KT1KAT8HJbNFHQYykKLavu5aBRm4ysgi3tsD',
      tz1Xh11mHYWxbYHv55AVhsPPPJeSp8PunERB:
        'KT1Hhn2phfgi9YVcJpYAyZ1pebs7BeM3kLx4',
      tz1cNABC2qtbbHKDDKdvxRkcyopL1kEfbpgV:
        'KT1NdVL8xYuyGnga21RHTD51m25ocHYbuwty',
    },
  },
}

export default contracts
