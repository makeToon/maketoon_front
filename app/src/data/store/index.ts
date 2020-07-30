import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxSaga from "redux-saga";
import { createBrowserHistory } from "history";

import reducer from "../reducers";
import sagas from "middleware/sagas";

const customHistory = createBrowserHistory();
const sagaMiddleWare = reduxSaga({
  context: {
    history: customHistory,
  },
});

// redux mapState type
export type AppState = ReturnType<typeof reducer>;

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(sagas);
