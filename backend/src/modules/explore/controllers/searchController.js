import { searchCityService } from "../services/searchService.js";

export const searchCity = (req, res) => {
  const { query } = req.query;

  if (!query)
    return res.status(400).json({ error: "query required" });

  const results = searchCityService(query);
  res.json(results);
};
