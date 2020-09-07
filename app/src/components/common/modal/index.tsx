import React, { FC, useCallback, useRef, useEffect } from "react";

import * as S from "./style";

export interface OwnProps {
  isOpen: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  width?: string;
  height?: string;
}

/*
 * modal 컴포넌트 사용 주의 사항.
 * - Fragment 블럭을 root로 삼아야함.
 * - root 바로 아래 하나의 컴포넌트와 함께 modal 생성.
 */

const Modal: FC<OwnProps> = ({
  isOpen,
  setIsOpen = () => {},
  width,
  height,
  children,
}) => {
  const didMountRef = useRef(false);

  const setCloseHandler = useCallback(() => {
    setIsOpen(false);
  }, [isOpen]);
  const setClose = useCallback(
    (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        setCloseHandler();
      }
    },
    [isOpen]
  );

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      document.addEventListener("keyup", setClose);
    }
  }, [didMountRef]);

  useEffect(() => {
    if (!isOpen) {
      return () => {
        document.removeEventListener("keyup", setClose);
      };
    }
  }, [isOpen]);

  return (
    <S.Wrapper
      width={width}
      height={height}
      className="wrapper"
      onClick={setCloseHandler}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </S.Wrapper>
  );
};

export default Modal;
