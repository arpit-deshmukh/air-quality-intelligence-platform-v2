import { cities } from "../data/cities.js";
import { getOpenMeteoData } from "../providers/openMeteoProvider.js";

export const getHourlyAqiService = async (cityName) => {
  const city = cities.find(
    c => c.name.toLowerCase() === cityName.toLowerCase()
  );

  if (!city) return null;

  const url =
    `/air-quality?latitude=${city.lat}&longitude=${city.lon}` +
    `&hourly=pm2_5,pm10,ozone,nitrogen_dioxide,sulphur_dioxide,carbon_monoxide,time`;

  const res = await fetch(`https://air-quality-api.open-meteo.com/v1${url}`);
  const data = await res.json();

  if (!data.hourly) return null;

  return data.hourly;
};
