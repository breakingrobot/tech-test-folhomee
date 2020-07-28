import Base36 from './base36'
import KnuthInteger from './knuth'

const encode = (string) => Base36.encode(KnuthInteger.convert(string))
const decode = (hash) => KnuthInteger.reverse(Base36.decode(hash))

export default { encode, decode }
