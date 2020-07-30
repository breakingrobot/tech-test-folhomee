import Long from 'long'

export class KnuthInteger {
  constructor ({ prime, inverse, xor }) {
    const configuration = {
      prime: prime,
      inverse: inverse,
      xor: xor
    }

    const errors = []

    Object.keys(configuration).map((objectKey) => {
      const value = configuration[objectKey]
      if (Number.isInteger(value) !== true) {
        errors.push(`${objectKey} in constructor should be an integer!`)
      }
    })

    if (errors.length > 1) {
      const errorMessage = errors.join('\r\n')
      throw new Error(errorMessage)
    }

    this.configuration = {
      prime: Long.fromInt(prime),
      inverse: Long.fromInt(inverse),
      xor: Long.fromInt(xor),
      int32: Long.fromInt(2147483647)
    }
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
      throw new Error('Knuth Multiplication Hash Reversal requires an integer value.')
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
