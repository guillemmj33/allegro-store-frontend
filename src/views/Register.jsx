import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import { register } from '../services/user.service'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isRegistered, setIsRegistered] = useState(false)
  const navigate = useNavigate()
  const { setUserStorage } = useContext(UserContext)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Passwords do not match!',
        showConfirmButton: false,
        timer: 2000,
      })
      return
    }

    try {
      const formData = {
        name: name,
        email: email,
        password: password,
      }

      const { data } = await register(formData)
      console.log(data)
      const userObject = {
        token: data.authorisation.token,
        id: data.user.id,
        user: data.user.username,
        email: data.user.email,
        userToken: data.user.token,
      }
      console.log(userObject, 'user data adapter')
      setUserStorage(userObject)

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Yey! You have successfully registered!',
        showConfirmButton: false,
        timer: 2000,
      })
      setIsRegistered(true)
      setTimeout(() => {
        navigate('/login')
      }, 2000) // Delay the navigation for 2 seconds (2000 milliseconds)
    } catch (error) {
      setMessage(error.response.data.message)
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'There has been a problem, try again!',
        showConfirmButton: false,
        timer: 2000,
      })
    }
  }

  return (
    <section className='bg-white dark:bg-white mt-12 sm:mt-6 mb-2 sm:-mb-14'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className='w-full bg-cyan-500 border-gray-700 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-cyan-500 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold text-white leading-tight tracking-tight md:text-2xl dark:text-white'>
              Create an account
            </h1>
            <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit} action='#'>
            <div>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm font-medium text-white dark:text-white'
                >
                  Your name
                </label>
                <input
                  type='name'
                  name='name'
                  id='name'
                  onChange={(event) => setName(event.target.value)}
                  className='bg-gray-50 border border-gray-300 text-gray-600 placeholder-gray-400 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Your name here...'
                  required=''
                />
              </div>
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
                  className='bg-gray-50 border placeholder-gray-400 border-gray-300 text-gray-600 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500'
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
                  placeholder='••••••••'
                  onChange={(event) => setPassword(event.target.value)}
                  className='bg-gray-50 border placeholder-gray-400 border-gray-300 text-gray-600 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  required=''
                />
              </div>
              <div>
                <label
                  htmlFor='confirm-password'
                  className='block mb-2 text-sm font-medium text-white dark:text-white'
                >
                  Confirm password
                </label>
                <input
                  type='password'
                  name='confirm-password'
                  id='confirm-password'
                  placeholder='••••••••'
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  className='bg-gray-50 border placeholder-gray-400 border-gray-300 text-gray-600 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  required=''
                />
              </div>
              <div className='flex items-start'>
                <div className='flex items-center h-5'>
                  <input
                    id='terms'
                    aria-describedby='terms'
                    type='checkbox'
                    className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-100 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
                    required=''
                  />
                </div>
                <div className='ml-3 text-sm'>
                  <label
                    htmlFor='terms'
                    className='font-light text-gray-600 dark:text-gray-300'
                  >
                    I accept the{' '}
                    <a
                      className='font-medium text-blue-500 hover:underline dark:text-blue-500'
                      href='#'
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type='submit'
                className='w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
              >
                Create an account
              </button>
              <p className='text-sm font-light text-gray-700 dark:text-gray-700'>
                Already have an account?{' '}
                <Link
                  to='/login'
                  className='font-semibold text-blue-600 hover:underline dark:text-blue-600'
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
