import { openMeteoClient } from "../../../config/apiClients.js";

export const getOpenMeteoData = async (lat, lon) => {
  const url = `/air-quality?latitude=${lat}&longitude=${lon}&hourly=pm2_5,pm10,ozone,nitrogen_dioxide,sulphur_dioxide,carbon_monoxide`;

  const res = await openMeteoClient.get(url);

  const h = res.data.hourly;
  if (!h || !h.pm2_5) return null;

  const i = h.time.length - 1;

  return {
    pm25: h.pm2_5[i],
    pm10: h.pm10[i],
    no2: h.nitrogen_dioxide[i],
    so2: h.sulphur_dioxide[i],
    o3: h.ozone[i],
    co: h.carbon_monoxide[i]
  };
};
