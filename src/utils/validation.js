import { isEmpty, isNullOrUndefined, isEmptyArray } from './base'
import { parseString } from './strings'

const validateRequired = (value) => {
  if (isNullOrUndefined(value) || isEmptyArray(value) || value === false) {
    return false
  }

  return !!String(value).trim().length
}

const validateEmail = (value) => {
  if (isEmpty(value)) {
    return true
  }
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return re.test(String(value))
}

const validateMax = (value, params) => {
  if (isEmpty(value)) {
    return true
  }

  return String(value).length <= Number(params)
}

const validateMin = (value, params) => {
  if (isEmpty(value)) {
    return true
  }

  return String(value).length >= Number(params)
}

export const validation = {
  required: validateRequired,
  email: validateEmail,
  max: validateMax,
  min: validateMin,
}

export const message = {
  required: 'The {0} field is required.',
  email: 'The {0} must be a valid email address.',
  max: 'The {0} must not be greater than {1}.',
  min: 'The {0} must be at least {1}.',
}

const goValidation = (field, value, validate) => {
  const error = []
  if (validate === '') {
    return error
  }
  const arrValidate = validate.split('|')
  for (let i = 0; i < arrValidate.length; i += 1) {
    let val = arrValidate[i]
    let attribute
    if (val.includes(':')) {
      ;[val, attribute] = val.split(':')
    }
    const goValidate = validation[val](value, attribute)
    if (!goValidate) {
      error.push(parseString(message[val], field, attribute))
    }
  }
  return error
}

export default goValidation
