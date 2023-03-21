import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
        <div className="container px-2 md:px-4 lg:px-4 xl:px-20">
          {children}
        </div>
      <Footer />
    </div>
  )
}
