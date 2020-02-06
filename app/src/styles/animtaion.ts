import { keyframes } from "styled-components";

export const suddenMotion = keyframes`
  0% {
    transform: scale( 0.7 );
    opacity: 0;
  }

  100% {
    transform: scale( 1 );
    opacity: 1;
  }
`;

export const downToUp = keyframes`
  0% {
    transform: translateY(200px);
    opacity: 0;
  }
  80% {
    transform: translateY(-20px);
    opacity: 0.9;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;
