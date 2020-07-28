import testSet from './test.set'
import KnuthInteger from '../../src/utils/knuth'
import { describe, expect, it } from '@jest/globals'

describe('Knuth Integer Converter and Reverser', () => {
  it('should convert number into the equivalent knuth integer', () => {
    const { number, hashInteger } = testSet
    const knuthHash = KnuthInteger.convert(number)

    expect(knuthHash).toEqual(hashInteger)
  })

  it('should decode knuth integer into its original number', () => {
    const { number, hashInteger } = testSet
    const decodedNumber = KnuthInteger.reverse(hashInteger)
    expect(decodedNumber).toEqual(number)
  })
})
