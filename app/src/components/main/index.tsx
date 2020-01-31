import React, { FC, useRef, useEffect } from "react";

import * as S from "./style";
import Header from "components/header";
import Icon from "assets/map/index.tsx";
import PanAndZoom from "components/common/panAndZoom";
import { COLORS } from "src/styles/GlobalStyle";
import Descriptions from "./Descriptions";

const Main: FC = () => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      document.title = "makeToon - 나만의 포토도를 만드세요!";
    }
  }, [didMountRef]);

  return (
    <S.Wrapper>
      <Header />
      <div>
        <S.MapContainer>
          <Descriptions />
          <PanAndZoom width="510px" height="720px">
            <Icon fillColor={COLORS.fill} strokeColor={COLORS.stroke} />
          </PanAndZoom>
        </S.MapContainer>
      </div>
    </S.Wrapper>
  );
};

export default Main;
