import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = function () {
  return (
    <div className="min-h-screen min-w-full flex justify-center items-center">
      <div className="flex flex-col text-center">
        <div>
          <h2 className="text-8xl font-semibold">404!</h2>
          <h4 className="text-2xl text-gray-700 mt-2">Page not found</h4>
          <p className="text-base text-gray-500">
            The link is broken or the page has been removed.
          </p>
        </div>
        <div className="mx-auto mt-6">
          <Link
            to="/"
            className="font-bold py-2 px-5 mx-auto rounded bg-blue-500 text-white hover:bg-blue-700"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
