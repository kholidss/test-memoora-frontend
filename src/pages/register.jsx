import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/button'
import Input from '../components/input'
import { handleChange, validateAll } from '../utils/form'

const Register = function () {
  const [isDisabled, setDisabled] = useState(true)
  const [isPassword, setPassword] = useState(true)
  const [formField, setFormField] = useState({
    name: {
      ref: useRef(),
      validate: [],
      value: '',
    },
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
    confirm_password: {
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
        Register
      </h2>
      <div className="mt-5">
        <form onSubmit={(event) => handleSubmit(event)}>
          <div>
            <Input
              idx="register_name"
              name="name"
              type="text"
              label="Full Name"
              placeholder="John Doe"
              validation="required|min:8|max:50"
              ref={formField.name.ref}
              onChange={(event) =>
                handleChange(event, formField, setFormField, setDisabled, 'name')
              }
            />
          </div>
          <div className="mt-5">
            <Input
              idx="register_email"
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
          <div className="mt-10 flex justify-center items-center">
            <Input
              idx="register_password"
              name="register-password"
              type={isPassword ? 'password' : 'text'}
              label="Password"
              placeholder={isPassword ? '**************' : 'Agny3Gg6wM6SqQP7'}
              validation="required|min:8|max:50"
              ref={formField.password.ref}
              onChange={(event) =>
                handleChange(event, formField, setFormField, setDisabled, 'password')
              }
            />
            <Button
              icon={isPassword ? 'eye' : 'eye-slash'}
              onClick={() => setPassword(!isPassword)}
              className="ml-4 px-4 mt-4"
            />
          </div>
          <div className="mt-10">
            <Input
              idx="register_confirm_password"
              name="confirm-password"
              type={isPassword ? 'password' : 'text'}
              label="Confirm Password"
              placeholder={isPassword ? '**************' : 'Agny3Gg6wM6SqQP7'}
              validation="required|min:8|max:50|confirmation:password"
              ref={formField.confirm_password.ref}
              onChange={(event) =>
                handleChange(event, formField, setFormField, setDisabled, 'confirm_password')
              }
            />
          </div>
          <div className="mt-10">
            <Button icon="right" right fluid disabled={isDisabled} submit>
              Register
            </Button>
          </div>
        </form>
        <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
          <span>If you already have an account, just </span>
          <Link to="/login" className="underline cursor-pointer text-blue-600 hover:text-blue-800">
            Login
          </Link>
        </div>
      </div>
    </>
  )
}

export default Register
