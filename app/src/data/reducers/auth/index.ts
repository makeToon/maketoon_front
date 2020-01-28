import {
  LOGIN,
  RESET_STATUS,
  LOG_OUT,
  SET_TOKEN,
  AuthActions
} from "data/actions/auth";
import { setTokenToStorage, clearStorage } from "utils/stroage";

interface InitialState {
  name: string;
  pictureUrl: string;
  accessToken: string;
  loginStatus: number;
}

const initialState: InitialState = {
  name: "",
  pictureUrl: "",
  accessToken: "",
  loginStatus: 0
};

const authReducer = (
  state = initialState,
  action: AuthActions
): InitialState => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        accessToken: action.payload.accessToken
      };
    case LOGIN:
      setTokenToStorage("accessToken", action.payload.accessToken);
      return {
        ...state,
        accessToken: action.payload.accessToken,
        pictureUrl: action.payload.pictureUrl,
        name: action.payload.name
      };
    case RESET_STATUS:
      return {
        ...state,
        loginStatus: 0
      };
    case LOG_OUT:
      clearStorage();
      return state;
    default:
      return state;
  }
};

export default authReducer;
