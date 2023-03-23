import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const form = useRef()

  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_8rmtxbs',
        'template_3t0eaxa',
        e.target,
        'OfIBMNwewxXeAb9pw'
      )
      .then(
        (result) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your message has been successfully sent!',
            showConfirmButton: false,
            timer: 2000,
          })
        },
        (error) => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'There has been a problem, try again!',
            showConfirmButton: false,
            timer: 2000,
          })
        }
      )

    e.target.reset()
  }

  return (
    <section className='mt-12 bg-white dark:bg-white'>
      <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
        <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-slate-900 dark:text-slate-900'>
          Contact Us
        </h2>
        <p className='mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form ref={form} onSubmit={sendEmail} action='#' className='space-y-8'>
          <div>
            <label
              htmlFor='name'
              className='block mb-2 text-sm font-medium text-slate-900 dark:text-slate-900'
            >
              Your name
            </label>
            <input
              type='name'
              id='name'
              name='name'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-900 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
              placeholder='Your name here'
              required
            />
          </div>
          <div>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-slate-900 dark:text-slate-900'
            >
              Your email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-900 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
              placeholder='name@example.com'
              required
            />
          </div>
          <div>
            <label
              htmlFor='subject'
              className='block mb-2 text-sm font-medium text-slate-900 dark:text-slate-900'
            >
              Subject
            </label>
            <input
              type='text'
              id='subject'
              name='subject'
              className='block p-3 w-full text-sm text-gray-600 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-900 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
              placeholder='Let us know how we can help you'
              required
            />
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='message'
              className='block mb-2 text-sm font-medium text-slate-600 dark:text-slate-900'
            >
              Your message
            </label>
            <textarea
              id='message'
              rows='6'
              name='message'
              className='block p-2.5 w-full text-sm text-gray-600 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-900 dark:focus:ring-primary-500 dark:focus:border-primary-500'
              placeholder='Leave a comment...'
            ></textarea>
          </div>
          <button
            type='submit'
            className='py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-cyan-500 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-cyan-500 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}
