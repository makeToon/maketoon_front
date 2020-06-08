import styled from "styled-components";

import change_map from "assets/change_map.png";
import RealMaps from "assets/realMap.jpg";
import { COLORS } from "src/styles/GlobalStyle";
import { downToUp, suddenMotion } from "src/styles/animtaion";

export const Wrapper = styled.div`
  > section {
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
  animation: ${suddenMotion} 0.8s;
  position: relative;
  height: fit-content;
`;

interface DescriptionAreaProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  zIndex?: number;
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
  background: ${COLORS.main1};
  border: 1px solid ${COLORS.serve1};
  z-index: ${({ zIndex }) => zIndex};
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

export const MapNames = styled.img`
  position: absolute;
  width: 528px;
  z-index: 9;
  pointer-events: none;
  user-select: none;
`;
