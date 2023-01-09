import axios from "axios";

export const api = axios.create({
  baseURL: "https://kenzie-donation-api.onrender.com",
  timeout: 5000,
});
