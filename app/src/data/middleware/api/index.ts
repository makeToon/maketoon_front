import axios from "axios";

import { baseURL } from "./currentURL";
import { SAGATYPE } from "./apiType";

export const STATUS_CODE = {
  success: 200,
  networkError: 511
};

const authorizationHeader = (accessToken: string) => ({
  Authorization: `Bearer ${accessToken}`
});

const instanceAxios = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" }
});

export const SAGAAPI = async (payload: SAGATYPE) => {
  const response = await instanceAxios.post("/test", payload);

  return [response.data, response.status];
};
