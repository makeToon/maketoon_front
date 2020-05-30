import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  height: 80px;

  > div {
    width: 100%;
    height: 80px;
    padding: 0 200px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LogoLabel = styled.div`
  > a {
    img {
      width: 180px;
    }

    p {
      font-size: 36px;
      font-weight: bold;
    }
  }
`;

export const UserLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 42px;
    height: 42px;
  }

  > span {
    display: inline-block;
    font-size: 20px;
    font-weight: 500;
    margin-left: 10px;
  }
`;
