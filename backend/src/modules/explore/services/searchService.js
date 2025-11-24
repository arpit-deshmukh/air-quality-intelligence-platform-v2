import { cities } from "../../../config/cities.js";

export const searchCityService = (query) => {
  const q = query.toLowerCase();

  return cities.filter(c =>
    c.name.toLowerCase().startsWith(q)
  );
};
