import styled from "styled-components";

import { COLORS } from "src/styles/GlobalStyle";

interface WrapperProps {
  width: string;
  height: string;
}
export const Wrapper = styled.div<WrapperProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  overflow: hidden;
  border: 2px solid rgb(210, 210, 210);
  cursor: grab;
`;

export const AreaDisplayBox = styled.div`
  position: absolute;
  z-index: 1000;
  border: 1px solid rgb(193, 95, 255);
  border-radius: 4px;
  background: #fff;
  color: #000;
  width: 160px;
  height: 68px;
  font-size: 14px;
  top: -9999px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6px;
  box-sizing: border-box;
  cursor: default;

  > div {
    > button,
    a {
      all: unset;
      height: 32px;
      padding: 5px;
      box-sizing: border-box;
      cursor: pointer;
      text-align: center;
      border-radius: 2px;
      color: #000;
      transition: 0.2s;
    }

    > a {
      border: 1px solid ${COLORS.serve3};
      margin-right: 8px;

      &:hover {
        background: ${COLORS.serve2};
        color: #fff;
      }
    }
    > button {
      border: 1px solid red;

      &:hover {
        background: red;
        color: #fff;
      }
    }
  }

  &::after,
  &::before {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &::after {
    border-color: rgb(255, 255, 255, 0);
    border-top-color: rgb(255, 255, 255);
    border-width: 9px;
    margin-left: -9px;
  }
  &::before {
    border-color: rgba(193, 95, 255, 0);
    border-top-color: rgb(193, 95, 255);
    border-width: 10px;
    margin-left: -10px;
  }
`;
