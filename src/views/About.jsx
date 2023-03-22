import React from 'react'
import Friends from '../assets/friends.jpg'
import Piano from '../assets/piano.jpg'

export default function About() {
  return (
    <section className='py-16 sm:py-24 bg-white dark:bg-white'>
      <div className='gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6'>
        <div className='font-light text-gray-400 sm:text-lg dark:text-gray-400'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-slate-900'>
            Welcome to our music marketplace!
          </h2>
          <p className='mb-4'>
            We are a team of passionate music lovers who have created a haven
            for all music enthusiasts. Our marketplace is designed to offer a wide
            range of musical instruments, equipment, and accessories to cater to
            the needs of both beginners and professionals.
            <br />
            <br />
            We believe that music has the power to transform lives and bring
            people together. Whether you're a seasoned musician or just starting
            out, we're here to help you find the perfect instrument or gear to
            create your own unique sound.
          </p>
        </div>
        <div className='grid grid-cols-2 gap-4 mt-8'>
          <img
            className='w-full rounded-lg'
            src={Friends}
            alt='friends playing guitar'
          />
          <img
            className='mt-4 w-full lg:mt-10 rounded-lg'
            src={Piano}
            alt='boy playing piano'
          />
        </div>
      </div>
    </section>
  )
}
