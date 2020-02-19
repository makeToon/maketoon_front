import axios from "axios";

import { baseURL } from "./currentURL";
import { PutCropPhotoRequestType, AccessToken } from "./apiTypes";

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

export const putCropPhotoApi = async (payload: PutCropPhotoRequestType) => {
  const formData = new FormData();
  formData.append("photo", payload.photo);

  const response = await instanceAxios.put("/photo", formData, {
    headers: {
      ...authorizationHeader(payload.accessToken),
      "Content-Type": "multipart/form-data"
    }
  });

  return [response.data, response.status];
};

export const getMapPhotosApi = async (payload: AccessToken) => {
  const response = await instanceAxios.get("/photo", {
    headers: authorizationHeader(payload.accessToken)
  });

  return [response.data, response.status];
};
