# Kolibri.JS

Kolibri.JS contains code for interacting with [Kolibri](https://kolibri.finance), a self balancing algorithmic stablecoin built on Tezos.

## Installation

```
npm i @hover-labs/kolibri-js
```

## Documentation

The following classes are implemented:
- `BetterCallDevClient`: Interacts with the Better Call Dev indexer
- `ContractErrors`: Maps errors from the Kolibri smart contracts into a user friendly enum
- `Contracts`: Helper object to get contract addresses on different networks
- `ConversionUtils`: Helpers to convert between units
- `ErrorUtils`: Error handling utilities
- `HarbingerClient`: Interacts with the [Harbinger Oracle Contracts](https://github.com/tacoinfra/harbinger/)
- `Network`: Enum defining available networks
- `OvenClient`: Interacts with a Kolibri Oven
- `StableCoinClient`: Interacts with the top level Kolibri contracts
- `TokenClient`: Interacts with the FA1.2 kUSD token contract
