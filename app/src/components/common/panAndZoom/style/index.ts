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
