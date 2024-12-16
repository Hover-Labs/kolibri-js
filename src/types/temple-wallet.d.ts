declare module '@temple-wallet/dapp' {
  import {
    WalletDelegateParams,
    WalletIncreasePaidStorageParams,
    WalletOriginateParams,
    WalletProvider,
    WalletTransferParams,
  } from '@taquito/taquito'

  export class TempleWallet implements WalletProvider {
    getPKH(): Promise<string>
    getPK(): Promise<string>
    mapTransferParamsToWalletParams(params: () => Promise<WalletTransferParams>): Promise<any>
    mapOriginateParamsToWalletParams(params: () => Promise<WalletOriginateParams<any>>): Promise<any>
    mapDelegateParamsToWalletParams(params: () => Promise<WalletDelegateParams>): Promise<any>
    mapIncreasePaidStorageWalletParams(params: () => Promise<WalletIncreasePaidStorageParams>): Promise<any>
    sendOperations(params: any[]): Promise<string>
    sign(bytes: string, watermark?: Uint8Array): Promise<string>
  }
}
