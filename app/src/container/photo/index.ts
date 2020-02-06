import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  putCropPhotoAction,
  getMapPhotosAction,
  resetStatusAction
} from "actions/photo";
import { AppState } from "data/store";
import {
  PutCropPhotoRequestType,
  MapPhotos,
  AccessToken
} from "middleware/api/apiTypes";
import PhotoArea from "components/photoArea";

interface StoreProps {
  accessToken: string;
  putCropPhotoStatus: number;
  getMapPhotoStatus: number;
  mapPhotos: MapPhotos[];
}

export const usePhotoRedux = () => {
  const dispatch = useDispatch();
  const photoStore = useSelector<AppState, StoreProps>(state => ({
    accessToken: state.auth.accessToken,
    mapPhotos: state.photo.mapPhotos,
    putCropPhotoStatus: state.photo.putCropPhotoStatus,
    getMapPhotoStatus: state.photo.getMapPhotosStatus
  }));

  const putCropPhoto = useCallback(
    (payload: PutCropPhotoRequestType) => {
      dispatch(putCropPhotoAction(payload));
    },
    [dispatch]
  );

  const getMapPhotos = useCallback(
    (payload: AccessToken) => {
      dispatch(getMapPhotosAction(payload));
    },
    [dispatch]
  );

  const resetStatus = useCallback(() => {
    dispatch(resetStatusAction());
  }, [dispatch]);

  const photoReducer = { putCropPhoto, getMapPhotos, resetStatus };

  return { photoStore, photoReducer };
};

export default PhotoArea;
