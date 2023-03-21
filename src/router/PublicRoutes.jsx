import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../views/Home'
import About from '../views/About'
import Contact from '../views/Contact'
import SingleItem from '../views/SingleItem'
import Login from '../views/Login'
import Register from '../views/Register'

export default function PublicRoutes() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/item/:id' element={<SingleItem />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Layout>
    </Router>
  )
}
