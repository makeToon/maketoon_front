import styled from "styled-components";

export const Wrapper = styled.div`
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

  > div {
    width: 800px;
    height: 500px;
    background: #f5f9fc;
  }
`;
