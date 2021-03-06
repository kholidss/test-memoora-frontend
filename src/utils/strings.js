const kebabToCamel = (str) => str.replace(/-./g, (x) => x[1].toUpperCase())

export const joinClass = (input) =>
  input
    .replace(/\s+/gm, ' ')
    .split(' ')
    .filter((cond) => typeof cond === 'string')
    .join(' ')
    .trim()

export default kebabToCamel
