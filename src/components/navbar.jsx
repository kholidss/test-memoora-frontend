/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Icon from './icons'

const Navbar = function () {
  return (
    <div className="bg-white shadow-lg fixed top-0 w-full z-50">
      <nav className="flex items-center justify-between flex-wrap p-6 container mx-auto">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Icon className="w-10 text-blue-800" name="logo" size={28} />
          <span className="text-3xl text-blue-800 tracking-wide ml-1 font-semibold">Memoora</span>
        </div>
        <div className="flex items-center">
          <div>User</div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
