import { openMeteoClient } from "../../../config/apiClients.js";

export const getOpenMeteoData = async (lat, lon) => {
  try {
    const url =
      `/air-quality?latitude=${lat}&longitude=${lon}` +
      `&hourly=pm2_5,pm10,ozone,nitrogen_dioxide,sulphur_dioxide,carbon_monoxide` +
      `&timezone=auto&forecast_hours=1`;

    const res = await openMeteoClient.get(url);

    if (!res.data || !res.data.hourly) return null;

    const h = res.data.hourly;

    if (!h.pm2_5 || h.pm2_5.length === 0) return null;

    const last = h.time.length - 1;

    return {
      pm25: h.pm2_5[last] ?? null,
      pm10: h.pm10?.[last] ?? null,
      no2: h.nitrogen_dioxide?.[last] ?? null,
      so2: h.sulphur_dioxide?.[last] ?? null,
      o3: h.ozone?.[last] ?? null,
      co: h.carbon_monoxide?.[last] ?? null
    };

  } catch (err) {
    console.error("Open-Meteo fetch error:", err);
    return null;
  }
};
