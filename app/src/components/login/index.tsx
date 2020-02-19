import React, { FC, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import FacebookLogin from "react-facebook-login";

import { useAuthRedux } from "container/auth";
import { Logo } from "assets/index";
import * as S from "./style";

const Login: FC = () => {
  const didMountRef = useRef(false);
  const { push } = useHistory();
  const {
    authStore: { accessToken },
    authReducer: { login }
  } = useAuthRedux();

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      document.title = "makeToon - 로그인";
    }
  }, [didMountRef]);

  useEffect(() => {
    if (accessToken !== "") {
      push("/photomap");
    }
  }, [accessToken]);

  return (
    <S.Wrapper>
      <div>
        <div>
          <img src={Logo} alt="MakeToonLogo" />
          <FacebookLogin
            appId={process.env.FACEBOOK_APP_KEY}
            fields="name,email,picture"
            size="small"
            callback={({
              name,
              accessToken,
              picture: {
                data: { url }
              }
            }) => login({ name, accessToken, pictureUrl: url })}
          />
        </div>
        <p>
          나만의 <span>포토도</span>를 꾸며보세요!
        </p>
        <p>
          <span>간편 로그인</span>으로 진행하실 수 있습니다!
        </p>
      </div>
    </S.Wrapper>
  );
};

export default Login;
