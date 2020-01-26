import { fork, put, call, takeLatest, all } from "redux-saga/effects";

import { SAGA, SAGA_ASYNC, Saga } from "actions/SAGA";
import { SAGAAPI } from "middleware/api";
import { SAGATYPE } from "middleware/api/apiType";

function* Saga(action: Saga) {
  try {
    const response: [SAGATYPE, number] = yield call(SAGAAPI, action.payload);
    yield put({
      type: SAGA_ASYNC,
      payload: {
        data: response[0],
        status: response[1]
      }
    });
  } catch (error) {
    yield put({
      type: SAGA_ASYNC,
      payload: { status: error.response.status }
    });
  }
}

function* watchSaga() {
  yield takeLatest(SAGA, Saga);
}

export default function* sagaSaga() {
  yield all([fork(watchSaga)]);
}
