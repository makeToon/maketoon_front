import React, { FC } from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalStyle from "../styles/GlobalStyle";
import { Main, Auth } from "container/index";

const App: FC = () => {
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
