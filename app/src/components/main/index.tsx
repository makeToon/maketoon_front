import React, { FC, useRef, useState, useEffect } from "react";

import * as S from "./style";
import { COLORS } from "src/styles/GlobalStyle";
import Header from "components/header";
import PanAndZoom from "components/common/panAndZoom";
import Descriptions from "./Descriptions";
import Map from "assets/map/index.tsx";
import { MapName } from "assets/index.ts";

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
            <S.MapNames src={MapName} alt="MapNames" />
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
