import Address from "./types/address"
import { TezosToolkit, TransactionWalletOperation } from '@taquito/taquito'
import {
  OperationContentsAndResult,
  OperationContentsAndResultTransaction,
  InternalOperationResult,
  InternalOperationResultEnum,
  OperationResultTransaction,
} from '@taquito/rpc'
import _ from "lodash";
import BigNumber from 'bignumber.js'
import CONSTANTS from './constants'

/**
 * Derive an oven address from the given operation.
 * 
 * @param operation The operation that deployed the oven. 
 * @returns The address of the oven.
 */
export const deriveOvenAddress = async (operation: TransactionWalletOperation): Promise<Address> => {
  const ovenCreationResults: Array<OperationContentsAndResult> = await operation.operationResults()
  const transactionResult: OperationContentsAndResultTransaction = _.find(ovenCreationResults, (result: OperationContentsAndResult) => {
    return result.kind === 'transaction'
  }) as OperationContentsAndResultTransaction
  const ovenResult: InternalOperationResultEnum = _.find(transactionResult.metadata.internal_operation_results, (operation: InternalOperationResult) => {
    return operation.kind === "origination"
  })!.result
  const ovenAddress = (ovenResult as OperationResultTransaction).originated_contracts![0]

  return ovenAddress
}

/**
 * Convert an interest rate per period into an APY.
 */
export const interestRateToApy = async (interestRatePerPeriod: BigNumber): Promise<BigNumber> => {
  const one = new BigNumber(1_000_000_000_000_000_000)
  const initial = interestRatePerPeriod.plus(one)
  let apy = one
  for (let n = 0; n < CONSTANTS.COMPOUNDS_PER_YEAR; n++) {
    apy = apy.times(initial).dividedBy(one)
  }
  return apy.minus(one)
}

/**
 * Linearly approximate a compounding 
 */
export const compoundingLinearApproximation = (initial: BigNumber, interestRatePerPeriod: BigNumber, numPeriods: number) => {
  return initial.times(CONSTANTS.PRECISION.plus(interestRatePerPeriod.times(numPeriods))).div(CONSTANTS.PRECISION)
}

/**
 * Get a token balance from the default SmartPy implementation used by Kolibri.
 */
export const getTokenBalance = async (holder: Address, tokenContractAddress: Address, tezos: TezosToolkit): Promise<BigNumber> => {
  const tokenContract = await tezos.contract.at(tokenContractAddress)
  const tokenStorage: any = await tokenContract.storage()
  const balance = await tokenStorage.balances.get(holder)
  return balance === undefined ? new BigNumber(0) : balance.balance
}
