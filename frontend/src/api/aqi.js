import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 8000,
});

export const fetchLiveAQI = async (city) => {
  try {
    const res = await API.get(`/aqi/live?city=${city}`);
    return res.data;
  } catch (error) {
    console.log("Frontend API error:", error);
    throw error;
  }
};
