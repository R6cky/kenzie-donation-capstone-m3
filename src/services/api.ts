import axios from "axios";

const api = axios.create({
  baseURL: "https://kenzie-donation-api.onrender.com",
  timeout: 5000,
});

export default api;
