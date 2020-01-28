import { LoginResponseType, AccessToken } from "data/middleware/api/apiTypes";

export const SET_TOKEN = "SET_TOKEN" as const;
export const LOGIN = "LOGIN" as const;
export const LOG_OUT = "LOG_OUT" as const;
export const RESET_STATUS = "RESET_STATUS" as const;

interface SetToken {
  type: typeof SET_TOKEN;
  payload: AccessToken;
}

interface Login {
  type: typeof LOGIN;
  payload: LoginResponseType;
}

interface ResetStatus {
  type: typeof RESET_STATUS;
}

interface Logout {
  type: typeof LOG_OUT;
}

export type AuthActions = SetToken | Login | ResetStatus | Logout;

export const setTokenAction = (payload: AccessToken): AuthActions => ({
  payload,
  type: SET_TOKEN
});

export const loginAction = (payload: LoginResponseType): AuthActions => ({
  payload,
  type: LOGIN
});

export const resetStatusAction = (): AuthActions => ({
  type: RESET_STATUS
});

export const logoutAction = (): AuthActions => ({
  type: LOG_OUT
});
