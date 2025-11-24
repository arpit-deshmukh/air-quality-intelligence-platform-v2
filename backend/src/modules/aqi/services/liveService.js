import { cities } from "../../../config/cities.js";
import { getOpenMeteoData } from "../providers/OpenMeteoProvider.js";
import { calculateAQI } from "../utils/calculateAQI.js";

export const getLiveAqiService = async (cityName) => {
    const city = cities.find(
        c => c.name.toLowerCase() === cityName.toLowerCase()
    );

    if (!city) return null;

    const data = await getOpenMeteoData(city.lat, city.lon);
    if (!data) return null;

    const aqi = calculateAQI(data);

    return {
        city: city.name,
        aqi,
        ...data,
        source: "open-meteo"
    };
};
