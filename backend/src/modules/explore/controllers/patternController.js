import patterns from "../data/indiaPatterns.json" assert { type: "json" };

export const getIndiaPatterns = (req, res) => {
  res.json(patterns);
};
