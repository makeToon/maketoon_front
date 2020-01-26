import React, { FC, useState, useEffect, useRef } from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import GlobalStyle from "../styles/GlobalStyle";
import { Main } from "container/index";

const App: FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" render={() => <Main />} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default hot(App);
