import { openMeteoClient } from "../../../config/apiClients.js";

export const getOpenMeteoData = async (lat, lon) => {
  const url =
    `/air-quality?latitude=${lat}&longitude=${lon}` +
    `&hourly=pm2_5,pm10,ozone,nitrogen_dioxide,sulphur_dioxide,carbon_monoxide`;

  const res = await openMeteoClient.get(url);

  const h = res.data.hourly;
  if (!h || !h.pm2_5) return null;

  const index = h.time.length - 1;

  return {
    pm25: h.pm2_5[index],
    pm10: h.pm10[index],
    no2: h.nitrogen_dioxide[index],
    so2: h.sulphur_dioxide[index],
    o3: h.ozone[index],
    co: h.carbon_monoxide[index]
  };
};
