import Address from './types/address'
import { TezosToolkit, TransactionWalletOperation } from '@taquito/taquito'
import {
  InternalOperationResult,
  InternalOperationResultEnum,
  OperationContentsAndResult,
  OperationContentsAndResultTransaction,
  OperationResultTransaction,
} from '@taquito/rpc'
import _ from 'lodash'
import BigNumber from 'bignumber.js'
import CONSTANTS from './constants'
import Decimal from 'decimal.js'

/**
 * Derive an oven address from the given operation.
 *
 * @param operation The operation that deployed the oven.
 * @returns The address of the oven.
 */
export const deriveOvenAddress = async (operation: TransactionWalletOperation): Promise<Address> => {
  const ovenCreationResults: Array<OperationContentsAndResult> = await operation.operationResults()

  const transactionResult: OperationContentsAndResultTransaction = _.find(
    ovenCreationResults,
    (result: OperationContentsAndResult) => {
      return result.kind === 'transaction'
    },
  ) as OperationContentsAndResultTransaction

  const ovenResult: InternalOperationResultEnum = _.find(
    transactionResult.metadata.internal_operation_results,
    (operation: InternalOperationResult) => {
      return operation.kind === 'origination'
    },
  )!.result

  return (ovenResult as OperationResultTransaction).originated_contracts![0]
}

/**
 * Convert an interest rate per period into an APY.
 */
export const interestRateToApy = (interestRatePerPeriod: BigNumber): Decimal => {
  const currentValueNoMantissa = new BigNumber(interestRatePerPeriod).dividedBy(new BigNumber(10).pow(18))
  const currentValueDecimal = new Decimal(currentValueNoMantissa.toFixed(18)).times(60 * 24 * 365)
  const E = new Decimal(
    '2.7182818284590452353602874713526624977572470936999595749669676277240766303535475945713821785251664274',
  )
  const invertedLN = E.pow(currentValueDecimal)
  return invertedLN.minus(1).times(100)
}

/**
 * Linearly approximate a compounding
 */
export const compoundingLinearApproximation = (
  initial: BigNumber,
  interestRatePerPeriod: BigNumber,
  numPeriods: number,
): BigNumber => {
  return initial.times(CONSTANTS.PRECISION.plus(interestRatePerPeriod.times(numPeriods))).div(CONSTANTS.PRECISION)
}

/**
 * Get a token balance from the default SmartPy implementation used by Kolibri.
 */
export const getTokenBalance = async (
  holder: Address,
  tokenContractAddress: Address,
  tezos: TezosToolkit,
  tokenContractStorage: any | undefined = undefined,
): Promise<BigNumber> => {
  const resolvedTokenStorage =
    tokenContractStorage ?? ((await (await tezos.wallet.at(tokenContractAddress)).storage()) as any)
  const balance = await resolvedTokenStorage.balances.get(holder)
  return balance === undefined ? new BigNumber(0) : balance.balance
}
