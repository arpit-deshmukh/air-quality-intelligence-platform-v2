export const filterCitiesByCategory = (list, category) => {
  if (category === "india")
    return list.filter((c) => c.country === "IN");

  if (category === "global")
    return list.filter((c) => c.country == "GLOBAL");

  if (category === "low")
    return [...list].sort((a, b) => (a.aqi || 9999) - (b.aqi || 9999));

  if (category === "high")
    return [...list].sort((a, b) => (b.aqi || -1) - (a.aqi || -1));

  return list;
};
