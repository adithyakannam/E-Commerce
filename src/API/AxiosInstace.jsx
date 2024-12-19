import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com/",
});
export const AccessoriesInstace = axios.create({
  baseURL: "https://fakestoreapi.in/api/",
});

export default AxiosInstance;

export const DatabaseInstance = axios.create({
  baseURL: "http://localhost:3000/",
});

export const MensFashion = axios.create({
  baseURL: `https://fakestoreapi.com/products/category/`,
});
