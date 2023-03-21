import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout'
import Contact from '../views/Contact'
import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
import SingleItem from '../views/SingleItem'

export default function PublicRoutes() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/item/:id' element={<SingleItem />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Layout>
    </Router>
  )
}
