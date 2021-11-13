import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/button'
import Input from '../components/input'
import { handleChange, validateAll } from '../utils/form'

const Login = function () {
  const [isDisabled, setDisabled] = useState(true)
  const [formField, setFormField] = useState({
    email: {
      ref: useRef(),
      validate: [],
      value: '',
    },
    password: {
      ref: useRef(),
      validate: [],
      value: '',
    },
  })

  const handleSubmit = (event) => {
    if (validateAll(formField, setFormField)) {
      console.log(formField)
    }
    event.preventDefault()
  }

  return (
    <>
      <h2 className="text-center text-4xl text-blue-900 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold">
        Log in
      </h2>
      <div className="mt-12">
        <form onSubmit={(event) => handleSubmit(event)}>
          <div>
            <Input
              idx="login_email"
              name="email"
              type="text"
              label="Email"
              placeholder="admin@admin.com"
              validation="required|email|min:8|max:50"
              ref={formField.email.ref}
              onChange={(event) =>
                handleChange(event, formField, setFormField, setDisabled, 'email')
              }
            />
          </div>
          <div className="mt-10">
            <Input
              idx="login_password"
              name="password"
              type="password"
              label="Password"
              placeholder="**************"
              validation="required|min:8|max:50"
              ref={formField.password.ref}
              onChange={(event) =>
                handleChange(event, formField, setFormField, setDisabled, 'password')
              }
            />
          </div>
          <div className="mt-10">
            <Button icon="right" right fluid disabled={isDisabled} submit>
              Login
            </Button>
          </div>
        </form>
        <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
          <span>Don&#8216;t have an account? </span>
          <Link
            to="/register"
            className="underline cursor-pointer text-blue-600 hover:text-blue-800"
          >
            Register
          </Link>
        </div>
      </div>
    </>
  )
}

export default Login
