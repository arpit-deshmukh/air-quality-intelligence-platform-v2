import { getAllCitiesAQI } from "../services/exploreService.js";

export const getExploreData = async (req, res) => {
  try {
    const data = await getAllCitiesAQI();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Explore fetch failed" });
  }
};
