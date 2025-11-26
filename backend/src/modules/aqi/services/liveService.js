import { cities } from "../../../config/cities.js";
import { getOpenMeteoData } from "../providers/openMeteoProvider.js";
import { calculateAQI } from "../utils/calculateAQI.js";
import { getCache, setCache } from "../utils/cache.js";

export const getLiveAqiService = async (cityName) => {
    //checking cache
    const cached = getCache(cityName);
    if (cached) return cached;

    //city coordinate finding
    const city = cities.find(
        c => c.name.toLowerCase() === cityName.toLowerCase()
    );

    if (!city) return null;

  //fetching data 
    const data = await getOpenMeteoData(city.lat, city.lon);
    if (!data) return null;


    const aqi = calculateAQI(data);


    const finalData = {
        city: city.name,
        aqi,
        ...data,
        source: "open-meteo"
    };

    //for 5 min
    setCache(cityName, finalData);

    return finalData;
};
