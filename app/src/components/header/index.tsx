import React, { FC } from "react";
import { Link } from "react-router-dom";

import { useAuthRedux } from "container/auth";
import { usePhotoRedux } from "container/photo";
import { Logo, Loading } from "assets/index";
import * as S from "./style";

interface OwnProps {
  photoArea?: string;
}

const Header: FC<OwnProps> = ({ photoArea }) => {
  const {
    authStore: { name, pictureUrl },
  } = useAuthRedux();
  const {
    photoStore: { getPhotoLoading },
  } = usePhotoRedux();

  return (
    <S.Wrapper>
      <div>
        <S.LogoLabel>
          {getPhotoLoading ? (
            <S.LoadingMessage>
              <img src={Loading} alt="로딩" />
              <p>지도를 불러오는 중 입니다...</p>
            </S.LoadingMessage>
          ) : (
            <Link to="/photomap">
              {photoArea ? (
                <p>{photoArea} ↩︎</p>
              ) : (
                <img src={Logo} alt="로고" />
              )}
            </Link>
          )}
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
