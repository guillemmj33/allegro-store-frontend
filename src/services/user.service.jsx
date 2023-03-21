import axios from 'axios'

const backendUrl = import.meta.env.VITE_BACKEND_URL

const createAxiosInstance = () => axios.create({ baseURL: backendUrl })

export const login = (data) => createAxiosInstance().post('/login', data)

export const register = (data) => createAxiosInstance().post('/register', data)

export const registerAdmin = (data) =>
  createAxiosInstance().post('/register_admin', data)
