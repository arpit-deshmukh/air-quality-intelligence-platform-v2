import { compareCitiesService } from "../services/compareService.js";

export const compareCities = async (req, res) => {
  const { cities } = req.query;

  if (!cities)
    return res.status(400).json({ error: "cities parameter required" });

  const list = cities.split(",");
  const data = await compareCitiesService(list);

  res.json(data);
};
