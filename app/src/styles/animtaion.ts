import { keyframes } from "styled-components";

export const suddenMotion = keyframes`
  0% {
    transform: scale( 0.7 );
    opacity: 0.2;
  }

  100% {
    transform: scale( 1 );
    opacity: 1;
  }
`;
