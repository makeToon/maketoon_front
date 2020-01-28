export interface LoginResponseType {
  name: string;
  accessToken: string;
  pictureUrl: string;
}

export interface AccessToken {
  accessToken: string;
}

export interface ApiPayload<T = null> {
  data?: T;
  status?: number;
}
