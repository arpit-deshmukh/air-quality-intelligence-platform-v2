import axios from "axios";

export const openMeteoClient = axios.create({
  baseURL: "https://air-quality-api.open-meteo.com/v1",
  timeout: 10000,
});
