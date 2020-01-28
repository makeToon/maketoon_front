import { combineReducers } from "redux";

import auth from "./auth";

const appReducer = combineReducers({
  auth
});

const rootReducer = (state, action) => {
  let resetState = state;

  if (action.type === "LOG_OUT") {
    resetState = undefined;
  }

  return appReducer(resetState, action);
};

export default rootReducer;
