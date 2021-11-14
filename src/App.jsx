import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Auth from './layouts/auth'

import Landing from './pages'
import Login from './pages/login'
import Register from './pages/register'
import List from './pages/list'
import NotFound from './pages/notFound'

const App = function () {
  return (
    <main>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Landing />} />
        <Route element={<Auth />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/list" element={<List />} />
      </Routes>
    </main>
  )
}

export default App
