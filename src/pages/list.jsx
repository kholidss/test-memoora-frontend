import React, { useState } from 'react'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Input from '../components/input'
import Card from '../components/card'
import Navbar from '../components/navbar'
import Button from '../components/button'
import axios from '../plugins/axios'

const ListSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
})

const List = function () {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(ListSchema),
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
    <div className=" h-screen">
      <Navbar />
      <div className="flex h-screen">
        <div className="w-2/3 bg-blue-200 p-4 flex items-center flex-col">
          <div className="text-center text-2xl text-blue-900 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold mb-2">
            List file:
          </div>
          <Card />
          <Card />
        </div>
        <div className="w-screen flex items-center flex-col p-3">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="mt-5 w-full">
              <Input
                idx="=name"
                name="name"
                type="text"
                label="Name"
                placeholder="Your name"
                errors={errors.name}
                ref={React.useRef()}
                register={register}
              />
            </div>
            <div className="mt-5">
              <Input
                idx="=email"
                name="email"
                type="text"
                label="Email"
                placeholder="Your email"
                errors={errors.email}
                ref={React.useRef()}
                register={register}
              />
            </div>
            <div className="mt-5">
              <Button icon="right" right fluid disabled={!isValid} isLoading={isLoading} submit>
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default List
