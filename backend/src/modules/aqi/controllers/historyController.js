import { getHistoryService } from "../services/historyService.js";

export const getAQIHistory = async (req, res) => {
  const { city, hours } = req.query;
  if (!city) return res.status(400).json({ error: "City required" });

  const data = await getHistoryService(city, Number(hours) || 24);
  res.json(data);
};
