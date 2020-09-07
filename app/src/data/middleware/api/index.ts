import axios from "axios";

import { baseURL } from "./currentURL";
import { PutCropPhotoRequestType, AccessToken } from "./apiTypes";

export const STATUS_CODE = {
  success: 200,
  networkError: 511,
};

const authorizationHeader = (accessToken: string) => ({
  Authorization: `Bearer ${accessToken}`,
});

const instanceAxios = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

export const putCropPhotoApi = async (payload: PutCropPhotoRequestType) => {
  const formData = new FormData();
  formData.append("area", payload.area);
  formData.append("photo", payload.photo);
  formData.append("width", payload.width);
  formData.append("height", payload.height);
  formData.append("imageWidth", payload.imageWidth);
  formData.append("imageHeight", payload.imageHeight);
  formData.append("token", payload.accessToken);

  const response = await instanceAxios.put("/photo", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return [response.data, response.status];
};

export const getMapPhotosApi = async (payload: AccessToken) => {
  const response = await instanceAxios.get("/photo", {
    params: {
      token: payload.accessToken,
    },
  });

  return [response.data, response.status];
};
