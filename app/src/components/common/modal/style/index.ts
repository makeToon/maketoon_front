import styled from "styled-components";

import { downToUp } from "src/styles/animtaion";

export const Wrapper = styled.div<{ width?: string; height?: string }>`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  transition: 0.2s;
  z-index: 1000;

  > div {
    animation: ${downToUp} 0.6s;
    width: ${({ width }) => (width ? width : "800px")};
    height: ${({ height }) => (height ? height : "500px")};
    background: #ffffff;
  }
`;
