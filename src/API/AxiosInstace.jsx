import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com/",
});
export const AccessoriesInstace = axios.create({
  baseURL: "https://fakestoreapi.in/api/",
});

export default AxiosInstance;

export const DatabaseInstance = axios.create({
  baseURL: "https://github.com/adithyakannam/E-Commerce/blob/main/Database/db.json",
});

export const MensFashion = axios.create({
  baseURL: `https://fakestoreapi.com/products/category/`,
});
