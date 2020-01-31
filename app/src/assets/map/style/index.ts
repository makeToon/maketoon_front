import styled from 'styled-components';

import { COLORS } from 'src/styles/GlobalStyle';

export const Path = styled.path`
  cursor: pointer;

  &:hover {
    fill: ${COLORS.serve2};
  }
`;

export const G = styled.g`
  cursor: pointer;

  &:hover {
    fill: ${COLORS.serve2};
  }
`;