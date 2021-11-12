import React from 'react'
import Icon from '../components/icons'

const Landing = function () {
  return (
    <div className="min-h-screen min-w-full flex justify-center items-center">
      <div className="flex flex-col text-center">
        <h1 className="text-5xl font-semibold">Landing!</h1>
        <div className="inline-flex items-center mt-2">
          <Icon name="logo" className="mr-2" size={28} />
          <h2 className="text-3xl font-semibold">Memoora</h2>
        </div>
      </div>
    </div>
  )
}

export default Landing
