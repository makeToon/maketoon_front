import { fork, takeLatest, all } from "redux-saga/effects";

import {
  GET_MAP_PHOTOS,
  GET_MAP_PHOTOS_ASYNC,
  getMapPhotosType,
  getMapPhotosPayload,
  GetMapPhotos,
  PUT_CROP_PHOTO,
  PUT_CROP_PHOTO_ASYNC,
  putCropPhotoType,
  putCropPhotoPayload,
  PutCropPhoto
} from "actions/photo";
import { getMapPhotosApi, putCropPhotoApi } from "middleware/api";
import { sagaEntity } from "middleware/sagas";

function* getMapPhotos(action: GetMapPhotos) {
  yield sagaEntity<getMapPhotosType, getMapPhotosPayload>({
    action,
    api: getMapPhotosApi,
    type: GET_MAP_PHOTOS_ASYNC
  });
}

function* putCropPhoto(action: PutCropPhoto) {
  yield sagaEntity<putCropPhotoType, putCropPhotoPayload>({
    action,
    api: putCropPhotoApi,
    type: PUT_CROP_PHOTO_ASYNC
  });
}

function* watchGetMapPhotos() {
  yield takeLatest(GET_MAP_PHOTOS, getMapPhotos);
}

function* watchPutCropPhoto() {
  yield takeLatest(PUT_CROP_PHOTO, putCropPhoto);
}

export default function* photoSaga() {
  yield all([fork(watchGetMapPhotos), fork(watchPutCropPhoto)]);
}
