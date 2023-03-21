import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-white shadow dark:bg-white fixed bottom-0 left-0 right-0'>
      <div className='w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2023{' '}
          <a href='/' className='hover:underline'>
            Allegro™
          </a>
          . All Rights Reserved. Made by Guillem Martínez.
        </span>
        <ul className='flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0'>
          <li>
            <a href='/about' className='mr-4 hover:underline md:mr-6 '>
              About
            </a>
          </li>
          <li>
            <a href='/contact' className='hover:underline'>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
