import styled from "styled-components";

import { COLORS } from "src/styles/GlobalStyle";
import { downToUp } from "src/styles/animtaion";

export const Wrapper = styled.div`
  > div {
    min-width: 514px;
    width: 100%;
    height: calc(100vh - 80px);
    background: #f9f9f9;
    display: flex;
    justify-content: center;
    padding-top: 40px;
    box-sizing: border-box;
  }
`;

export const MapContainer = styled.div`
  position: relative;
`;

interface DescriptionAreaProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  isOpen: boolean;
}
export const DescriptionArea = styled.div<DescriptionAreaProps>`
  animation: ${downToUp} 0.9s ease-in-out;
  width: 200px;
  height: ${({ isOpen }) => (isOpen ? "160px" : "40px")};
  cursor: pointer;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid ${COLORS.serve1};
  color: ${COLORS.serve3};
  font-weight: bold;
  font-size: 16px;
  overflow-y: ${({ isOpen }) => (isOpen ? "scroll" : "hidden")};
  position: absolute;
  transition: 0.3s;
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};

  > h3 {
    padding-bottom: 6px;
    margin-bottom: 6px;
    border-bottom: 1px solid ${COLORS.serve1};
  }

  > p {
    margin-bottom: 10px;

    span {
      margin-left: 10px;
    }
  }
`;
