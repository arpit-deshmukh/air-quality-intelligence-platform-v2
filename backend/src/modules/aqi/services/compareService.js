import { cities } from "../../../config/cities.js";
import { getOpenMeteoData } from "../providers/tempFile.js";
import { calculateAQI } from "../utils/calculateAQI.js";

export const compareCitiesService = async (cityNames) => {
  const list = cityNames.map(name => name.trim().toLowerCase());

  const results = [];

  for (const name of list) {
    const c = cities.find(x => x.name.toLowerCase() === name);
    if (!c) {
      results.push({ city: name, error: "City not found" });
      continue;
    }

    const data = await getOpenMeteoData(c.lat, c.lon);
    if (!data) {
      results.push({ city: c.name, error: "No data available" });
      continue;
    }

    const aqi = calculateAQI(data);

    results.push({
      city: c.name,
      aqi,
      ...data,
      source: "open-meteo"
    });
  }

  return results;
};
