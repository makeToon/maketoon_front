import React, { FC, useRef, useState, useEffect } from "react";

import * as S from "./style";
import Header from "components/header";
import Map from "assets/map/index.tsx";
import PanAndZoom from "components/common/panAndZoom";
import { COLORS } from "src/styles/GlobalStyle";
import Descriptions from "./Descriptions";

const Main: FC = () => {
  const didMountRef = useRef(false);
  const [area, setArea] = useState("");

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      document.title = "makeToon - 나만의 포토도를 만드세요!";
    }
  }, [didMountRef]);

  return (
    <S.Wrapper>
      <Header />
      <section>
        <S.MapContainer>
          <Descriptions />
          <PanAndZoom displayText={area} width="510px" height="720px">
            <Map
              setArea={setArea}
              fillColor={COLORS.fill}
              strokeColor={COLORS.stroke}
            />
          </PanAndZoom>
        </S.MapContainer>
      </section>
    </S.Wrapper>
  );
};

export default Main;
