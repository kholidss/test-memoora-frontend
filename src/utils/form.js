import { checkAll } from './validation'

const updateValidate = (formField, setFormField, key) => {
  const input = formField[key].ref.current.validate(formField)
  const newForm = {
    ...formField,
    [key]: { ref: formField[key].ref, value: input.input, validate: input.message },
  }
  setFormField(newForm)
}

export const handleChange = (event, formField, setFormField, setDisabled, name = '') => {
  if (name !== '') {
    updateValidate(formField, setFormField, name)
  }
  checkAll(formField, setDisabled)
}

export const validateAll = (formField, setFormField) => {
  const arr = Object.keys(formField)
  let err = 0
  for (let i = 0; i < arr.length; i += 1) {
    updateValidate(formField, setFormField, arr[i])
    err += formField[arr[i]].validate.length
  }
  return err === 0
}

export default handleChange
