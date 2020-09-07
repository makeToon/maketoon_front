export interface LoginResponseType {
  name: string;
  accessToken: string;
  pictureUrl: string;
}

export interface AccessToken {
  accessToken: string;
}

export interface PutCropPhotoRequestType {
  photo: File;
  accessToken: string;
  area: string;
  width: string;
  height: string;
  imageWidth: string;
  imageHeight: string;
}

export interface MapPhotos {
  area: string;
  width: string;
  height: string;
  imgUrl: string;
  imageWidth: string;
  imageHeight: string;
}
export type GetMapPhotosResponseType = MapPhotos[];

export interface ApiPayload<T = null> {
  data?: T;
  status?: number;
}
