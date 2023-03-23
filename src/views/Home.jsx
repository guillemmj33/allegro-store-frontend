import React, { useState, useEffect } from 'react'
import CategoryFilter from '../components/CategoryFilter/CategoryFilter'
import ItemCard from '../components/ItemCard/ItemCard'
import { getItems } from '../services/items.service'

export default function Home() {
  const imagesBaseUrl = import.meta.env.VITE_IMAGES_BACKEND_URL
  const [items, setItems] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('All')

  const getAllItems = async () => {
    const { data } = await getItems()
    setItems(data.items)
  }

  const filteredItems = items.filter(({ title, category: itemCategory }) =>
    title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category === 'All' || itemCategory === category)
  )

  useEffect(() => {
    getAllItems()
  }, [])

  return (
    <>
      <h1 className='mt-24 px-2 text-center text-2xl tracking-tight font-normal text-slate-900 dark:text-slate-900'>
        Join the millions of music lovers who use Allegro and find your dream
        gear <span className="font-semibold underline decoration-cyan-500">today</span>!
      </h1>
      <div className='-mt-14 flex px-2 md:px-28 lg:px-48 xl:px-56'>
        <input
          type='text'
          placeholder='Search...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='w-full mt-20 rounded-full border border-gray-300'
        />
      </div>
      <div className="mt-6 px-2 sm:px-56">
        <h2 className="font-semibold text-lg text-slate-900">Categories</h2>
        <CategoryFilter setCategory={setCategory} />
      </div>
      <div className="mt-2 px-2 sm:px-56">
        <h2 className="font-semibold text-slate-900 text-lg">Products</h2>
      </div>
      <div className='flex flex-col items-center px-2 justify-center sm:flex-row gap-4 sm:flex-wrap md:px-40 mt-6'>
        {filteredItems?.map(
          ({ id, title, description, image, category, price, location }) => (
            <ItemCard
              key={id}
              id={id}
              title={title}
              description={description}
              image={imagesBaseUrl + image}
              price={price}
              location={location}
            />
          )
        )}
      </div>
    </>
  )
}
