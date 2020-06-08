import React, { FC, useState, useCallback, useRef } from "react";

import * as S from "./style";

interface OwnProps {
  title?: string;
  description: string[];
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  zIndex?: number;
}

const DescriptionArea: FC<OwnProps> = ({
  title,
  description,
  top,
  left,
  right,
  bottom,
  zIndex,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const isOpenHandler = useCallback(() => {
    if (isOpen) {
      ref.current.scrollTo({
        behavior: "smooth",
        left: 0,
        top: 0,
      });
    }

    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <S.DescriptionArea
      onClick={isOpenHandler}
      isOpen={isOpen}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      zIndex={zIndex}
      ref={ref}
    >
      {title && <h3>{title}</h3>}
      {description.map((d, i) => (
        <p key={i.toString()}>
          ◈
          {d.split("/").map((line, index) => {
            return (
              <span key={index.toString()}>
                {line}
                <br />
              </span>
            );
          })}
        </p>
      ))}
    </S.DescriptionArea>
  );
};

export default DescriptionArea;
