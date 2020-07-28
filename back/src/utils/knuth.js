import Long from 'long'

export class KnuthInteger {
  constructor ({ prime = 0, inverse = 0, xor = 0 }) {
    this.configuration = {
      prime: Long.fromInt(prime),
      inverse: Long.fromInt(inverse),
      xor: Long.fromInt(xor),
      int32: Long.fromInt(2147483647)
    }

    Object.keys(this.configuration).map((objectKey) => {
      const value = this.configuration[objectKey]
      if (Long.isLong(value) !== true) {
        throw new Error(`${objectKey} in constructor should be an integer!`)
      }
    })
  }

  convert (int) {
    if (Number.isInteger(int) !== true) {
      throw new Error('Knuth Multiplication Hash Obfuscation requires an integer value.')
    }
    const { prime, xor, int32 } = this.configuration
    return (Long.fromInt(int))
      .mul(prime)
      .and(int32)
      .xor(xor)
      .toSigned()
      .toInt()
  }

  reverse (int) {
    if (Number.isInteger(int) !== true) {
      throw new Error('Knuth Multiplication Hash Obfuscation requires an integer value.')
    }
    const { inverse, xor, int32 } = this.configuration
    return (Long.fromInt(int))
      .xor(xor)
      .mul(inverse)
      .and(int32)
      .toSigned()
      .toInt()
  }
}

export default new KnuthInteger({ prime: 1580030173, inverse: 59260789, xor: 1163945558 })
