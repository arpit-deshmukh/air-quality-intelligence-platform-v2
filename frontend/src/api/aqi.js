import axios from "axios";

const API_BASE_URL = import.meta.env.DEV
  ? "http://localhost:5000/api"
  : "https://air-quality-intelligence-platform-v2.onrender.com/api";

const API = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
});

export const fetchLiveAQI = async (city) => {
  try {
    const res = await API.get(`/aqi/live?city=${encodeURIComponent(city)}`);
    return res.data;
  } catch (error) {
    console.error("AQI fetch failed:", error.message);
    throw error;
  }
};

export const fetchHourlyAQI = async () => {
  return [];
};
