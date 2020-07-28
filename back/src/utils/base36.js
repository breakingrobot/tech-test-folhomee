const encode = (number) => (number).toString(36)
const decode = (base36) => parseInt(base36, 36)

export default { encode, decode }
