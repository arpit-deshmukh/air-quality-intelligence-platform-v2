import pollutants from "../data/pollutants.json" assert { type: "json" };

export const getPollutantsInfo = (req, res) => {
  res.json(pollutants);
};
