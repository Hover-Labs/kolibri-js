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

  // Kolibri Liqiudity Pool
  LIQUIDITY_POOL: DeployedContractAddressOrNull

  // DEX Liquidity Pools
  DEXTER_POOL: DeployedContractAddressOrNull
  QUIPUSWAP_POOL: DeployedContractAddressOrNull

  // Below values are not applicable to testnet deployment.
  KOLIBRI_BAKER: DeployedContractAddressOrNull

  // Governance Roles
  GOVERNOR: DeployedContractAddressOrNull
  PAUSE_GUARDIAN: DeployedContractAddressOrNull
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
  }
}

export type Contracts = {
  ZERO: ContractGroup
  TEST: ContractGroup
  MAIN: ContractGroup
}
