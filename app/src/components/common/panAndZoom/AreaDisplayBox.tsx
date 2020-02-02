import React, { FC, useMemo } from "react";

import * as S from "./style";

interface OwnProps {
  lastMousePosition: null | { clientX: number; clientY: number };
  displayText: string;
}

const AreaDisplayBox: FC<OwnProps> = ({ lastMousePosition, displayText }) => {
  const AreaDisplayBoxPosition = useMemo(() => {
    if (lastMousePosition === null) {
      return;
    }

    const wrapperPosition = { x: document.body.clientWidth / 2 - 257, y: 120 };
    const widthSizeHalf = 80;
    const heightSize = 38;

    return {
      left: `${lastMousePosition.clientX -
        wrapperPosition.x -
        widthSizeHalf}px`,
      top: `${lastMousePosition.clientY - wrapperPosition.y - heightSize}px`
    };
  }, [lastMousePosition]);

  return (
    <S.AreaDisplayBox style={AreaDisplayBoxPosition}>
      {displayText}
    </S.AreaDisplayBox>
  );
};

export default AreaDisplayBox;
