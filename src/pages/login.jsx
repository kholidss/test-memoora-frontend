import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Button from '../components/button'
import Input from '../components/input'
import axios from '../plugins/axios'

const LoginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
})

const Login = function () {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginSchema),
  })
  const onSubmit = (data) => {
    setIsLoading(true)
    console.log(data)
    axios
      .post('/api/login', data)
      .then((res) => {
        console.log(res)
        localStorage.setItem('userData', JSON.stringify(res.data))
        dispatch({
          type: 'FILL_DATA_USER',
          payload: res.data,
        })
        setIsLoading(false)
        navigate('/list')
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
      })
  }

  return (
    <>
      <h2 className="text-center text-4xl text-blue-900 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold">
        Log in
      </h2>
      <div className="mt-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              idx="=email"
              name="email"
              type="text"
              label="Email"
              placeholder="admin@admin.com"
              errors={errors.email}
              ref={React.useRef()}
              register={register}
            />
          </div>
          <div className="mt-8">
            <Input
              idx="=password"
              name="password"
              type="password"
              label="Password"
              placeholder="**************"
              errors={errors.password}
              ref={React.useRef()}
              register={register}
            />
          </div>
          <div className="mt-8">
            <Button icon="right" right fluid disabled={!isValid} isLoading={isLoading} submit>
              Login
            </Button>
          </div>
        </form>
        <div className="mt-5 text-sm font-display font-semibold text-gray-700 text-center">
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
