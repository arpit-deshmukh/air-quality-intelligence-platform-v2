import models from "../data/models.json" assert { type: "json" };

export const getCityModels = (req, res) => {
  res.json(models);
};
