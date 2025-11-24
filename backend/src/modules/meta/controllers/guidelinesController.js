import guidelines from "../data/guidelines.json" assert { type: "json" };

export const getGuidelines = (req, res) => {
  res.json(guidelines);
};
