import axios from "axios";

// // backend url
// const API = axios.create({
//   baseURL: "https://air-quality-intelligence-platform-v2.onrender.com/api",
//   timeout: 8000,
// });

const API = axios.create({
  baseURL: import.meta.env.DEV
    ? "http://localhost:5000/api"
    : "https://air-quality-intelligence-platform-v2.onrender.com/api",
  timeout: 15000, 
});

// live aqii
export const fetchLiveAQI = async (city) => {
  try {
    const res = await API.get(`/aqi/live?city=${encodeURIComponent(city)}`);
    return res.data;
  } catch (error) {
    console.log("Frontend API error:", error);
    throw error;
  }
};

// analystics :to do 
export const fetchHourlyAQI = async () => {
  return [];
};
