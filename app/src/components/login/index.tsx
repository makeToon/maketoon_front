import React, { FC, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FacebookLogin from "react-facebook-login";

import { useAuthRedux } from "container/auth";
import { Logo } from "assets/index";
import * as S from "./style";

const Login: FC = () => {
  const { push } = useHistory();
  const {
    authStore: { accessToken },
    authReducer: { login }
  } = useAuthRedux();

  useEffect(() => {
    if (accessToken !== "") {
      push("/coimcs");
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
          기존의 만화를 <span>나만의 만화</span>로 재 탄생 시키세요!
        </p>
        <p>
          <span>간편 로그인</span>으로 진행하실 수 있습니다!
        </p>
      </div>
    </S.Wrapper>
  );
};

export default Login;
