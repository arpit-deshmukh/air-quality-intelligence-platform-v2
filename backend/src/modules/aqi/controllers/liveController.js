import { getLiveAqiService } from "../services/liveService.js";

export const getLiveAQI = async (req, res) => {
  const { city } = req.query;
  if (!city) return res.status(400).json({ error: "City required" });

  const result = await getLiveAqiService(city);
  if (!result) return res.status(404).json({ error: "City not found" });

  res.json(result);
};
