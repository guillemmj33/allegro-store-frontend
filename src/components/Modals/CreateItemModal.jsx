import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createItem } from '../../services/items.service'

export default function CreateItemModal({ isModalOpen, handleOpenModal, handleCloseModal }) {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [location, setLocation] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const formData = new FormData()
      formData.append('title', title)
      formData.append('description', description)
      formData.append('image', image)
      formData.append('category', category)
      formData.append('price', price)
      formData.append('location', location)

      const { data } = await createItem(formData)
      console.log(data)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your product has been successfully uploaded!',
        showConfirmButton: false,
        timer: 2000,
      })
      setTimeout(() => {
        navigate('/')
        event.target.reset()
        window.location.reload()
      }, 2000) // Delay the navigation for 2 seconds (2000 milliseconds)
    } catch (error) {
      console.log(error)
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Uh oh. You need to log in to upload a product!',
        showConfirmButton: false,
        timer: 3000,
      })
      setTimeout(() => {
        navigate('/')
        event.target.reset()
        window.location.reload()
      }, 2000)
    }
  }

  return (
    // <!-- Main modal -->
    <div
      id='defaultModal'
      tabIndex='-1'
      aria-hidden='true'
      className={`${isModalOpen ? '' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full`}    >
      <div className='relative p-4 w-full max-w-2xl h-full md:h-auto'>
        {/* <!-- Modal content --> */}
        <div className='relative p-4 bg-white rounded-lg shadow dark:bg-white sm:p-5'>
          {/* <!-- Modal header --> */}
          <div className='flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600'>
            <h3 className='text-lg font-semibold text-slate-900 dark:text-slate-900'>
              Add Product
            </h3>
            <button
              type='button'
              data-modal-toggle='defaultModal'
              onClick={handleCloseModal}
              className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
            >
              <svg
                aria-hidden='true'
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
              <span className='sr-only'>Close modal</span>
            </button>
          </div>
          {/* <!--  Modal body  --> */}
          <form
            onSubmit={handleSubmit}
            action='#'
            encType='multipart/form-data'
          >
            <div className='grid gap-4 mb-4 sm:grid-cols-2'>
              <div>
                <label
                  htmlFor='title'
                  className='block mb-2 text-sm font-medium text-slate-900 dark:text-slate-900'
                >
                  Name
                </label>
                <input
                  type='text'
                  name='title'
                  id='title'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-900 dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='Type product name'
                  required=''
                  onChange={(event) => setTitle(event.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor='location'
                  className='block mb-2 text-sm font-medium text-slate-900 dark:text-slate-900'
                >
                  Location
                </label>
                <input
                  type='text'
                  name='location' 
                  id='location'
                  className='bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-900 dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='Product location'
                  required=''
                  onChange={(event) => setLocation(event.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor='price'
                  className='block mb-2 text-sm font-medium text-slate-900 dark:text-slate-900'
                >
                  Price
                </label>
                <input
                  type='number'
                  name='price'
                  id='price'
                  className='bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-900 dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='2999€'
                  required=''
                  onChange={(event) => setPrice(event.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor='category'
                  className='block mb-2 text-sm font-medium text-slate-900 dark:text-slate-900'
                >
                  Category
                </label>
                <select
                  id='category'
                  onChange={(event) => setCategory(event.target.value)}
                  className='bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-900 dark:focus:ring-primary-500 dark:focus:border-primary-500'
                >
                  <option defaultValue=''>Select category</option>
                  <option value='Guitar'>Guitar</option>
                  <option value='Bass'>Bass</option>
                  <option value='Drums'>Drums</option>
                  <option value='Piano'>Piano</option>
                  <option value='Studio'>Studio</option>
                  <option value='DJ'>DJ</option>
                </select>
              </div>
              <div className='sm:col-span-2'>
                <label
                  className='block mb-2 text-base font-semibold text-slate-900 dark:text-slate-900'
                  htmlFor='image'
                >
                  Image
                </label>
                <input
                  className='block w-full text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400'
                  id='image'
                  type='file'
                  accept='image/*'
                  onChange={(event) => setImage(event.target.files[0])}
                />
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='description'
                  className='block mb-2 text-sm font-medium text-slate-900 dark:text-slate-900'
                >
                  Description
                </label>
                <textarea
                  id='description'
                  rows='4'
                  className='block p-2.5 w-full text-sm text-gray-600 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-900 dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='Write product description here'
                  onChange={(event) => setDescription(event.target.value)}
                ></textarea>
              </div>
            </div>
            <button
              type='submit'
              className='text-white inline-flex items-center bg-cyan-500 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-500 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
            >
              <svg
                className='mr-1 -ml-1 w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                  clipRule='evenodd'
                ></path>
              </svg>
              Add new product
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
