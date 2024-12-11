export type DeployedContractAddressOrNull = string | null

export type ContractGroup = {
  MINTER: DeployedContractAddressOrNull
  OVEN_PROXY: DeployedContractAddressOrNull
  OVEN_FACTORY: DeployedContractAddressOrNull
  TOKEN: DeployedContractAddressOrNull
  OVEN_REGISTRY: DeployedContractAddressOrNull
  DEVELOPER_FUND: DeployedContractAddressOrNull
  STABILITY_FUND: DeployedContractAddressOrNull
  ORACLE: DeployedContractAddressOrNull

  // Dependent contracts
  HARBINGER_NORMALIZER: DeployedContractAddressOrNull
  YOUVES_PROXY: DeployedContractAddressOrNull

  // Kolibri Liquidity Pool
  LIQUIDITY_POOL: DeployedContractAddressOrNull

  // Kolibri Savings pool
  SAVINGS_POOL: DeployedContractAddressOrNull

  // DEX Configurations
  DEXES: {
    QUIPUSWAP: {
      POOL: DeployedContractAddressOrNull
      FA1_2_FACTORY: DeployedContractAddressOrNull
      FA2_FACTORY: DeployedContractAddressOrNull
    }
    PLENTY: {
      POOL: DeployedContractAddressOrNull
      PLENTY_QUIPUSWAP_POOL: DeployedContractAddressOrNull
      PLENTY_TOKEN: DeployedContractAddressOrNull
    }
  }

  // Below values are not applicable to testnet deployment.
  KOLIBRI_BAKER: DeployedContractAddressOrNull

  // Governance Roles
  GOVERNOR: DeployedContractAddressOrNull
  PAUSE_GUARDIAN: DeployedContractAddressOrNull
  BREAK_GLASS_MULTISIG: DeployedContractAddressOrNull
  FUND_ADMIN: DeployedContractAddressOrNull

  // DAO
  DAO: DeployedContractAddressOrNull
  DAO_TOKEN: DeployedContractAddressOrNull
  DAO_COMMUNITY_FUND: DeployedContractAddressOrNull

  // Farm Stuff
  FARMS: {
    KUSD: {
      farm: DeployedContractAddressOrNull
      reserve: DeployedContractAddressOrNull
    }
    QLKUSD: {
      farm: DeployedContractAddressOrNull
      reserve: DeployedContractAddressOrNull
    }
    KUSD_LP: {
      farm: DeployedContractAddressOrNull
      reserve: DeployedContractAddressOrNull
    }
    YOUVES_FLAT: {
      farm: DeployedContractAddressOrNull
      reserve: DeployedContractAddressOrNull
    }
  }

  // A user may have multiple payment vaults. Voting vaults should be a subset
  PAYMENT_VAULTS: {
    [key: string]: string[]
  }

  // A user only has one "voting vault" and we'll use this for the DAO frontend
  VOTING_VAULTS: {
    [key: string]: string
  }

  BREAK_GLASS_CONTRACTS: {
    MINTER: DeployedContractAddressOrNull
    OVEN_PROXY: DeployedContractAddressOrNull
    OVEN_FACTORY: DeployedContractAddressOrNull
    TOKEN: DeployedContractAddressOrNull
    OVEN_REGISTRY: DeployedContractAddressOrNull
    DEVELOPER_FUND: DeployedContractAddressOrNull
    STABILITY_FUND: DeployedContractAddressOrNull
    ORACLE: DeployedContractAddressOrNull
    LIQUIDITY_POOL: DeployedContractAddressOrNull
    SAVINGS_POOL: DeployedContractAddressOrNull
    DAO_COMMUNITY_FUND: DeployedContractAddressOrNull
    // All payment vaults should also capture all voting vaults
    PAYMENT_VAULTS: {
      [key: string]: string[]
    }
  }
}

export type Contracts = {
  ZERO: ContractGroup
  TEST: ContractGroup
  MAIN: ContractGroup
  SANDBOX: ContractGroup
}
