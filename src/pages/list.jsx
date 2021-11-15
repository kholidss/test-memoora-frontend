import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
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
  const [isLoading, setIsLoading] = useState(false)
  const [userLocalData, setUserLocalData] = useState([])

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
    const getLocalStore = JSON.parse(localStorage.getItem('userData'))
    axios
      .post('/api/file', data, { headers: { Authorization: `Bearer ${getLocalStore.token}` } })
      .then(() => {
        setIsLoading(false)
        window.location.reload()
      })
      .catch(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    const getLocalStore = JSON.parse(localStorage.getItem('userData'))
    axios
      .get(`/api/file/${getLocalStore.id}`, {
        headers: { Authorization: `Bearer ${getLocalStore.token}` },
      })
      .then((res) => {
        setUserLocalData(res.data.data)
      })
      .catch(() => {})
  }, [])

  console.log(userLocalData)

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap flex-col-reverse lg:flex-row lg:flex-nowrap bg-blue-200 pt-20">
        <div className="w-full lg:w-2/3 p-4 flex items-center flex-col py-20">
          <h1 className="text-center mb-6 text-2xl text-blue-900 font-display font-semibold xl:text-4xl xl:text-bold">
            List file:
          </h1>
          {userLocalData.map((a) => {
            return <Card key={a._id} fileDirectory={a.fileDirectory} />
          })}
        </div>
        <div className="w-screen flex items-center flex-col p-3 bg-white py-20">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xl px-12">
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
    </>
  )
}

export default List
