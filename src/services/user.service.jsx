import axios from 'axios'

const baseUrl = import.meta.env.VITE_BACKEND_URL

export const login = (data) => {
  return axios.post(baseUrl + '/login', data)
}

export const register = (data) => {
  return axios.post(baseUrl + '/register', data)
}

export const logout = () => {
  return axios.post(baseUrl + '/logout')
}

export const register_admin = (data) => {
  return axios.post(baseUrl + '/register_admin', data)
}
