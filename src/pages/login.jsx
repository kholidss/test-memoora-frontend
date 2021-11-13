import React, { useRef, useState } from 'react'
import Button from '../components/button'
import Input from '../components/input'

const List = function () {
  const [isDisabled, setDisabled] = useState(true)

  const formField = {
    email: {
      ref: useRef(),
      validate: [],
    },
    password: {
      ref: useRef(),
      validate: [],
    },
  }

  const checkAll = (field) => {
    const arr = Object.keys(field)
    for (let i = 0; i < arr.length; i += 1) {
      if (field[arr[i]].validate.length !== 0) {
        return true
      }
    }
    return false
  }

  const handleChange = (event, name = '') => {
    if (name !== '') {
      const test = formField[name].ref.current.validate()
      formField[name].validate = test
    }
    setDisabled(checkAll(formField, setDisabled))
  }

  const handleSubmit = (event) => {
    const arr = Object.keys(formField)
    for (let i = 0; i < arr.length; i += 1) {
      formField[arr[i]].validate = formField[arr[i]].ref.current.validate()
    }
    event.preventDefault()
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <Input
        idx="login_email"
        name="email"
        type="text"
        label="Email"
        placeholder="admin@admin.com"
        validation="required|email|min:8|max:50"
        ref={formField.email.ref}
        onChange={(event) => handleChange(event, 'email')}
      />
      <Input
        idx="login_password"
        name="password"
        type="password"
        label="Password"
        validation="required|min:8|max:50"
        ref={formField.password.ref}
        onChange={(event) => handleChange(event, 'password')}
      />
      <Button icon="right" right disabled={isDisabled} submit>
        Submit
      </Button>
    </form>
  )
}

export default List
