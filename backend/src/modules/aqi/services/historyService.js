import AQIRecord from "../models/AQIRecord.js";
import { cities } from "../../../config/cities.js";
import { getOpenMeteoData } from "../providers/openMeteoProvider.js";
import { calculateAQI } from "../utils/calculateAQI.js";

export const saveHourlyAqi = async () => {
    for (const c of cities) {
        const data = await getOpenMeteoData(c.lat, c.lon);
        if (!data) continue;

        const aqi = calculateAQI(data);

        await AQIRecord.create({
            city: c.name,
            aqi,
            ...data,
            source: "open-meteo"
        });
    }
};

export const getHistoryService = async (city, hours = 24) => {
    const from = new Date(Date.now() - hours * 60 * 60 * 1000);

    return AQIRecord.find({
        city,
        createdAt: { $gte: from }
    })
        .sort({ createdAt: 1 })
        .lean();
};
