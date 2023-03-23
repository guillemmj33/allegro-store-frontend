import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import LogoutButton from '../LogoutButton/LogoutButton'
import CreateItemModal from '../Modals/CreateItemModal'
import allegroLogo from '../../assets/allegro-text.png'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className='fixed top-0 left-0 right-0 bg-white border-gray-200 px-2 border-b sm:px-4 py-2.5 dark:bg-white'>
        <div className='container flex flex-wrap items-center justify-between mx-auto'>
          <a href='/' className='flex items-center'>
            <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
              <img
                src={allegroLogo}
                className='h-8 mr-3 sm:h-9'
                alt='Allegro Logo Text'
              />
            </span>
          </a>
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-200 dark:focus:ring-gray-600'
            aria-controls='navbar-default'
            aria-expanded='false'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-7 h-7'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
          <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
            <ul className='flex flex-col p-4 mt-4 border border-gray-700 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-white md:dark:bg-white dark:border-gray-700'>
              <li>
                <Link
                  to='/'
                  className='block py-2 pl-3 pr-4 text-gray-500 hover:text-white rounded hover:bg-cyan-500 md:hover:bg-transparent md:border-0 md:hover:text-cyan-500 md:p-0 dark:text-gray-500 md:dark:hover:text-cyan-500 dark:hover:bg-cyan-500 dark:hover:text-white md:dark:hover:bg-transparent'
                  aria-current='page'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='block py-2 pl-3 pr-4 text-gray-500 hover:text-white rounded hover:bg-cyan-500 md:hover:bg-transparent md:border-0 md:hover:text-cyan-500 md:p-0 dark:text-gray-500 md:dark:hover:text-cyan-500 dark:hover:bg-cyan-500 dark:hover:text-white md:dark:hover:bg-transparent'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='block py-2 pl-3 pr-4 text-gray-500 hover:text-white rounded hover:bg-cyan-500 md:hover:bg-transparent md:border-0 md:hover:text-cyan-500 md:p-0 dark:text-gray-500 md:dark:hover:text-cyan-500 dark:hover:bg-cyan-500 dark:hover:text-white md:dark:hover:bg-transparent'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to='/register'
                  className='block py-2 pl-3 pr-4 text-gray-500 hover:text-white rounded hover:bg-cyan-500 md:hover:bg-transparent md:border-0 md:hover:text-cyan-500 md:p-0 dark:text-gray-500 md:dark:hover:text-cyan-500 dark:hover:bg-cyan-500 dark:hover:text-white md:dark:hover:bg-transparent'
                >
                  <i className='fa-solid fa-user'></i> Login or register
                </Link>
              </li>
              <li>
                <LogoutButton />
              </li>
              <li>
                <button
                  id='defaultModalButton'
                  data-modal-toggle='defaultModal'
                  type='button'
                  className='block py-2 pl-3 pr-4 text-gray-500 hover:text-white rounded hover:bg-cyan-500 md:hover:bg-transparent md:border-0 md:hover:text-cyan-500 md:p-0 dark:text-gray-500 md:dark:hover:text-cyan-500 dark:hover:bg-cyan-500 dark:hover:text-white md:dark:hover:bg-transparent'
                >
                  <i className='fa-solid fa-circle-plus'></i> Upload product
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <CreateItemModal />
    </>
  )
}
