import { api } from "./client";

export const fetchLiveAQI = (city) =>
  api.get(`/aqi/live?city=${city}`);

export const fetchHistory = (city, hours = 24) =>
  api.get(`/aqi/history?city=${city}&hours=${hours}`);

export const compareCities = (cities) =>
  api.get(`/aqi/compare?cities=${cities.join(",")}`);



