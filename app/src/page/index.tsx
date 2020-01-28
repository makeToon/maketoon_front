import React, { FC, useEffect, useRef } from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { useAuthRedux } from "container/auth";
import { getTokenToStorage } from "utils/stroage";
import GlobalStyle from "../styles/GlobalStyle";
import { Main, Auth } from "container/index";

const App: FC = () => {
  const didMountRef = useRef(false);
  const {
    authReducer: { setToken }
  } = useAuthRedux();

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      setToken({
        accessToken: getTokenToStorage("accessToken") || ""
      });
    }
  });

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" render={() => <Auth />} exact />
        <Route path="/comics" render={() => <Main />} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default hot(App);
