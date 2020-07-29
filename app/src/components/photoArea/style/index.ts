import styled from "styled-components";

import { COLORS } from "src/styles/GlobalStyle";

export const Wraapper = styled.div`
  > section {
    min-width: 514px;
    width: 100%;
    height: calc(100vh - 80px);
    background: #f9f9f9;
    position: relative;
    display: flex;
    justify-content: center;
    padding-top: 40px;
    box-sizing: border-box;

    > button {
      all: unset;
      position: absolute;
      top: 70px;
      left: 200px;
      width: 80px;
      height: 30px;
      border: 1px solid ${COLORS.serve3};
      border-radius: 4px;
      text-align: center;
      color: ${COLORS.serve3};
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        background: ${COLORS.serve3};
        color: #fff;
      }
    }
  }
`;

export const PhotoAreaDivision = styled.div`
  min-width: 1024px;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    position: relative;

    > label {
      all: unset;
      position: absolute;
      top: 0;
      right: 0;
      height: 24px;
      text-align: center;
      line-height: 24px;
      border: 1px solid ${COLORS.serve3};
      padding: 0 10px;
      color: ${COLORS.serve3};
      font-size: 12px;
      transition: 0.2s;
      cursor: pointer;

      &:hover {
        color: #fff;
        background: ${COLORS.serve3};
      }
    }

    > p {
      color: ${COLORS.serve3};
      margin-bottom: 10px;
    }
  }
`;

export const CroppedImageCover = styled.div`
  position: relative;
  margin: 0 100px;
  height: max-content;

  > img {
    border: 3px solid #7639a2;
    padding: 10px;
    max-width: 280px;
    max-height: 280px;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-45deg);
  }

  &::before {
    left: -55px;
  }

  &::after {
    right: -55px;
  }
`;

export const SubmitCover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: max-content;

  > img {
    width: 300px;
    border-radius: 150px;
    margin-bottom: 30px;
  }

  > button {
    all: unset;
    width: 120px;
    height: 40px;
    border: 3px solid ${COLORS.serve3};
    border-radius: 9px;
    text-align: center;
    color: ${COLORS.serve3};
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background: ${COLORS.serve3};
      color: #fff;
    }
  }
`;

export const CheckModal = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;

  h1 {
    font-weight: 100;
    text-align: center;

    span {
      color: ${COLORS.serve3};
    }
  }

  > div {
    margin-top: 40px;
    display: flex;
    justify-content: center;

    > div.loadingWrapper {
      display: flex;
      flex-direction: column;
      align-items: center;

      > p {
        color: ${COLORS.serve3};
      }
    }

    img.loading {
      width: 60px;
      height: 60px;
    }

    button {
      all: unset;
      width: 200px;
      height: 56px;
      box-sizing: border-box;
      cursor: pointer;
      text-align: center;
      border-radius: 2px;
      color: #000;
      -webkit-transition: 0.2s;
      transition: 0.2s;

      &.yes {
        border: 1px solid ${COLORS.serve3};
        margin-right: 30px;

        &:hover {
          background: ${COLORS.serve3};
          color: #fff;
        }
      }

      &.no {
        border: 1px solid red;

        &:hover {
          background: red;
          color: #fff;
        }
      }
    }
  }
`;
