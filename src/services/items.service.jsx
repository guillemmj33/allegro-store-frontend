import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const getItems = () => {
  return axios.get(baseUrl + "/items");
};

export const getItemById = (id) => {
  return axios.get(baseUrl + "/item/" + id);
};

export const createItem = (data) => {
  return axios.post(baseUrl + "/item/create", data);
};

export const updateItem = (id, data) => {
  return axios.put(baseUrl + "/items/" + id, data);
};

export const deleteItem = (id) => {
  return axios.delete(baseUrl + "/items/" + id);
};
