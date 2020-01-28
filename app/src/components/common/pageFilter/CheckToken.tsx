import { FC, useEffect, ReactElement, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { AppState } from "data/store";

interface OwnProsp {
  children: ReactElement;
}

const CheckToken: FC<OwnProsp> = ({ children }) => {
  const { push } = useHistory();
  const accessToken = useSelector<AppState, string>(
    state => state.auth.accessToken
  );

  useEffect(() => {
    if (accessToken === "") {
      push("/");
      alert("로그인 시 접근할 수 있습니다.");
    }
  },        [accessToken]);

  return children;
};

export default CheckToken;
