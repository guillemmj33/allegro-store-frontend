import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../services/user.service'

export default function LogoutButton() {
  const navigate = useNavigate()
  const [isLoggedOut, setIsLoggedOut] = useState(false)

  const handleLogout = async () => {
    try {
      const { data } = await logout()
      console.log(data)
      localStorage.removeItem('token')
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'You have successfully logged out!',
        showConfirmButton: false,
        timer: 2000,
      })
      setIsLoggedOut(true)
      setTimeout(() => {
        navigate('/')
      }, 2000) // Delay the navigation for 2 seconds (2000 milliseconds)
    } catch (error) {
      console.error(error)
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Uh oh. You need to be logged in to log out!',
        showConfirmButton: false,
        timer: 3000,
      })
    }
  }

  return (
    <button
      onClick={handleLogout}
      className='block py-2 pl-3 pr-4 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-500 md:p-0 dark:text-gray-500 md:dark:hover:text-cyan-500 dark:hover:bg-cyan-500 dark:hover:text-white md:dark:hover:bg-transparent'
      >
      <i className='fa-solid fa-right-from-bracket'></i> Logout
    </button>
  )
}
