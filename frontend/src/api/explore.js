import { api } from "./client";

export const getExploreData = async () => {
  const res = await api.get("/explore");
  return res.data;
};
