import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setTokenAction,
  loginAction,
  resetStatusAction,
  logoutAction
} from "actions/auth";
import { AppState } from "data/store";
import Login from "components/login";
import { AccessToken, LoginResponseType } from "middleware/api/apiTypes";

interface StoreProps {
  accessToken: string;
  name: string;
  pictureUrl: string;
}

export const useAuthRedux = () => {
  const dispatch = useDispatch();
  const authStore = useSelector<AppState, StoreProps>(state => ({
    accessToken: state.auth.accessToken,
    name: state.auth.name,
    pictureUrl: state.auth.pictureUrl
  }));

  const setToken = useCallback(
    (payload: AccessToken) => {
      dispatch(setTokenAction(payload));
    },
    [dispatch]
  );

  const login = useCallback(
    (payload: LoginResponseType) => {
      dispatch(loginAction(payload));
    },
    [dispatch]
  );

  const resetStatus = useCallback(() => {
    dispatch(resetStatusAction());
  }, [dispatch]);

  const logout = useCallback(() => {
    dispatch(logoutAction());
  }, [dispatch]);

  const authReducer = { setToken, login, resetStatus, logout };

  return { authStore, authReducer };
};

export default Login;
