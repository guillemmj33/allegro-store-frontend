import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemCard({
  id,
  title,
  description,
  image,
  category,
  price,
  location,
}) {
  return (
    <div className='w-full flex flex-col flex-grow max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-white'>
      <img
        className='block mx-auto max-h-44 rounded-t-lg'
        src={image}
        alt={title}
      />
      <div className='px-5 pb-5 flex-grow'>
        <h4 className='mt-4 text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-900'>
          {title}
        </h4>
        <p className='py-2 text-sm font-light tracking-tight text-gray-900 dark:text-gray-900'>
          {description}
        </p>
        <div className='flex items-center justify-between'>
          <span className='text-xl font-bold text-gray-900 dark:text-gray-900'>
            {price}€
          </span>
          <Link
            to={`/item/${id}`}
            className='text-white bg-cyan-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            See more
          </Link>
        </div>
      </div>
    </div>
  )
}
