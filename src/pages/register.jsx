import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Button from '../components/button'
import Input from '../components/input'

const RegisterSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirm_password: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
})

const Register = function () {
  const [isPassword, setPassword] = useState(true)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterSchema),
  })
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <h2 className="text-center text-4xl text-blue-900 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold">
        Register
      </h2>
      <div className="mt-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              idx="name"
              name="name"
              type="text"
              label="Full Name"
              placeholder="John Doe"
              errors={errors.name}
              ref={React.useRef()}
              register={register}
            />
          </div>
          <div className="mt-10">
            <Input
              idx="email"
              name="email"
              type="text"
              label="Email"
              placeholder="admin@admin.com"
              errors={errors.email}
              ref={React.useRef()}
              register={register}
            />
          </div>
          <div className="mt-10 flex justify-center items-center">
            <Input
              idx="password"
              name="password"
              type={isPassword ? 'password' : 'text'}
              label="Password"
              placeholder={isPassword ? '**************' : 'Agny3Gg6wM6SqQP7'}
              errors={errors.password}
              ref={React.useRef()}
              register={register}
            />
            <Button
              icon={isPassword ? 'eye' : 'eye-slash'}
              onClick={() => setPassword(!isPassword)}
              className="ml-4 px-4 mt-4"
            />
          </div>
          <div className="mt-10">
            <Input
              idx="confirm_password"
              name="confirm_password"
              type={isPassword ? 'password' : 'text'}
              label="Confirm Password"
              placeholder={isPassword ? '**************' : 'Agny3Gg6wM6SqQP7'}
              errors={errors.confirm_password}
              ref={React.useRef()}
              register={register}
            />
          </div>
          <div className="mt-10">
            <Button icon="right" right fluid disabled={!isValid} submit>
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
