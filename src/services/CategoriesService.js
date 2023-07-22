import { fetchAPI } from "./baseService";

export const get = async (endpoint) => {
  return fetchAPI(endpoint, "GET");
};
