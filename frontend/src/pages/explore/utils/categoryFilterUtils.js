export const filterCitiesByCategory = (list, category) => {
  switch (category) {
    case "india":
      return list.filter((c) => c.country === "IN");
    case "global":
      return list.filter((c) => c.country === "GLOBAL");
    case "low":
      return [...list].sort((a, b) => (a.aqi || 9999) - (b.aqi || 9999));
    case "high":
      return [...list].sort((a, b) => (b.aqi || -1) - (a.aqi || -1));
    default:
      return list;
  }
};
