import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Icon from '../components/icons'

const Auth = function () {
  return (
    <div className="lg:flex xl:max-w-screen-sm overflow-hidden">
      <div className="lg:w-1/2 xl:max-w-screen-sm">
        <div className="py-5 bg-gray-200 flex justify-center lg:justify-start lg:px-12">
          <Link to="/" className="cursor-pointer flex items-center">
            <div>
              <Icon className="w-10 text-blue-800" name="logo" size={28} />
            </div>
            <div className="text-3xl text-blue-800 tracking-wide ml-1 font-semibold">Memoora</div>
          </Link>
        </div>
        <div className="mt-14 px-12 sm:px-24 md:px-48 lg:px-12 pb-20 lg:mt-10 xl:px-24 xl:max-w-2xl">
          <Outlet />
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center bg-blue-100 flex-1 h-screen ">
        <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
          <img
            lass="w-5/6 mx-auto"
            src="https://images.blush.design/zzDbRuNIfaObRJJl3MMq?w=920&auto=compress&cs=srgb"
            alt="Login Images"
          />
        </div>
      </div>
    </div>
  )
}

export default Auth
