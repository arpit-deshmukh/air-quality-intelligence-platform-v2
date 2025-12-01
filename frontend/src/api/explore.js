import axios from "axios";

export const getExploreData = async () => {
  const res = await axios.get("/api/explore");
  return res.data;
};
