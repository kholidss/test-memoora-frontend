const kebabToCamel = (str) => str.replace(/-./g, (x) => x[1].toUpperCase())

export default kebabToCamel
