import { fetchCityAQI } from "../../aqi/providers/openMeteoProvider.js";

import { getCache, setCache } from "../../../utils/cache.js";
import { cities } from "../data/cities.js";

export const getAllCitiesAQI = async () => {
    const cacheKey = "explore_all";

    const cached = getCache(cacheKey);
    if (cached) return cached;

    const results = await Promise.all(
        cities.map((city) => fetchCityAQI(city))
    );

    const clean = results.filter((x) => x !== null);

    setCache(cacheKey, clean); // cache 5 minutes

    return clean;
};
