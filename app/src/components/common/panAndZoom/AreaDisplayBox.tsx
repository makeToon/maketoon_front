import React, { FC, useMemo } from "react";
import { Link } from "react-router-dom";

import * as S from "./style";

interface OwnProps {
  lastMousePosition: null | { clientX: number; clientY: number };
  displayText: {
    area: string;
    width: number;
    height: number;
  };
}

const AreaDisplayBox: FC<OwnProps> = ({ lastMousePosition, displayText }) => {
  const AreaDisplayBoxPosition = useMemo(() => {
    if (lastMousePosition === null) {
      return;
    }

    const wrapperPosition = { x: document.body.clientWidth / 2 - 257, y: 120 };
    const widthSizeHalf = 80;
    const heightSize = 78;

    return {
      left: `${
        lastMousePosition.clientX - wrapperPosition.x - widthSizeHalf
      }px`,
      top: `${lastMousePosition.clientY - wrapperPosition.y - heightSize}px`,
    };
  }, [lastMousePosition]);

  return (
    <S.AreaDisplayBox style={AreaDisplayBoxPosition}>
      {displayText.area}
      <div>
        <Link
          onMouseDown={(e) => e.stopPropagation()}
          onMouseUp={(e) => e.stopPropagation()}
          onMouseMove={(e) => e.stopPropagation()}
          to={`/photo/${displayText.area}-${displayText.width}-${displayText.height}`}
        >
          사진 추가
        </Link>
        <button>취소</button>
      </div>
    </S.AreaDisplayBox>
  );
};

export default AreaDisplayBox;
