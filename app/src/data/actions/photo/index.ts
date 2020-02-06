import {
  GetMapPhotosResponseType,
  PutCropPhotoRequestType,
  AccessToken,
  ApiPayload
} from "data/middleware/api/apiTypes";

export const GET_MAP_PHOTOS = "GET_MAP_PHOTOS" as const;
export const GET_MAP_PHOTOS_ASYNC = "GET_MAP_PHOTOS_ASYNC" as const;
export const PUT_CROP_PHOTO = "PUT_CROP_PHOTO" as const;
export const PUT_CROP_PHOTO_ASYNC = "PUT_CROP_PHOTO_ASYNC" as const;
export const RESET_STATUS = "RESET_STATUS" as const;

export type getMapPhotosType =
  | typeof GET_MAP_PHOTOS
  | typeof GET_MAP_PHOTOS_ASYNC;
export type getMapPhotosPayload = ApiPayload<GetMapPhotosResponseType> &
  AccessToken;
export interface GetMapPhotos {
  type: getMapPhotosType;
  payload: getMapPhotosPayload;
}

export type putCropPhotoType =
  | typeof PUT_CROP_PHOTO
  | typeof PUT_CROP_PHOTO_ASYNC;
export type putCropPhotoPayload = ApiPayload & PutCropPhotoRequestType;
export interface PutCropPhoto {
  type: putCropPhotoType;
  payload: putCropPhotoPayload;
}

interface ResetStatus {
  type: typeof RESET_STATUS;
}

export type photoActions = GetMapPhotos | PutCropPhoto | ResetStatus;

export const getMapPhotosAction = (payload: AccessToken): photoActions => ({
  payload,
  type: GET_MAP_PHOTOS
});
export const putCropPhotoAction = (
  payload: PutCropPhotoRequestType
): photoActions => ({
  payload,
  type: PUT_CROP_PHOTO
});
export const resetStatusAction = (): photoActions => ({
  type: RESET_STATUS
});
