import axios from 'axios'

const backendUrl = import.meta.env.VITE_BACKEND_URL

const createAxiosInstance = () => axios.create({ baseURL: backendUrl })

export const getItems = () => createAxiosInstance().get('/items')

export const getItemById = (id) => createAxiosInstance().get(`/item/${id}`)

export const createItem = (data) =>
  createAxiosInstance().post('/item/create', data)

export const updateItem = (id, data) =>
  createAxiosInstance().put(`/items/${id}`, data)

export const deleteItem = (id) => createAxiosInstance().delete(`/items/${id}`)
