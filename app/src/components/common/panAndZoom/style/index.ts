import styled from "styled-components";

import { suddenMotion } from "src/styles/animtaion";

interface WrapperProps {
  width: string;
  height: string;
}
export const Wrapper = styled.div<WrapperProps>`
  animation: ${suddenMotion} 0.8s;

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
  height: 28px;
  top: -9999px;
  text-align: center;
  line-height: 28px;

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
