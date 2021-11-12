import React from 'react'
import Button from '../components/button'

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
          <Button to="/" icon="home" right pill>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
