import styled from "styled-components";

import { suddenMotion } from "src/styles/animtaion";
import { COLORS } from "src/styles/GlobalStyle";

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;

  > div {
    animation: ${suddenMotion} 1s ease-in-out;
    width: 500px;
    height: 136px;

    > div {
      width: 510px;
      height: 70px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > img {
        width: 230px;
        padding-right: 15px;
        margin-right: 15px;
        border-right: 2px solid #9c00ff;
      }
    }

    > p {
      font-size: 22px;

      > span {
        color: ${COLORS.serve3};
      }
    }
  }
`;
