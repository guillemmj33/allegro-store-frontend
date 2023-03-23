import React from 'react'
import piano from '../../assets/filterButtons/piano.png'
import bass from '../../assets/filterButtons/bass-guitar.png'
import guitar from '../../assets/filterButtons/electric-guitar.png'
import drums from '../../assets/filterButtons/drum-set.png'
import dj from '../../assets/filterButtons/dj.png'
import studio from '../../assets/filterButtons/sound-mixer.png'

const categories = [
  { id: 1, name: 'Piano', image: piano },
  { id: 2, name: 'Drums', image: drums },
  { id: 3, name: 'Guitar', image: guitar },
  { id: 4, name: 'Bass', image: bass },
  { id: 5, name: 'DJ', image: dj },
  { id: 6, name: 'Studio', image: studio },
]

export default function CategoryFilter({ setCategory }) {
  const handleCategoryClick = (category) => {
    setCategory(category)
  }
  return (
    <div className='px-2 mt-7 text-md flex flex-row flex-grow overflow-x-auto gap-6 md:gap-12'>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.name)}
          className='max-w-sm bg-white rounded-lg'
        >
          <img className='rounded-t-lg mx-auto block object-cover' width='60' src={category.image} alt={category.name} />
          <div className='p-5'>
            <h5 className='text-sm md:text-md font-medium tracking-tight text-gray-900 dark:text-slate-900'>
              {category.name}
            </h5>
          </div>
        </button>
      ))}
    </div>
  )
}
