import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import { login } from '../services/user.service'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()
  const { setUserStorage } = useContext(UserContext)

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const formData = {
        email: email,
        password: password,
      }

      const { data } = await login(formData)
      console.log(data)
      const userObject = {
        token: data.authorisation.token,
        id: data.user.id,
        user: data.user.name,
        email: data.user.email,
      }
      console.log(userObject, 'user data adapter')
      setUserStorage(userObject)

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Hi ${
          data.user.name.charAt(0).toUpperCase() +
          data.user.name.slice(0 + 1)
        }, nice to have you back!`,
        showConfirmButton: false,
        timer: 2000,
      })
      setIsLoggedIn(true)
      setTimeout(() => {
        navigate('/')
      }, 2000) // Delay the navigation for 2 seconds (2000 milliseconds)
    } catch (error) {
      setMessage(error.response.data.message)
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: `${error.response.data.message}`,
        showConfirmButton: false,
        timer: 2000,
      })
    }
  }

  return (
    <section className='bg-gray-50 dark:bg-white mt-16 mb-12 sm:-mt-12'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className='w-full bg-cyan-500 rounded-lg border-gray-700 shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-cyan-500 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white'>
              Sign in to your account
            </h1>
            <form
              className='space-y-4 md:space-y-6'
              onSubmit={handleSubmit}
              action='#'
            >
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-white dark:text-white'
                >
                  Your email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  onChange={(event) => setEmail(event.target.value)}
                  className='bg-gray-50 border border-gray-300 placeholder-gray-400 text-gray-600 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='name@example.com'
                  required=''
                />
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-white dark:text-white'
                >
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder='••••••••'
                  className='bg-gray-50 border border-gray-300 placeholder-gray-400 text-gray-600 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  required=''
                />
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-start'>
                  <div className='flex items-center h-5'>
                    <input
                      id='remember'
                      aria-describedby='remember'
                      type='checkbox'
                      className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-100 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
                      required=''
                    />
                  </div>
                  <div className='ml-3 text-sm'>
                    <label
                      htmlFor='remember'
                      className='text-blue-600 dark:text-blue-600 font-normal'
                    >
                      Remember me
                    </label>
                  </div>
                </div>
              </div>
              <button
                type='submit'
                className='w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
              >
                Sign in
              </button>
              <p className='text-sm font-light text-gray-500 dark:text-gray-700'>
                Don't have an account yet?{' '}
                <Link
                  to='/register'
                  className='font-semibold text-blue-600 hover:underline dark:text-blue-600'
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
