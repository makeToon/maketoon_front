import React, { FC } from "react";
import { Link } from "react-router-dom";

import { useAuthRedux } from "container/auth";
import { Logo } from "assets/index";
import * as S from "./style";

interface OwnProps {
  photoArea?: string;
}

const Header: FC<OwnProps> = ({ photoArea }) => {
  const {
    authStore: { name, pictureUrl },
  } = useAuthRedux();

  return (
    <S.Wrapper>
      <div>
        <S.LogoLabel>
          <Link to="/photomap">
            {photoArea ? <p>{photoArea} ↩︎</p> : <img src={Logo} alt="로고" />}
          </Link>
        </S.LogoLabel>
        <S.UserLabel>
          <img src={pictureUrl} alt="유저 프로필" />
          <span>{name}</span>
        </S.UserLabel>
      </div>
    </S.Wrapper>
  );
};

export default Header;
