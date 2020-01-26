export interface SAGATYPE {
  data: string;
}

export interface ApiPayload<T = null> {
  data?: T;
  status?: number;
}
