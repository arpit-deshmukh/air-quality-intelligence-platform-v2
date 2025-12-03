import { cities } from "../data/cities.js";

export const getHourlyAqiService = async (cityName) => {
  const city = cities.find(c => c.name.toLowerCase() === cityName.toLowerCase());
  if (!city) return null;

  const url =
    `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${city.lat}&longitude=${city.lon}` +
    `&hourly=pm2_5,pm10,ozone,nitrogen_dioxide,sulphur_dioxide,carbon_monoxide,time`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.hourly ?? null;
  } catch (err) {
    console.error("Hourly AQI Error:", err.message);
    return null;
  }
};
