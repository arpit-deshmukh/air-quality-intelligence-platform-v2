import axios from "axios";

const API_BASE_URL = import.meta.env.DEV
  ? "http://localhost:5000/api"
  : "https://air-quality-intelligence-platform-v2.onrender.com/api";

export const api = axios.create({
  baseURL: API_BASE_URL,
});
