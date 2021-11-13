const kebabToCamel = (str) => str.replace(/-./g, (x) => x[1].toUpperCase())

export const joinClass = (input) =>
  input
    .replace(/\s+/gm, ' ')
    .split(' ')
    .filter((cond) => typeof cond === 'string')
    .join(' ')
    .trim()

export const parseString = (text, ...data) => {
  return text.replace(/{(\d+)}/g, function (match, number) {
    return typeof data[number] !== 'undefined' ? data[number] : match
  })
}

export default kebabToCamel
