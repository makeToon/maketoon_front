import { put, call, all, getContext } from "redux-saga/effects";

import photoSaga from "./photoSaga";
import { AxiosError } from "axios";

interface SagaEntityParams<ActionT, PayloadT> {
  action: {
    type: ActionT;
    payload?: PayloadT;
  };
  api: (payload?: any) => Promise<any[]>;
  type: string;
}

export function* sagaEntity<ActionT, PayloadT = object>({
  action,
  api,
  type,
}: SagaEntityParams<ActionT, PayloadT>) {
  try {
    const response = yield call(api, action.payload);

    yield put({ type, payload: { data: response[0], status: response[1] } });
  } catch (_err) {
    const error: AxiosError = _err;

    if (error.response.status === 401) {
      alert("다시 로그인 후 이용해 주세요.");
      const history = yield getContext("history");
      yield put({ type: "LOG_OUT" });
      history.push("/");
    } else {
      yield put({
        payload: { status: error.response.status },
        type,
      });
    }
  }
}

export default function* rootSaga() {
  yield all([call(photoSaga)]);
}
