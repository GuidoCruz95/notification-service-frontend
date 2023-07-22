import { fetchAPI } from "./baseService";

export const post = async (endpoint, data) => {
  return fetchAPI(endpoint, "POST", data);
};
