import { getOpenMeteoData } from "../../aqi/providers/openMeteoProvider.js";
import { calculateAQI } from "../../aqi/utils/calculateAQI.js";

export const getAqiByCoordsService = async (lat, lon) => {
  const data = await getOpenMeteoData(lat, lon);
  if (!data) return null;

  const aqi = calculateAQI(data);

  return {
    aqi,
    ...data,
    lat,
    lon,
    source: "open-meteo"
  };
};
