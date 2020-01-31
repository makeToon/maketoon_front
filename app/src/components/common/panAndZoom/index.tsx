import React, { FC, useMemo, useEffect, useCallback } from "react";

import * as S from './style';

interface OwnProps {
  width: string;
  height: string;
}

const PanAndZoom: FC<OwnProps> = ({ width, height, children }) => {
  const [offset, setOffset] = React.useState({ left: 0, top: 0 });
  const [lastMousePosition, setLastMousePosition] = React.useState(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [zoomLevel, setZoomLevel] = React.useState(-1);

  useEffect(() => {
    if (zoomLevel <= 0 && (offset.left <= -300 || offset.left >= 300 || offset.top <= -450 || offset.top >= 450)) {
      setOffset({ left: 0, top: 0 });
    }
  }, [zoomLevel]);

  const onMouseDown = useCallback(e => {
    setIsDragging(true);

    const { clientX, clientY } = e;

    setLastMousePosition({
      clientX,
      clientY
    });
  }, []);

  const onMouseUp = useCallback(() => {
    setIsDragging(false);
    setLastMousePosition(null);
  }, []);

  const onMouseMove = useCallback(e => {
    if (!isDragging) return;

    if (offset.left >= -660 && offset.left <= 630 && offset.top >= -850 && offset.top <= 930) {
      const newOffset = {
        left: offset.left + (e.clientX - lastMousePosition.clientX),
        top: offset.top + (e.clientY - lastMousePosition.clientY)
      };
  
      setOffset(newOffset);
  
      const { clientX, clientY } = e;
  
      setLastMousePosition({
        clientX,
        clientY
      });
    } else {
      if (!(offset.left >= -660 && offset.left <= 630)) {
        if (offset.left > 0) {
          setOffset(({ left, top }) => ({ left: 630, top }));
        } else {
          setOffset(({ left, top }) => ({ left: -660, top }));
        };
      } else {
        if (offset.top > 0) {
          setOffset(({ left, top }) => ({ left, top: 930 }));
        } else {
          setOffset(({ left, top }) => ({ left, top: -850 }));
        };
      }
    }
  }, [isDragging, offset, lastMousePosition]);

  const onWheel = useCallback(e => {
    if (e.deltaY < 0) {
      if (zoomLevel > 6) return;
      setZoomLevel(zoomLevel + 1);
    } else {
      if (zoomLevel < 0) return;
      setZoomLevel(zoomLevel - 1);
    }
  }, [zoomLevel]);

  const transform = useMemo(() => {
    const { left, top } = offset;
    const scale = Math.pow(1.2, zoomLevel);

    return {
      transform: `translate(${left}px, ${top}px) scale(${scale})`
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
      <div style={transform}>{children}</div>
    </S.Wrapper>
  );
};

export default PanAndZoom;