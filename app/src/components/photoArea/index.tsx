import React, { FC, useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import * as S from "./style";
import Header from "components/header";

const PhotoArea: FC = () => {
  const { area } = useParams();
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      document.title = `makeToon - '${area}' 포토 설정`;
    }
  }, [didMountRef]);

  return (
    <S.Wraapper>
      <Header />
      <section>TEST</section>
    </S.Wraapper>
  );
};

export default PhotoArea;
