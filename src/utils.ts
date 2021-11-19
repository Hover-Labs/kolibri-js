import Address from "./types/address"
import { TransactionWalletOperation } from '@taquito/taquito'
import {
  OperationContentsAndResult,
  OperationContentsAndResultTransaction,
  InternalOperationResult,
  InternalOperationResultEnum,
  OperationResultTransaction,
} from '@taquito/rpc'
import _ from "lodash";

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
