import React from 'react'
import Input from '../components/input'
import Card from '../components/card'
import Navbar from '../components/navbar'
import Button from '../components/button'

const List = function () {
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
          <form action="" className="mt-10">
            <div className="mt-5 w-full">
              <Input type="text" label="Name" />
            </div>
            <div className="mt-5">
              <Input type="text" label="Email" />
            </div>
            <div className="mt-5">
              <Button right fluid>
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
