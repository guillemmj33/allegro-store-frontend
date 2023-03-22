import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SingleItemCard from '../components/ItemCard/SingleItemCard'
import { getItemById } from '../services/items.service'

export default function SingleItem() {
  const imagesBaseUrl = import.meta.env.VITE_IMAGES_BACKEND_URL

  const { id } = useParams()

  const [data, setData] = useState({})

  const getItem = async () => {
    const { data } = await getItemById(id)
    setData(data.item)
  }

  useEffect(() => {
    getItem()
  }, [id])

  return (
    <>
      <div className='mt-20 px-2 text-sm sm:mt-24 sm:text-lg sm:px-20'>
        <a href='/'>
          <i className='fa-solid fa-arrow-left'></i>
        </a>
      </div>
      <div className='flex flex-col items-center mx-auto mt-6'>
        <SingleItemCard
          key={id}
          id={id}
          title={data.title}
          description={data.description}
          image={imagesBaseUrl + data.image}
          price={data.price}
          location={data.location}
          category={data.category}
          email={data.email}
        />
      </div>
    </>
  )
}
