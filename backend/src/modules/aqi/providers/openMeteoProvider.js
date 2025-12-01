import axios from "axios";

export const fetchCityAQI = async (city) => {
  const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${city.lat}&longitude=${city.lon}&hourly=pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone`;

  try {
    const res = await axios.get(url);
    const data = res.data;

    const i = data.hourly.time.length - 1;

    return {
      city: city.name,
      pm25: data.hourly.pm2_5[i] ?? 0,
      pm10: data.hourly.pm10[i] ?? 0,
      no2: data.hourly.nitrogen_dioxide[i] ?? 0,
      so2: data.hourly.sulphur_dioxide[i] ?? 0,
      o3: data.hourly.ozone[i] ?? 0,
      co: data.hourly.carbon_monoxide[i] ?? 0,
      aqi: Math.round(
        (data.hourly.pm2_5[i] + data.hourly.pm10[i] + data.hourly.ozone[i]) / 3
      ),
      source: "open-meteo"
    };

  } catch (err) {
    console.error(`API Error for ${city.name}`, err.message);
    return null;
  }
};

export const getOpenMeteoData = async (lat, lon) => {
  const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&hourly=pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone`;

  try {
    const res = await axios.get(url);
    const data = res.data;
    const i = data.hourly.time.length - 1;

    return {
      pm25: data.hourly.pm2_5[i] ?? 0,
      pm10: data.hourly.pm10[i] ?? 0,
      no2: data.hourly.nitrogen_dioxide[i] ?? 0,
      so2: data.hourly.sulphur_dioxide[i] ?? 0,
      o3: data.hourly.ozone[i] ?? 0,
      co: data.hourly.carbon_monoxide[i] ?? 0,
    };
  } catch (err) {
    console.error(`API Error for ${lat}, ${lon}`, err.message);
    return null;
  }
};
