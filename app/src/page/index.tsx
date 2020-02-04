import React, { FC } from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalStyle from "../styles/GlobalStyle";
import { Main, Auth, PhotoArea } from "container/index";
import CheckToken from "components/common/pageFilter/CheckToken";

const App: FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" render={() => <Auth />} exact />
        <CheckToken>
          <>
            <Route path="/photomap" render={() => <Main />} exact />
            <Route path="/photo/:area" render={() => <PhotoArea />} exact />
          </>
        </CheckToken>
      </Switch>
    </BrowserRouter>
  );
};

export default hot(App);
