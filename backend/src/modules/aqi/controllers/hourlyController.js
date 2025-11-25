import { getHourlyAqiService } from "../services/hourlyService.js";

export const getHourlyAqi = async (req, res) => {
  try {
    const city = req.query.city;
    const data = await getHourlyAqiService(city);

    if (!data)
      return res.status(404).json({ error: "City not found or no data" });

    res.json({
      city,
      hourly: data
    });

  } catch (err) {
    console.error("Hourly AQI error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
