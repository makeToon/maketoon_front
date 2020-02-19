import { combineReducers } from "redux";

import auth from "./auth";
import photo from "./photo";

const appReducer = combineReducers({
  auth,
  photo
});

const rootReducer = (state, action) => {
  let resetState = state;

  if (action.type === "LOG_OUT") {
    resetState = undefined;
  }

  return appReducer(resetState, action);
};

export default rootReducer;
