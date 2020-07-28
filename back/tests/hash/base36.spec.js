import testSet from './test.set'
import Base36 from '../../src/utils/base36'
import { describe, expect, it } from '@jest/globals'

describe('Base36 Converter and Reverser', () => {
  it('should have the same base36 encoded string for a specific number', () => {
    const { hashInteger, encodedHashInteger } = testSet
    const encodedString = Base36.encode(hashInteger)
    expect(encodedString).toEqual(encodedHashInteger)
  })

  it('should decode base36 string into the original number', () => {
    const { hashInteger } = testSet
    const encodedString = Base36.encode(hashInteger)
    const decodedNumber = Base36.decode(encodedString)
    expect(decodedNumber).toEqual(hashInteger)
  })
})
