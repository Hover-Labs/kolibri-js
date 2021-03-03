import BigNumber from 'bignumber.js'
import ConversionUtils from '../src/conversion-utils'

test('conversion utils - mutez to shard', function () {
  const input = new BigNumber(123_456_789)
  const expectedOutput = new BigNumber('123456789000000000000')

  expect(ConversionUtils.mutezToShard(input)).toEqual(expectedOutput)
})

test('conversion utils - shard to human readable decimal', function () {
  const input = new BigNumber('123456789000000000000')
  const expectedOutput = '123.456789'

  expect(ConversionUtils.shardToHumanReadableNumber(input)).toEqual(
    expectedOutput,
  )
})

test('conversion utils - shard to human readable percent', function () {
  const input = new BigNumber('1234567890000000000')
  const expectedOutput = '123.456789%'

  expect(ConversionUtils.shardToHumanReadablePercentage(input)).toEqual(
    expectedOutput,
  )
})
