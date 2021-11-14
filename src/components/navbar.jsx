/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Icon from './icons'

const Navbar = function () {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 bg-gray-100">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Icon className="w-10 text-blue-800" name="logo" size={28} />
        <span className="text-3xl text-blue-800 tracking-wide ml-1 font-semibold">Memoora</span>
      </div>
      <div className="block lg:hidden">
        <button
          type="button"
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="block flex-grow lg:flex lg:items-center">
        <div className="text-sm lg:flex-grow" />
        <div>User</div>
        <div />
      </div>
    </nav>
  )
}

export default Navbar
