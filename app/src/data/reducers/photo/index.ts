import {
  GET_MAP_PHOTOS_ASYNC,
  PUT_CROP_PHOTO_ASYNC,
  RESET_STATUS,
  photoActions
} from "data/actions/photo";
import { MapPhotos } from "middleware/api/apiTypes";

interface InitialState {
  mapPhotos: MapPhotos[];
  getMapPhotosStatus: number;
  putCropPhotoStatus: number;
}

const initialState: InitialState = {
  getMapPhotosStatus: 0,
  mapPhotos: [],
  putCropPhotoStatus: 0
};

const photoReducer = (
  state = initialState,
  action: photoActions
): InitialState => {
  switch (action.type) {
    case GET_MAP_PHOTOS_ASYNC:
      return {
        ...state,
        getMapPhotosStatus: action.payload.status,
        mapPhotos: action.payload.data
      };
    case PUT_CROP_PHOTO_ASYNC:
      return {
        ...state,
        putCropPhotoStatus: action.payload.status
      };
    case RESET_STATUS:
      return {
        ...state,
        getMapPhotosStatus: 0,
        putCropPhotoStatus: 0
      };
    default:
      return state;
  }
};

export default photoReducer;
