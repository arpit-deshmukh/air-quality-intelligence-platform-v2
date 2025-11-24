import { getAqiByCoordsService } from "../services/coordService.js";

export const getAqiByCoords = async (req, res) => {
  const { lat, lon } = req.query;

  if (!lat || !lon)
    return res.status(400).json({ error: "lat and lon required" });

  const data = await getAqiByCoordsService(lat, lon);
  if (!data) return res.status(404).json({ error: "No data found" });

  res.json(data);
};
