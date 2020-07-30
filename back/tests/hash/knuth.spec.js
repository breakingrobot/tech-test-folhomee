import testSet from './test.set'
import KnuthInteger, { KnuthInteger as KnuthIntegerObject } from '../../src/utils/knuth'
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

  it('should throw an exception if knuth convert method parameter is not an integer', () => {
    expect(() => {
      KnuthInteger.convert('this is not an integer')
    }).toThrow(new Error('Knuth Multiplication Hash Obfuscation requires an integer value.'))
  })

  it('should throw an exception if knuth reverse method parameter is not an integer', () => {
    expect(() => {
      KnuthInteger.reverse('this is not an integer')
    }).toThrow(new Error('Knuth Multiplication Hash Reversal requires an integer value.'))
  })

  it('should throw an exception if knuth is not constructed with integer values', () => {
    const constructorParameters = {
      prime: 'not',
      inverse: 'an',
      xor: 'int'
    }
    const errors = []
    Object.keys(constructorParameters).map((objectKey) => {
      const value = constructorParameters[objectKey]
      if (Number.isInteger(value) !== true) {
        errors.push(`${objectKey} in constructor should be an integer!`)
      }
    })
    const expectedErrors = errors.join('\r\n')
    expect(() => {
      (() => new KnuthIntegerObject(constructorParameters))()
    }).toThrow(new Error(expectedErrors))
  })
})
