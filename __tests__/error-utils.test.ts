import ContractErrors from '../src/contract-errors'
import ErrorUtils from '../src/error-utils'

const TEST_DATA_WITH_ERROR = {
  errors: [
    {
      kind: 'temporary',
      id: 'proto.007-PsDELPH1.michelson_v1.runtime_error',
      contract_handle: 'KT1L2cmuRTifH8qfZdCgmpLeKsPbY7FVWN22',
      contract_code: [],
    },
    {
      kind: 'temporary',
      id: 'proto.007-PsDELPH1.michelson_v1.script_rejected',
      location: 5534,
      with: {
        int: '11', // ContractErrors.OvenUnderCollateralized
      },
    },
  ],
  name: 'TezosOperationError',
  id: 'proto.007-PsDELPH1.michelson_v1.script_rejected',
  kind: 'temporary',
  message: '(temporary) proto.007-PsDELPH1.michelson_v1.script_rejected',
}

const TEST_DATA_WITHOUT_ERROR = {
  errors: [
    {
      kind: 'temporary',
      id: 'proto.007-PsDELPH1.michelson_v1.runtime_error',
      contract_handle: 'KT1L2cmuRTifH8qfZdCgmpLeKsPbY7FVWN22',
      contract_code: [],
    },
  ],
  name: 'TezosOperationError',
  id: 'proto.007-PsDELPH1.michelson_v1.script_rejected',
  kind: 'temporary',
  message: '(temporary) proto.007-PsDELPH1.michelson_v1.script_rejected',
}

const MALFORMED_DATA = {
  message: 'Flagrant error!',
}

test('contractErrorFromTaquitoException - valid error', function () {
  expect(ErrorUtils.contractErrorFromTaquitoException(TEST_DATA_WITH_ERROR)).toEqual(
    ContractErrors.OvenUnderCollateralized,
  )
})

test('contractErrorFromTaquitoException - missing error', function () {
  expect(ErrorUtils.contractErrorFromTaquitoException(TEST_DATA_WITHOUT_ERROR)).toEqual(ContractErrors.Unknown)
})

test('contractErrorFromTaquitoException - malformed exception', function () {
  expect(ErrorUtils.contractErrorFromTaquitoException(MALFORMED_DATA)).toEqual(ContractErrors.Unknown)
})
