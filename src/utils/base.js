export function isEmpty(value) {
  if (value === null || value === undefined || value === '') {
    return true
  }

  if (Array.isArray(value) && value.length === 0) {
    return true
  }

  return false
}

export function isNullOrUndefined(value) {
  return value === null || value === undefined
}

export function isEmptyArray(arr) {
  return Array.isArray(arr) && arr.length === 0
}
