import testSet from './test.set'
import HashID from '../../src/utils/hashid'
import { describe, expect, it } from '@jest/globals'

describe('HashID Encoder and Decoder', () => {
  it('should convert number into equivalent hash id', () => {
    const { number, encodedHashInteger } = testSet
    const hashId = HashID.encode(number)

    expect(hashId).toEqual(encodedHashInteger)
  })

  it('should decode hash id into its original number', () => {
    const { number, encodedHashInteger } = testSet
    const decodedNumber = HashID.decode(encodedHashInteger)
    expect(decodedNumber).toEqual(number)
  })
})
