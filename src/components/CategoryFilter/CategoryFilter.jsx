import React from 'react'
import piano from '../../assets/filterButtons/piano.png'
import bass from '../../assets/filterButtons/bass-guitar.png'
import guitar from '../../assets/filterButtons/electric-guitar.png'
import drums from '../../assets/filterButtons/drum-set.png'
import dj from '../../assets/filterButtons/dj.png'
import studio from '../../assets/filterButtons/sound-mixer.png'

export default function CategoryFilter({ setCategory }) {
  const handleCategoryClick = (category) => {
    setCategory(category)
  }
  return (
    <div className='px-2 mt-6 text-md flex flex-row overflow-x-auto gap-14'>
      <button
        className='text-center items-center'
        onClick={() => handleCategoryClick('Piano')}
      >
        <img src={piano} width='60' alt='piano' />
        Piano
      </button>
      <button
        className='text-center items-center'
        onClick={() => handleCategoryClick('Drums')}
      >
        <img src={drums} width='60' alt='drums' />
        Drums
      </button>
      <button
        className='text-center items-center'
        onClick={() => handleCategoryClick('Guitar')}
      >
        <img src={guitar} width='60' alt='guitar' />
        Guitar
      </button>
      <button
        className='text-center items-center'
        onClick={() => handleCategoryClick('Bass')}
      >
        <img src={bass} width='60' alt='bass' />
        Bass
      </button>
      <button
        className='text-center items-center'
        onClick={() => handleCategoryClick('DJ')}
      >
        <img src={dj} width='60' alt='dj' />
        DJ
      </button>
      <button
        className='text-center items-center'
        onClick={() => handleCategoryClick('Studio')}
      >
        <img src={studio} width='60' alt='studio' />
        Studio
      </button>
    </div>
  )
}
