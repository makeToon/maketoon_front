import React, { FC, useState, useMemo, useEffect, useCallback } from "react";

import * as S from "./style";
import AreaDisplayBox from "./AreaDisplayBox";

interface OwnProps {
  width: string;
  height: string;
  displayText: {
    area: string;
    width: number;
    height: number;
  };
  setDisplayName: (data: {
    area: string;
    width: number;
    height: number;
  }) => void;
}

let milliseconds = 0;

const PanAndZoom: FC<OwnProps> = ({
  width,
  height,
  displayText,
  setDisplayName,
  children,
}) => {
  const [offset, setOffset] = useState({ left: 0, top: 0 });
  const [lastMousePosition, setLastMousePosition] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(-1);
  const [isTimeout, setIsTimeout] = useState(false);

  useEffect(() => {
    if (
      zoomLevel <= 0 &&
      (offset.left <= -300 ||
        offset.left >= 300 ||
        offset.top <= -450 ||
        offset.top >= 450)
    ) {
      setOffset({ left: 0, top: 0 });
    }
  }, [zoomLevel]);

  const onMouseDown = useCallback((e) => {
    setIsDragging(true);
    setDisplayName({ area: "", width: 0, height: 0 });

    if (milliseconds === 0) {
      setIsTimeout(false);
    }

    milliseconds = +new Date();

    const { clientX, clientY } = e;

    setLastMousePosition({
      clientX,
      clientY,
    });
  }, []);

  const onMouseUp = useCallback(() => {
    setIsDragging(false);

    if (+new Date() - milliseconds >= 200) {
      setIsTimeout(false);
    } else {
      setIsTimeout(true);
    }

    milliseconds = 0;
  }, [milliseconds]);

  const onMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;

      if (
        offset.left >= -660 &&
        offset.left <= 630 &&
        offset.top >= -850 &&
        offset.top <= 930
      ) {
        const newOffset = {
          left: offset.left + (e.clientX - lastMousePosition.clientX),
          top: offset.top + (e.clientY - lastMousePosition.clientY),
        };

        setOffset(newOffset);

        const { clientX, clientY } = e;

        setLastMousePosition({
          clientX,
          clientY,
        });
      } else {
        if (!(offset.left >= -660 && offset.left <= 630)) {
          if (offset.left > 0) {
            setOffset(({ top }) => ({ left: 630, top }));
          } else {
            setOffset(({ top }) => ({ left: -660, top }));
          }
        } else {
          if (offset.top > 0) {
            setOffset(({ left }) => ({ left, top: 930 }));
          } else {
            setOffset(({ left }) => ({ left, top: -850 }));
          }
        }
      }
    },
    [isDragging, offset, lastMousePosition]
  );

  const onWheel = useCallback(
    (e) => {
      setLastMousePosition(null);

      if (e.deltaY < 0) {
        if (zoomLevel > 6) return;
        setZoomLevel(zoomLevel + 1);
      } else {
        if (zoomLevel < 0) return;
        setZoomLevel(zoomLevel - 1);
      }
    },
    [zoomLevel]
  );

  const transform = useMemo(() => {
    const { left, top } = offset;
    const scale = Math.pow(1.2, zoomLevel);

    return {
      transform: `translate(${left}px, ${top}px) scale(${scale})`,
    };
  }, [offset, zoomLevel]);

  return (
    <S.Wrapper
      width={width}
      height={height}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onWheel={onWheel}
    >
      {isTimeout && displayText.area && (
        <AreaDisplayBox
          lastMousePosition={lastMousePosition}
          displayText={displayText}
        />
      )}
      <div style={transform}>{children}</div>
    </S.Wrapper>
  );
};

export default PanAndZoom;
