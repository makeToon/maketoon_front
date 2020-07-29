import React, { FC, useCallback, useEffect, useRef } from "react";

import * as S from "./style";
import { usePhotoRedux } from "container/photo";

interface OwnProps {
  fillColor: string;
  strokeColor: string;
  width?: number;
  height?: number;
  setArea: (data: { area: string; width: number; height: number }) => void;
}

const SvgComponent: FC<OwnProps> = ({
  fillColor,
  strokeColor,
  setArea,
  width = 509,
  height = 716.105,
}) => {
  const {
    photoStore: { mapPhotos },
  } = usePhotoRedux();

  const setAreaHandler = useCallback(
    (width: number, height: number, area: string) => {
      setArea({ area, width, height });
    },
    []
  );

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <defs>
        {mapPhotos?.map((d, i) => (
          <pattern
            key={d.area}
            id={`imgpattern_${d.area}`}
            x="0"
            y="0"
            width="1"
            height="1"
          >
            {d.width > d.height ? (
              <image y={3} width={d.width} href={d.imgUrl} />
            ) : (
              <image y={3} height={d.height} href={d.imgUrl} />
            )}
          </pattern>
        ))}
      </defs>
      <g fill={fillColor} stroke={strokeColor}>
        <S.Path
          onClick={(e) => {
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "서울특별시"
            );
          }}
          fill={
            document.getElementById("imgpattern_서울특별시") !== null
              ? "url(#imgpattern_서울특별시)"
              : null
          }
          d="M2183.838-891.459l3.923 2.53 2.084-1.1h2.82v6.375l3.678 5.884v4.045l-2.207 1.839 1.594 2.574 3.555-1.961h3.678l1.226 3.923-3.555 3.065v2.084l.736 3.187-3.923 4.658h-3.31l-4.291 6.375-2.574-.858-1.348-4.291-5.762-.613-2.942 4.168h-2.7l-2.7-2.452-3.065 2.452-3.432-8.7-2.207 1.471-3.555 1.226-1.226-3.432 1.839-2.084-1.839-5.026-6.129-2.207 5.026-7.478 4.291 3.923 3.31-.613 2.942-2.207 2.084-1.1v-6.13h2.574l2.7-3.555.981 2.82 1.326 1.061 1.126.9 1.594-1.226v-6.007z"
          transform="translate(-2025.128 1036.605)"
        />
      </g>
      <g fill={fillColor} stroke={strokeColor}>
        <S.G
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "강화군"
            )
          }
          fill={
            document.getElementById("imgpattern_강화군") !== null
              ? "url(#imgpattern_강화군)"
              : null
          }
        >
          <S.Path d="M96.083 132.105l-10.167-7.167-2.167 1.833h-2.833l-4.167 4.167.833 7.333-2 .667.5 4.833 5.833 5.333.167 4.333-4 2.833 2.333 4.5 10.333 1.333 5.333.833 5.5-3.5-.833-2.5-2.833-3 1.333-3-1.5-3.5.833-3-1.667-3.833 1.333-3.167-2.164-5.331z" />
          <S.Path d="M89.25 169.939l-3.167 3 3.333 1.333 1.167-2.833-1.333-1.5z" />
          <S.Path d="M72.917 136.939l-4.167 1-1.167 5.333-1.667.333 7 5.667.167 4.5 4.333-.5 2-4.667-5.333-5.167-1.166-6.499z" />
          <S.Path d="M74.417 129.939l-4.333 5.167-3.833-.5-5 2.667-2.5-4 1.333-2.833.333-2.333 3.333-1.5 4.333.833 5 1.167 1.334 1.332z" />
        </S.G>
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "인천광역시"
            )
          }
          fill={
            document.getElementById("imgpattern_인천광역시") !== null
              ? "url(#imgpattern_인천광역시)"
              : null
          }
          d="M2577.08-958.5l9.807 7.2 1.471.981H2594l.736 1.1-3.187 3.678-.735 5.884-1.961 1.349v3.923l4.536 3.8-6.5 12.382-5.271-.613-6.865-4.9v-1.716l-2.329-.858v-2.574l-1.839 1.594-.613-1.594v-1.716l1.839-1.839-1.226-1.961 4.168-2.82-1.716-.49v-1.961l4.045-1.716-5.271-.613-1.226-4.413-3.8-3.923 7.968-3.678z"
          transform="translate(-2025.128 1036.605) translate(-439 77)"
        />
        <S.G
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "인천 중구"
            )
          }
          fill={
            document.getElementById("imgpattern_인천") !== null
              ? "url(#imgpattern_인천)"
              : null
          }
        >
          <S.Path
            d="M2553.052-943.573l.981 1.471-.981 2.942-3.433-1.716z"
            transform="translate(-2025.128 1036.605) translate(-439 77)"
          />
          <S.Path
            d="M2559.427-942.592l6.13 3.187 2.207 4.045-8.336 3.065-2.084 3.065-5.026 2.7-4.291-5.762 2.7-1.839-.736-2.942h7.355V-941z"
            transform="translate(-2025.128 1036.605) translate(-439 77)"
          />
          <S.Path
            d="M2550.723-922.61l1.716-.981 1.839.981-.981 2.207z"
            transform="translate(-2025.128 1036.605) translate(-439 77)"
          />
        </S.G>
        <S.G
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "옹진군"
            )
          }
          fill={
            document.getElementById("imgpattern_옹진군") !== null
              ? "url(#imgpattern_옹진군)"
              : null
          }
        >
          <S.Path d="M90.083 210.772l-3.5 2.167.167 5.833 2.5 1 2.833-2.333 1.167-1.5 2.667-.5-1.5-2.833-4.334-1.834z" />
          <S.Path d="M45.25 212.606l-1.167 3.5-.833 4.667 3 .667 2 1.5 2.333-.667 2.167-2.5-3.333-3.167-2.5-1.333-.333-2.333-1.334-.334z" />
          <S.Path d="M73.583 214.439l-5.333-2 .167 2.333 5.167 3.333 2.667-2.333-2.668-1.333z" />
          <S.Path d="M20.5 171.355l4-1.75-2.25-2.5-4.5-.25-3 1.25-3.75-.25-.75 1 2 2.75 1.25 2.5 3.5.25 3.25 1-.25-2.5.5-1.5z" />
          <S.Path d="M21.25 186.105l-1.75-1-2.5 2.25-1.75 1 2.25 2.5 3-.5.75-2.25v-2z" />
          <S.Path d="M44.25 188.855l-3.25-.25-.25 1.75 3 1.5v-1.5l.5-1.5z" />
        </S.G>
      </g>
      <g fill={fillColor} stroke={strokeColor}>
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "김포시"
            )
          }
          fill={
            document.getElementById("imgpattern_김포시") !== null
              ? "url(#imgpattern_김포시)"
              : null
          }
          d="M131.417 159.105l-16.167-11 2.833-5.5-1.833-3.833-.667-6.333-3.167.333-3.333 4.333-6.333-.5-1.833-2.167-3.667.167 1 2.833.333 2.333-.5.833 1 5.333v2.667l.833 3.333-.167 3 2.833 2.833v2.667l.833 2.5 7.667-3.333 2.5-4.5 10.833 8 6.667.667 1.667-3.167-1.332-1.499z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "고양시"
            )
          }
          fill={
            document.getElementById("imgpattern_고양시") !== null
              ? "url(#imgpattern_고양시)"
              : null
          }
          d="M117.083 145.772l2.5.333 4.167-1 6.167-.5 2.333-4.333 2.333.833 4.5-.833 3.5 2 3-3.667 2.5.333-.833 2.5v5.667l-.833 2.5 3.667-.5 2-2.5 4 2.333-.833 5.333-.833 2-2.333-2-1.667-2.833-2.667 3-2 .667-.333 6.5-2.5.667-2 2-3.5-.167-4.5-3-1.5-2-16.167-11 1.832-2.333z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "파주시"
            )
          }
          fill={
            document.getElementById("imgpattern_파주시") !== null
              ? "url(#imgpattern_파주시)"
              : null
          }
          d="M116.583 124.439l3.167-1.667 7.333-.667-6-9.833-5.5-.333.167-6.5 5.833 3.667 2.833-3-.167-1.833 2.5-3.5 1.667 2.333 1.167 5.667-.667 3 2.333.167.833 3.333 2.5-.833 1.667-10.333 2.167-3.167 5.167 2.5.5-5 3.5 2.167 3.833-.167 2.667-2.833 4.5 2.833-5.333 7.667-2.667 3.333-1 9.667-.833 2.667-2.333-.333-.667 3.167.5 4.5 2.5 1.667-.167 6-3-.167-3 3.667-3.5-2-4.5.833-2.333-.833-2.333 4.333-6.167.5-4.167 1-3-.333 1.5-3.167-1.833-3.833-.667-6.333 1-8.003z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "양주시"
            )
          }
          fill={
            document.getElementById("imgpattern_양주시") !== null
              ? "url(#imgpattern_양주시)"
              : null
          }
          d="M158.083 109.272l-4.333-1.333-3.167 3.5-1 9.667-.833 2.667-2.333-.333-.667 3.167.5 4.5 2.5 1.667-.167 6-1.333 2.667v5.667l-.833 2.5 3.667-.5 2-2.5 4 2.333 3.333-3.833-1.5-4.833-1.833-3.333 3-2.333 3.833.833 4-1.5 3.667-1.667 1.167-6-1.5-6-7.833-1.667-1.333-3.667-3.833-1.833.831-3.836z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "의정부시"
            )
          }
          fill={
            document.getElementById("imgpattern_의정부시") !== null
              ? "url(#imgpattern_의정부시)"
              : null
          }
          d="M174.583 136.939l-2 2.833-.5 2-4.167 5.167-3-.333-1.667 1.333-3.833-2.833-1.5-4.833-1.833-3.333 3-2.333 3.833.833 7.667-3.167 2.667 2.167 1.333 2.499z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "동두천시"
            )
          }
          fill={
            document.getElementById("imgpattern_동두천시") !== null
              ? "url(#imgpattern_동두천시)"
              : null
          }
          d="M163.917 101.939l-6.167 7.833-.5 3.333 3.667 2.333 1.5 3.167 7.833 1.667 2.333-2.167h2.167l.667-3.167-1.833-3.333-5.167-5v-3.833l-4.5-.833z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "연천군"
            )
          }
          fill={
            document.getElementById("imgpattern_연천군") !== null
              ? "url(#imgpattern_연천군)"
              : null
          }
          d="M144.25 86.439l-1.667 5.833-.667 3.667-5.333-2.667-1.167 5-2.333 1.5 1 4.5 2.167-.167 2.167-3.167 5.167 2.5.5-4.5 3.5 1.667 3.833-.167 2.667-2.833 4.5 2.833-4.833 7.5 3.833 1.167 6.333-7.167 4.5.833.167-2.5h2.167l2.5.333 1.667-2-.833-6.333-2.333-.5-.167-2.333 3.667-2.833 4.167 1.333v-6.833l.5-12.167-2.167-3.5-2.167-5.333-3.5 1.833-1.833-2.333.167-6.833-9.333 4.667-6.333 4.833-2.167 4.333-2.167-1.5-4.167 2-2.333-.667-3-4-15.667 16 3.833 3.667 1.333 3.167 6.167.333 4.333-2.167 3.332 3.001z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "포천시"
            )
          }
          fill={
            document.getElementById("imgpattern_포천시") !== null
              ? "url(#imgpattern_포천시)"
              : null
          }
          d="M174.583 136.939l4.5-.167 3.667-1 2.5.667 5.167-3.333 2.667-14.167h3.833l1.167-8.167 5.833-1.833.333-6.167 4.667-6.333 1.667-4.167 2.5-.833-1.667-10.167-1.667-1.167-1.167 1.667-5.5-2-3.667 2.667-1.5 1.5-2-3.5-4.167-1 1.5-8.5-2.167-1.333-7.333 6.333-4.167-3.833v8l-.333 7.333-4-.833-3.667 2.833.167 2.333 2.667 1.833.5 5-1.667 2-4.667-.333-.167 6.333 4.667 4.333 2 3.167-.333 4h-2.167l-2.333 2.167 1.667 6.5-1.333 5.5 3.167 2.833.833 1.834z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "구리시"
            )
          }
          fill={
            document.getElementById("imgpattern_구리시") !== null
              ? "url(#imgpattern_구리시)"
              : null
          }
          d="M178.417 165.605l1.5-3.5-4-1.667-1.167-6.667-2.167 1.167-3-.333 1.833 4.167.167 3.667-2 2 1.667 2.833 3.5-2 3.667.333z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "남양주시"
            )
          }
          fill={
            document.getElementById("imgpattern_남양주시") !== null
              ? "url(#imgpattern_남양주시)"
              : null
          }
          d="M193.75 133.939l5 3.667 2.167 4.833 1 4.167 2.167 2.5-.667 4.5-3.833 4.667-.333 6.833-4.333 6.167.167 3.5-2.667.167-3.333-4-3.333-3.5-4-5-1.833-.333-4-1.667-1.167-6.667-2.167 1.167-3-.333-1.167-1.833-.5-5.833 4.167-5.167.5-2 2-2.833 5.167-.167 3-1 2.5.667 5-2.833 3.498.331z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "하남시"
            )
          }
          fill={
            document.getElementById("imgpattern_하남시") !== null
              ? "url(#imgpattern_하남시)"
              : null
          }
          d="M174.417 180.439l3.167.667 2.5-1.5 6 .333 1.5 1 1.667-2.333-.5-2.667 3.667-1-3.333-4-3-2.833-4.333-5.667-1.833-.333-1.5 3.5.833 1.667.333 2.5-3.833 2.833-.333 2 1.167 3-2.169 2.833z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "양평군"
            )
          }
          fill={
            document.getElementById("imgpattern_양평군") !== null
              ? "url(#imgpattern_양평군)"
              : null
          }
          d="M210.917 150.605l-3.833 2.333-3.667.667-3.833 4.667-.333 6.833-4.333 6.167.167 3.5 3.667-3.167 2.667.167 2.667 3.333 1.167 4.833 1 1.833-1.5 1.833-1.667.5 4 5.667 3.167-3.667 5.833 2.833 4.5-2.5 4 3.833 5 .167 3.167-1 4 1.5 4.167-.5 4 1.333.167 3 .667 2.333h6l5.5-10.667-1.333-6.333-4.667-3.333 7.333-6.833 4.334-1.167-6.334-5-4-1.667h-8l-12.333-8.167-6.167 3-.167 6.5-4 1h-5.667l-1-6.167-3.5-4.833-.836-2.831z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "가평군"
            )
          }
          fill={
            document.getElementById("imgpattern_가평군") !== null
              ? "url(#imgpattern_가평군)"
              : null
          }
          d="M213.917 95.939l-.833-4.5-2.5.833-1.667 4.167-4.667 6.333-.333 6.167-5.833 1.833-1.167 8.167h-3.833l-2.833 14.667 3.5.333 5 3.667 2.167 4.833 1 4.167 2 3.5-.5 3.5 3.667-.667 3.833-2.333.833 2.833 3.5 4.833 1 6.167h5.667l4-1 .167-6.5-2.833-4.333 2.333-1.167.5-9.667-4.833.667.333-3.833 2.833-3.333-2.5-4.5 1.833-2.833-.833-4.667 6.667-6.333h2.833l1-5.667-2.167-2.833-.333-3.667-8-.333.333-6.333-8.667-.667-.667-1.501z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "여주군"
            )
          }
          fill={
            document.getElementById("imgpattern_여주군") !== null
              ? "url(#imgpattern_여주군)"
              : null
          }
          d="M212.25 199.605v-5.167l-5.167-4.667 3.167-3.667 5.833 2.833 4.5-2.5 4 3.833 5 .167 3.167-1 3.333 1.667 4.833-.667 4 1.333.167 3 .667 2.333h6l.334 8.5-1.5 10.667-1.667 8-5.833 9.5-7.333-3.667-5.5-4.833-2.5 2.5-5.167-.5.333-2.833-.167-6.167 1.5-2.167-.833-4.333 1.833-3.167-1.833-2.667-2.833-3.5-2-.833-3-2.333-3.334.335z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "광주시"
            )
          }
          fill={
            document.getElementById("imgpattern_광주시") !== null
              ? "url(#imgpattern_광주시)"
              : null
          }
          d="M198.917 212.272l4.833-7 2.5-.333 6-5.333v-5.167l-5.167-4.667-4-5.667 1.667-.5 1.333-1.167-.833-2.5-1.167-4.833-2.667-3.333-2.667-.167-3.667 3.167-3.167.333-3.167.833.5 2.667-1.667 2.333-1.5-1-6-.333-1 1.333 1 1.667 2.167 4.333-1.667 3.5-2 2.833-.667 3.5-4.5 4v2.333l2.5-.333 4-2.5 1.167 1.833 2.833.667.5-3.667 5 1.833 3.167.833-.167 11 6.503-.498z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "성남시"
            )
          }
          fill={
            document.getElementById("imgpattern_성남시") !== null
              ? "url(#imgpattern_성남시)"
              : null
          }
          d="M162.583 188.439l-2 8 6.167 3.167 4.333 3.5h2.333v-2.333l4.5-4 .667-3.5 3.667-6.333-3.5-6.5-1.167.667-3.167-.667-1.667 2-3 .167-4.167 5.833-2.5-1-.499.999z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "과천시"
            )
          }
          fill={
            document.getElementById("imgpattern_과천시") !== null
              ? "url(#imgpattern_과천시)"
              : null
          }
          d="M154.917 191.605l7.167-2.5 1-1.667-1.667-4-6.167-.5-2.833 3.833v2.333l2.5 2.501z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "의왕시"
            )
          }
          fill={
            document.getElementById("imgpattern_의왕시") !== null
              ? "url(#imgpattern_의왕시)"
              : null
          }
          d="M153.583 194.272l-1.333 5.333-2.5 5.667-1 2.167 3.5.5 1-3.167 3.167-1.833 2.833-2.833 1.333-3.667 1.5-7.333-6.667 2.5-1.333.833-.5 1.833z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "용인시"
            )
          }
          fill={
            document.getElementById("imgpattern_용인시") !== null
              ? "url(#imgpattern_용인시)"
              : null
          }
          d="M161.417 201.939l-2.167-1.833 1.333-3.667 6.167 3.167 4.333 3.5 4.833-.333 4-2.5 1.167 1.833 2.833.667.5-3.667 8.167 2.667-.167 11 6.5-.5-.167 6.833 1.333 3.5 4.333 1.667.167 2.833 3.833.167 1.333 3.5 1.833 1.667-1.667 3.833-.833 3.833-3.833-1-5-.333-2.833-2.333-2.167 1.667-4.333-4-1.667-2.167-1.167 3.5-4.667 3-2.833 3.5-5.167-1.333-4.333-2.167.5-4.5 2.5-4.667 2.833-2-1.5-5.667-8.167-.667-1.833-2.333 2.667-4.833-2.5-1.667 2.333-2.667-3.167-.667-.667-2.167-2.167-.667-.496-3.999z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "안양시"
            )
          }
          fill={
            document.getElementById("imgpattern_안양시") !== null
              ? "url(#imgpattern_안양시)"
              : null
          }
          d="M149.25 195.939h-2.5l-2.333 2.667-3-4.667 1-3.667 2.167-3.5 3.167-2 2.5 2.167 2.167-.167v2.333l2.5 2.5-.833.833-1.667 5.667-3.168-2.166z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "부천시"
            )
          }
          fill={
            document.getElementById("imgpattern_부천시") !== null
              ? "url(#imgpattern_부천시)"
              : null
          }
          d="M134.917 181.105l-.5 1.833-5.167.167-3.833-3.833-.333-4 2.167-1.5.667-5.333 6.333 2.5 1.5 4.833-2 1.667 1.166 3.666z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "광명시"
            )
          }
          fill={
            document.getElementById("imgpattern_광명시") !== null
              ? "url(#imgpattern_광명시)"
              : null
          }
          d="M136.583 183.605l-2.167-.667.5-1.833 3-1.167 2.5-1.667 1.333 1.833 2.833 6.667-2.167 3.5-.667 1.667-3.667-.5-.833-6.833-.665-1z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "시흥시"
            )
          }
          fill={
            document.getElementById("imgpattern_시흥시") !== null
              ? "url(#imgpattern_시흥시)"
              : null
          }
          d="M121.583 197.439l-4 4.5 4.667 3.5 4.333-3.5 5-.5 3.5-2.833 5.667-1.333 1-2.167-.333-1.167.333-2-3.667-.5-1-6.333-.5-1.5-2.167-.667-5.167.833-5.667 10.833-1.999 2.834z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "이천시"
            )
          }
          fill={
            document.getElementById("imgpattern_이천시") !== null
              ? "url(#imgpattern_이천시)"
              : null
          }
          d="M221.25 245.605l1-5.167-2.833-4.833-4-.833-1.667-2.5-2.167.167-1.833-1.667-1.333-3.5-3.833-.167-.333-2.333-4.167-2.167-1.333-3.5.167-6.833 4.833-7 2.5-.333 6-5.333 3.333-.333 2.333 2.167 2.667 1 4.667 6.167-1.833 3.167.833 4.333-1.5 2.167v6.833l-.167 2.167 5.167.5 2.5-2.5 5.5 4.833.333 9.5-3.5 1.167.167 2.667-2.167-.833-2.167.5-.833 4.833-2.5-1.333-3.834-1.003z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "수원시"
            )
          }
          fill={
            document.getElementById("imgpattern_수원시") !== null
              ? "url(#imgpattern_수원시)"
              : null
          }
          d="M149.375 209.355l-1.5 2.625.5 2.5s2.5.375 2.5.75 3.25 4.625 3.25 4.625l6-.25 2-1.875 3.292.875 2.667-4.833-2.5-1.667 2.333-2.667-3.167-.667-.667-2.167-2.167-.667-.5-4-2.042-1.333-2.625 2.125-3.75 2.375-.75 2.833-2.75-.333-.124 1.751z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "군포시"
            )
          }
          fill={
            document.getElementById("imgpattern_군포시") !== null
              ? "url(#imgpattern_군포시)"
              : null
          }
          d="M148.75 207.439L145 205.73l-3.375-1.25 1.5-5.875 1.25-.375 2.125-2 2.75-.292 3.167 2.167-.167 1.5-3.5 7.834z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "오산시"
            )
          }
          fill={
            document.getElementById("imgpattern_오산시") !== null
              ? "url(#imgpattern_오산시)"
              : null
          }
          d="M122.25 205.439l5.625 3.042 5.875.375 1.5-.125 2.75 3.875 5.625-2 4.25 1.375 1.5-2.625.125-1.75-7.5-3.125 1.125-5.875 1.25-.375-2.625-3.125-1 2.167-5.667 1.333L132 201.48l-5.417.458-4.333 3.501z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "안산시"
            )
          }
          fill={
            document.getElementById("imgpattern_안산시") !== null
              ? "url(#imgpattern_안산시)"
              : null
          }
          d="M163 234.98l5.5-.5 1.375-1.75-.5-2.125-2.5-.375-1.5-3.625-1.25-2.375h-4.875l-2.375 4.125 3.625 2.375.25 3 2.25 1.25z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "평택시"
            )
          }
          fill={
            document.getElementById("imgpattern_평택시") !== null
              ? "url(#imgpattern_평택시)"
              : null
          }
          d="M146.625 269.48l10.125-5.125 4.875 1.625 6.5-2.875 3.25-4.25h2.75l.875-3.625 1-1.125-.25-2.125.25-1.5-5.5-1.375 3.125-3.625-2.375-1.375.75-5.125-.75-.875v-4.25l-1.375-1.125-1.375 1.75-5.125.375-2.625-1.125-3.75 1.875-1.625 7.75-6.125 1.375-6.125-.625-5.5 7.875-5.375.75-1.75 1.875 5.375 1.625 1.375 5.5 6.75 4 1.5 3.75h1.125z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "안성시"
            )
          }
          fill={
            document.getElementById("imgpattern_안성시") !== null
              ? "url(#imgpattern_안성시)"
              : null
          }
          d="M193.375 270.48l-4.75-4.125-4.25-.375-3.25-4.25-7-2.875.875-3.625 1-1.125-.5-2.625.5-1-5.5-1.375 3.125-3.625-2.375-1.75.75-4.75 3.417 1.625 5.167 1.333 2.542-3.583 4.958-2.917 1.167-3.5 2 2.417 4 3.75 2.167-1.667 3.208 2.667h4.625l3.833 1 .833-3.833 1.708-3.417 2.125-.583 1.667 2.5 4.333 1.083 2.5 4.583-1 5.167-7 1.375v3.75l-3.75 3-4.75.75-.25 3.875 1.5 1.875-3.75 3.375h-5.875l-2.625 4.875-1.375 2z"
        />
        <S.G
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "화성시"
            )
          }
          fill={
            document.getElementById("imgpattern_화성시") !== null
              ? "url(#imgpattern_화성시)"
              : null
          }
        >
          <S.Path d="M135.375 211.98l-4.125.125-1.125 3.125-.875 2.5-3-2.75-1.625.375-3.625-.375-1.75-.875-2.375.75-2.25 2.875 1.75 2.75-2 4.875-.375 3 .125 2.625 4-.375-1.375 3.375 1.875 3.125 4-3.125 3.125-4.125h4.5l1.75-2.375-.125 4.125 1.75 1L132 234.98l-5.25.5.25 2.875v2.625l-.125 4.125-2.625 2.5v2.25l6.875 1.125 1.125 1.75 5.375-.75 5.5-7.875 6.125.625 6.5-1.25 1.25-7.875 3.75-1.875-.25-3-3.625-2.375 2.375-4.125h4.875l1.25 2.375 1.5 3.625h2.625l.375 2.5 1.708 1.208 2.5-4.667 2.833-2-1.5-5.667-8.167-.667-1.833-2.333-3.292-.5-2 1.5-6 .25-3.25-4.625-2.5-.75-.5-2.5-4.25-1.375-5.625 2-2.624-.624z" />
          <S.Path d="M109.625 216.73L108 214.355l-3.125-.5-1.625-2.75-4.5-.625 2.25 4 1 3-2.5 1.375.125 5.375 3 .125 2.625-4 3.75 2.75-.125-3.875 1.25-1.125-.5-1.375z" />
        </S.G>
      </g>
      <g fill={fillColor} stroke={strokeColor}>
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "철원군"
            )
          }
          fill={
            document.getElementById("imgpattern_철원군") !== null
              ? "url(#imgpattern_철원군)"
              : null
          }
          d="M231.417 45.272h-3.833l-7 5.167-3.833-.333-1.667-2.167h-3l-3.167-2.333-6.5-.667-1.667 2-4.167-.333-2 2.333-1.333-3h-4.333l-1.5-.833-6.167 3.333-2.667-.833-1.667-1.833-2.833.333-1.667 4.667-2.167 2.5v6.333l1.833 2.333 3.5-1.833 2.167 5.333 2.167 3.5-.333 3.167 4.167 3.833 7.333-6.333 2.167 1.333-1.5 8.5 4.167 1 2 3.5 1.5-1.5 3.667-2.667 5.5 2 1.167-1.667 8.167-1.833 1.333-3.5-1.833-2.167 1.833-6.333s4.333-.667 4.333-1.167.167-3.333.167-3.333l3.833-1.5 3.667-6-2.667-2.667 3.167-5.167-.334-1.166z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "화천군"
            )
          }
          fill={
            document.getElementById("imgpattern_화천군") !== null
              ? "url(#imgpattern_화천군)"
              : null
          }
          d="M227.417 85.772l-.333 3.667 2 2.667-2.333 2.833-3.333 2-.167 1.167-8.667-.667-.667-1.5-.833-4.5-1.5-9.667-1.833-1.667 8.167-1.833 1.333-3.5-1.833-2.167 1.833-6.333 4.333-1.167.167-3.333 3.833-1.5 3.667-6-2.667-2.667 3.167-5.167-.333-1.167 2.167.167 8.5.5 1.667-2.333 3.667 1 4-2.667 1.833.833 3 3.5 2.333 1.167 4.167 12.833-.5 5 3.5 1.333.333 13.833 2.834 2.833.666 5.167-2.5 2.167h-4l-.833 2.833 1.167.667-7.667 4-3.667-4.167-1.833-1.833-2.667.333-1.333 2-2.833-2.667-2.833.333-2.167 1.167-.833-3.833-2.833.833-2.667-2.5-2-2.167-2.669.169z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "춘천시"
            )
          }
          fill={
            document.getElementById("imgpattern_춘천시") !== null
              ? "url(#imgpattern_춘천시)"
              : null
          }
          d="M233.417 148.939l2-3.667 1.833 2.833 2.333-2.5h2.5l-.5-3 6.167-2.833 13.667-.833 1.833-4.167-2.667-4.667-1-3.667-.166-1.667.666-1.333 5.167 1.167 2-4.167 2.167.167 4.5 4.833 2-6.167 1.166-1.667 4.167-9.667-2.667-2.667.834-5.333 2.666-1 1.834-2.833-1-1.333-3.5 2-.334-3-4.333-1.667-.833 3.833-4-2-.334-5.5-2.5 2.167h-4l-.833 2.833.667 1.333-7.167 3.333-3.667-4.167-2.333-1.667-2.167.167-1.333 2-2.833-2.667-2.833.333-2.167 1.167-.833-3.833-2.833.833-4.667-4.667-2.667.167-.333 3.667 2 2.667-2.5 3.333-3.167 1.5-.5 7.5 8 .333.333 3.667 2.167 2.833-1 5.667h-2.833l-6.667 6.333.833 4.667-1.833 2.833 2.5 4.5-2.833 3.333-.333 3.833 4.833-.667 4 1.833 2.333 2.833 1 2.505z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "홍천군"
            )
          }
          fill={
            document.getElementById("imgpattern_홍천군") !== null
              ? "url(#imgpattern_홍천군)"
              : null
          }
          d="M353.417 120.105l-4.834-5.833-4.666.667-3.167-.5-5.5 3.5-2.5-2.833-2.333 3.333-3.667 3.5-1.5 2.5-4.833-1.667-2.167-4.333-4 1-1.833 3.667-5.5 3.5-5-6.167-.167-5.5-10-.833-6.833-6.5-3.667.333-3.833 9.833-1.5 1.5-2.334 6.167-4.166-4.833-2.167-.167-2 4.167-5.167-1.167-1.166 1.5 1 3.667 3.333 6.167-1.833 4.167-13.667.833-6.167 2.833.5 3h-2.5l-2.333 2.5-2-2.333-1.833 3.167-1-2.5-2.333-2.833-4-1.833-.5 9.667-2.333 1.167 2.833 4.333 6.167-3 12.333 8.167 8.5.167 3.5 1.5 6.334 5 3.833-1.833 1.833-5.5 3.834-.833 3.666-1.5 2.167-4.667 4.167 1.833 2.333 2.333 7.167-6.5 3-.333 1.166-3.333 2.834.167 2.5 2.5 7 1.833 1 3.5 4-.167 2-5 5.666-6.833 14.334.833 1.833-4.667 3-1.833 6.333-.333-.333-3.5 1.833-4.5 1.167-2.667 4.667-1.833-1.167-3.333.666-2.504z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "횡성군"
            )
          }
          fill={
            document.getElementById("imgpattern_횡성군") !== null
              ? "url(#imgpattern_횡성군)"
              : null
          }
          d="M288 202.855l-.25-5.75 4-1-.5-4 2.75-2-5-5.5-6-1.5-4-1.5-1.5 2-4-3.75-.25-3.75-2.5 1-.75 2.75-4.25 3 .25 5.5v3.5l-3 1.5-1.25-5.25-4.5-1.667-1.333-6.333-4.667-3.333 7.333-6.833 4.334-1.167 3.833-1.833 1.833-5.5 7.5-2.333 2.167-4.667 4.167 1.833 2.333 2.333 7.167-6.5 3-.333 1.166-3.333 2.834.167 2.5 2.5 7 1.833 1 3.5 4-.167 2.833 3.333 3 14.25-7 7.25v4.25l2.5 4.75-2 2.75-7.75.25-1.25 3 2 4.5-2.75 2.75-6.75-.25-.5 3.75-6.25-2-1.5-2z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "원주시"
            )
          }
          fill={
            document.getElementById("imgpattern_원주시") !== null
              ? "url(#imgpattern_원주시)"
              : null
          }
          d="M307 216.105l-4.25 4.25-4.75-3-3.25 5.25-8.75 1.75v-2.75l-2.5-5.5-5.25-1-5.25 3.75.75 6.25-.25 3-3.5 2.5-5-1-7.75 2.75-8.333-8.083 1.583-6.667 1.584-12-.334-8.5 5.5-10.667 4.5 1.667 1.25 5.25 3-1.5-.25-9 4.25-3 .75-2.75 2.5-1 .25 3.75 4 3.75 1.5-2 10 3 5 5.5-2.75 2 .5 4-4 1 .25 5.75 1.5 2 6.25 2 2.25 4.75 5.75-.25 3-3.5 2.5 2.5-1 2.75.25 2.25-1.5.75z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "양구군"
            )
          }
          fill={
            document.getElementById("imgpattern_양구군") !== null
              ? "url(#imgpattern_양구군)"
              : null
          }
          d="M294.75 44.605l-7 4-6.25-1.5-5-1-3.25-1.5-8-1-3.25 2.25-3.417 1.583 4.167 12.833-1.25 4.833 4.25 1.5.333 13.833 2.834 2.833.583 5.833.417 4.833 4 2 .833-3.833 4.333 1.667.334 3 3.5-2 5.333.083 1.25-4.5 4.5 2.5 1-6.5-4-4.25 2.25-3-3-5 1.25-1.75 3.5-8 .5-3.5 4-5.25.25-9.5-5-1.498z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "인제군"
            )
          }
          fill={
            document.getElementById("imgpattern_인제군") !== null
              ? "url(#imgpattern_인제군)"
              : null
          }
          d="M306.75 37.105l-12 7.5 5 1.5-.25 9.5-4 5.25-.5 3.5-4.75 9.75 3 5-2.25 3 4 4.25-1 6.5-4.5-2.5-1.25 4.5-5.333-.083 1 1.333-1.834 2.833-2.666 1-.417 5.917 2.25 2.083 3.667-.333 6.833 6.5 9.5 1.167.667 5.167 5 6.167 5.5-3.5 1.833-3.667 4-1 2.167 4.333 4.833 1.667 1.5-2.5 3.667-3.5 2.333-3.333 2.5 2.833 5.5-3.5-1-5.667.333-6.333 2.834-2.667.333-7.167-2.5-2.833-7.833-1.167-1.167-6.5.833-2.833 6-2.667-6.666-8.333 2.5-2.5v-5.5l-2.167-2.5-3.833 1.833-3.667-1-1-3.833-4.167-.333s-.666-4.333-.666-4.833-1.167-4.333-1.167-4.333l-2.167.333-2.833 1.167-1.167-4.333 1-1.833-3.333-1-2.5-2.502z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "고성군"
            )
          }
          fill={
            document.getElementById("imgpattern_고성군") !== null
              ? "url(#imgpattern_고성군)"
              : null
          }
          d="M340.083 66.939l13.334-7-8.334-17.5-1.333-4.333-7.167-10 1.334-1.833-8-14.167V8.939l-6.5-8.333-5.334 2.167-.333 14.167-1.167 7.833-10.166 12.833 2.833 2 2.5.833.833.167-1 1.833.667 4.333 5.5-1.5 1 3.667.833 5.5 4.167.333 1 3.833 3.667 1 3.833-1.833 2.167 2.5v5.5l5.666 1.167z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "속초시"
            )
          }
          fill={
            document.getElementById("imgpattern_속초시") !== null
              ? "url(#imgpattern_속초시)"
              : null
          }
          d="M356.417 70.939l-.167-3.667-1.833-2.667 1-1-2-3.667-13.334 7-5.666-1.167-2.5 2.5 6.666 7.833 3.667-1.5 4.667-.333 4.5-2.5 5-.832z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "안양군"
            )
          }
          fill={
            document.getElementById("imgpattern_안양군") !== null
              ? "url(#imgpattern_안양군)"
              : null
          }
          d="M353.417 120.105l7.333-7.333 3.667 1.5 8.5-2.667 2.5-1.167 6.833-.333-5.5-8-1.333-3-3.334-3.5-.333-3.667-2.167-.333-5.166-5.5-.334-2.833-7.166-8.5-.5-3.833-5 .833-4.834 2.667-4.333.167-3.667 2-6 2.667-1.166 3.333 1.5 6 7.333 1.333 3 2.667-.333 7.167-3 3.167-.167 5.833 1 5.667 3.833.833 4-1 4.834 5.832z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "평창군"
            )
          }
          fill={
            document.getElementById("imgpattern_평창군") !== null
              ? "url(#imgpattern_평창군)"
              : null
          }
          d="M355.083 210.772l1.167-1.833-4.333-10.167-1.834-4.167-1.166-3.167-4.167-2.167 1.833-7.5 5.5-.333-.333-5.667 2 1.167s.833-6.833.833-7.5 3-6 3-6l3.667 4.667 3.5-2.333 2.5-4.833 3.333-.5 1.167-2.5h1.5l-.5-3.167-.5-3.833 4.167-3.667-1.334-4.667-1.5-5.333-5-4.667h-5.166l-2.167-1-6 1.5.5-5.667-1.833-1.5-4.667 1.833-3 7.167.333 3.5-6.333.333-3 1.833-1.833 4.667-14.334-.833-5.666 6.833-2 5 2.833 3.333 3 14.25-7 7.25v4.25l2.5 4.75 3.167.833 3.5 4.333 1.166 6.167.334 5 3.666-.833 3.334 3.5 3.166-1.833.834-6.667 2.833-.5 3.667 3.833.666 2.167h3.5l2 3.333 4.834-1 3.666 2.335z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "강릉시"
            )
          }
          fill={
            document.getElementById("imgpattern_강릉시") !== null
              ? "url(#imgpattern_강릉시)"
              : null
          }
          d="M380.25 168.105h-8.167l-2.666 1.667-4.667-4 2.5-4.833 3.333-.5.667-2.5h2l-1-7 4.167-3.667-2.834-10-5-4.667h-5.166l-2.167-1-6 1.5.5-5.667-2.167-1.667-.833-3.167.667-2.5 7.333-7.333 3.333 1.5 8.834-2.667 2.5-1.167 6.833-.333 2.167 1 .5 4.333 5.333 6.167 9.167 9.833-.334 3h1.667s12.667 11.666 12.5 12.333-1.5 5.333-1.5 5.333l2.167 4.167-2 10-9.167 2.5-1.333-2-2.667 2.667-4.5-4.333-.833-3.667-2.334-.667-2.166 4.167-.834 5-1.666 2.833-3.167.5-1.5-1.833-1.5-3.332z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "정선군"
            )
          }
          fill={
            document.getElementById("imgpattern_정선군") !== null
              ? "url(#imgpattern_정선군)"
              : null
          }
          d="M401.25 182.105l4-6-3.5-4 1-3.333-1.333-2-2.667 2.667-4.5-4.333-.833-3.667-2-.5-2.5 4-.834 4.333-1.666 3.5-3.167.5-1.5-1.833-1.5-3.333h-8.167l-2.666 1.667-4.167-3.833-4 2.167-3.667-4.667-3 6-.833 7.5-2-1.167.333 5.667-5.166.5-2.167 7.333 4.167 2.167 7.333 17.5-1.167 1.833-2.666 3.167 2 3.667 1.166 2 3.667.333 3.167 4.167 7.666 1.167 6.834-4.5 6.666 3.5 4.667 2.5 5.667.5-.167 2 4-.667-1.167-8.333-3-8-.666-3-3.167-4.167.833-3.667-2-2.5.334-4.833 3.333-5 2.333-1.833.5-3 6.167-2.169z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "동해시"
            )
          }
          fill={
            document.getElementById("imgpattern_동해시") !== null
              ? "url(#imgpattern_동해시)"
              : null
          }
          d="M407.917 185.605l6.166-5.167 9.667-.167 3.333-2.333-2.666-4.667-4.5-6.167 2.166-2.5-1.5-3.333-6.666-5-2.334 10-8.833 2.5-1 3.333 3.5 3.333-4 6.667 2.667 3 4 .501z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "영월군"
            )
          }
          fill={
            document.getElementById("imgpattern_영월군") !== null
              ? "url(#imgpattern_영월군)"
              : null
          }
          d="M390.917 235.105l2.833 2.333-2.333 3.667.333 2.833-4-1.167-6.833-4-2.5 3.167-2 2.333 1 3.333-4.834-1.333-7.333-3.333-5-4-6.167.833-8-4.833-5 1-6.166.167-4.167-6.167h-5.667l-6.166 2.5-2.667-4.5 7.667-6.333-.334-2.333-1.833-.5-6.167 2.333-2.833-3.167-4.25-2.583-.25-2.25 1-2.75-2.5-2.5-3 3.5-5.75.25-2.25-4.75.5-3.75 6.75.25 2.75-2.75-2-4.5 1.25-3 7.75-.25 2-2.75 3.167.833 3.166 4.333 1.5 5.167.334 6 3.666-.833 3 3.5 3.5-1.833.834-6.667 2.833-.5 3.667 3.833.666 2.167h3.5l2 3.333 4.834-1 3.666 2.333-2.666 3.167 3.166 5.667 3.667.333 3.167 4.167 7.666 1.167 6.834-4.5 11.333 6 5.667.5-.167 2-1 4.5-1.833 1.333z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "태백시"
            )
          }
          fill={
            document.getElementById("imgpattern_태백시") !== null
              ? "url(#imgpattern_태백시)"
              : null
          }
          d="M397.417 213.939l1.166-1.167.167-3.833 4.167-8.833 5.166-1.5-1 2.5 2.167 3.667-1.167 3.333 1.334 2-1.334 3.333-2 1 2.5 2-.666 3.667 2.5 4.5 6.333 1.833 2.667 3.833-.167 5.667-2.833 2.333-.667 2.333-3.833-.667-5.667-1.5-3 1-4.333-2.5-2.334 6.333-4.833.667-.333-2.833 2.333-3.667-3.167-2.333 2.167-1.333 1-4.5 4-.667-1.167-8.333.834-6.333z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "삼척시"
            )
          }
          fill={
            document.getElementById("imgpattern_삼척시") !== null
              ? "url(#imgpattern_삼척시)"
              : null
          }
          d="M431.917 244.272l5.333-.333-.333-5.333 5.833-5.667 3.667-.333 3.666-4.167h3.5l-3.333-8.667.333-1.667-.833-2 2.833-1.667-4.666-7.5-4.167-4.167-3.167-1.333-2.5-7.333 1.167-2.167-8.167-5.5-.5-5.5-3.5-3-3.833 2.333-9.667.333-5.666 5-4-.5-2.667-3-5.667 2.167-1.333 3.667-2 1.167-3.333 5-.334 4.833 2 2.5-.833 3.667 2.833 3.833 4 11.333.834-6.333 1.5-1.5-.167-3.5 4.167-8.833 5.166-1.5-.666 2.167 1.833 4-1.167 3.333 1 2.333-1 3-2 1 2.5 2-.666 3.667 2.5 4.5 6.333 1.833 2.167 4.167.333 5.333 3.667.833 9 7.501z"
        />
      </g>
      <g fill={fillColor} stroke={strokeColor}>
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "진천군"
            )
          }
          fill={
            document.getElementById("imgpattern_진천군") !== null
              ? "url(#imgpattern_진천군)"
              : null
          }
          d="M196.75 276.272l2.833.833.167 4.667 5.167 2.333 3.333 2.667-.333 2.833 2.167 1.833s-.667 2.5-.167 2.333 4.667-1.167 4.667-1.167l5.167-2.667 4 2 4.333-3.5-2.667-4.667 2.5-.833.333-6.833 1.333-1.667-7.5-7.167-3.167-3.167-2.5 1-2.333-2.667-.167-3.667.333-8.042-3.75 3-4.75.75-.25 3.875 1.5 1.875-3.25 3.208-6.375.167-4 6.875 2.542 1.958.834 3.837z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "음성군"
            )
          }
          fill={
            document.getElementById("imgpattern_음성군") !== null
              ? "url(#imgpattern_음성군)"
              : null
          }
          d="M244.25 273.605l-1.75 4.25-4.375-1.5-3.75 3.875-1.125-2.5-4.875-2 1.208-1.292-10.667-10.333-2.5 1-2.333-2.667.167-11.708v-3.75l7-1.375 4.125.875 2.125 1 .917-4.375 2.167-.5 2.167.833-.167-2.667L236 239.23l-.25-9.125 7.375 3.375 2.25.625 2.375 1.375-3.25 4-1.25 7.25-2.125 2.5-.75 4.375-1.25 1.5.5 2.625 2.25-1.5 2.5 1.625 4 3.25 2.875-.25 3.125 4.125 2.125 2.75-.75 5.125-4.125 1.25-2-.375-5.375-.125z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "충주시"
            )
          }
          fill={
            document.getElementById("imgpattern_충주시") !== null
              ? "url(#imgpattern_충주시)"
              : null
          }
          d="M258.375 262.855l3.625 1.25 1.375 3.75 5.5 3.625 5 1 1.25-.625 2 1.875 1.625 3.125 1 4.25 3.25 2.375 2.375-1.75 4.625.875 2.625.375 1.375 1.625 3.75-3.25-2.875-2-2.375-2-2.25 2.25-2.5-3.5 2.75-5.625.125-4.5-2.375-2.75 2.375-3.125 3.75 1-.75-5.125-1.625-2.75 2.25-3-1.875-4.25.5-4.25-4.625-3.5-1.25-2.25-3.875.125-.625 2-4-5.375-1.125-2.125-3.875-2.5-3.5 2.5-5-1-7.75 2.75-8.333-8.083-5.542 8.833 2 1 1.75 1.25-2.625 4.125-1.25 7.25-2.5 2.375-.375 4.5-1.25 1.5.5 2.625 2.25-1.5 3.375 2.25 3.125 2.625 2.875-.25 3.375 4.5 2.125-1.375 1.625-1.125z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "제천시"
            )
          }
          fill={
            document.getElementById("imgpattern_제천시") !== null
              ? "url(#imgpattern_제천시)"
              : null
          }
          d="M310.5 244.355l5.375-4.25-1.5-3.125 2.25-1.875 3.125 2.375 1.25-2-2.083-3.042-2.667-4.5 7.667-6.333-.334-2.333-2.208-.417-5.792 2.25-2.833-3.167-4.25-2.583-1.5.75-4.25 4.25-4.75-3-3.25 5.25-8.75 1.75v-2.75l-2.5-5.5-5.25-1-5.25 3.75.625 5.75-.125 3.125 3.875 2.875 1.125 2.125 3.875 5 .75-1.625 4.125.25 1 1.875 4.375 3.875-.25 3.875 1.875 4.25-2.25 3 1.5 3.125.875 4.75-3.75-1-2.375 3.125 2.375 2.75-.125 4.5-2.75 5.625 2.5 3.5 2.25-2.25 5.25 4 2.5-2 6.375 3 3.125-.375v-5.375l3.875-3.875-1.5-7.25 2.125-3.625 1.375-1.25-1.25-5.25-2-5.375-2.375-.625.5-5z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "단양군"
            )
          }
          fill={
            document.getElementById("imgpattern_단양군") !== null
              ? "url(#imgpattern_단양군)"
              : null
          }
          d="M316.5 273.855l6.5 7.625 3.75 1.375 2.25 2.125 3.5-3.375 3.875.25 3.75-5.75-1-2.75-1.625-3.375 2-5.625 9.625-9.25 2.625-.875 2.25-3.75 2.25-4.25 6.25-.125 2.75-3.167-5-4-6.167.833-8-4.833-3.958.792-7.208.375-4.167-6.167h-5.667l-6.166 2.5L321 235.48l-1.625 1.625-3.125-1.75-1.875 1.625 1.5 3.125-5.375 4.25-.5 5 2.375.625 2.125 4.75 1.125 5.875-1.375 1.25-2.125 3.625 1.25 7.625 3.125.75z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "괴산군"
            )
          }
          fill={
            document.getElementById("imgpattern_괴산군") !== null
              ? "url(#imgpattern_괴산군)"
              : null
          }
          d="M257.75 316.355l-3.25-.625-7.875-8.375 2.125-3.75-6.625-5.75-4.125-2.25-2.25-7.25 1.625-2.75-1.25-3.125-1.75-2.75 3.75-3.375 4 1.375 2.125-4.125 5.375.125 1.375.5 4.75-1.375.75-5.125-1.5-2.5 3.375-2.375 3.625 1.25 1.375 3.75 5.5 3.625 5 1 1.25-.625 2 1.875 1.625 3.125 1 4.25 3.25 2.375 2.375-1.75 5.125 1.25-1.5 5.5-2.375 4.25 6.125 6.125-3.5 1-4.75-3.375-2 1.75-4.125-2.625-2.5 5-3.25 2.375-2.875.5 3.125 2.75 2.875 2.875-1.875 7-4.75-5-1.75-2.25-3 3.375.875 2.25-7.5 1.875z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "증평군"
            )
          }
          fill={
            document.getElementById("imgpattern_증평군") !== null
              ? "url(#imgpattern_증평군)"
              : null
          }
          d="M240.125 299.605l2-1.75-4.125-2.25-2.25-7.25 1.625-2.75-1.25-3.125-1.75-2.75-1.125-2-5-1.625-.25 6.5-2.583 1.167 2.333 4.583.5 2.125 2.25.625 1.875 3.5 1.25 1.875 2.375 4.25h3.875l.25-1.125z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "청주시"
            )
          }
          fill={
            document.getElementById("imgpattern_청주시") !== null
              ? "url(#imgpattern_청주시)"
              : null
          }
          d="M209.625 293.355l-2.625 1-2.5-1.5-3.25-.25-2.5 1.25.25 2.625-2.75 1.5-.625 3-2.25 1.25.5 2.125h1.625l-.5 3.875-2.75 1.875 1.375 2.625 1.875 2.75v4.5l3.375.875 5.056 1.809 1.736 2.055-.571 3.22-.346 1.948-.75 4.093 1.375-1.375 2.375 1.875.125 4.75 4.625.875 1.5 1 2.375-3.5 1.5-1.75 1 3.5 1.25 1.125-.875 3.125 2.125 4 1.25-2.5.5-3 3.375-1.125 3.375-7.25-1.625-5.25 6.75-5 .125-3 3.875-4.625 5.5 2.75 2.75-1.25 2.125.25 2 2.375 3.125-4.25-7.875-8.375 2.125-3.75-6.75-5.375-1.875 1.375-.25 1.125H236l-2.375-4.25-3.125-5.375-2.25-.625-.5-1.25-4 2.708-4.5-2.208-4.667 2.875-4.958.75z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "보은군"
            )
          }
          fill={
            document.getElementById("imgpattern_보은군") !== null
              ? "url(#imgpattern_보은군)"
              : null
          }
          d="M225.917 345.938l-3.292-.833.792-2.5 3.083-1.625 3.25-7.708-1.5-4.792 6.75-5 .125-3 3.875-4.625 5.5 2.75 2.75-1.25 2.125.25 2.042 1.833 3.166-3.333 2.334.167 1.166 2.667 4.5 2.5h3.5l1 3.667 4.334 4.5-.334 2.833-3.333 2-.167 9.167.667 2-2.167 2.833 2.834 3.834-5.5.333-10-2.5-3.167.833-5.5-4.333-1.5-2.167-1.5-2.5-4.5.5-2 2.5-.667 2.5-2.833-.5-1-.666-2.667 2.166-1.667-.833-.499-1.668z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "옥천군"
            )
          }
          fill={
            document.getElementById("imgpattern_옥천군") !== null
              ? "url(#imgpattern_옥천군)"
              : null
          }
          d="M233.25 382.438l6.333 1.334 1.5-8.167 3.333-1.667 4.5-4.5 4.833-.166.833-3.667 5.834-3.667 2.833.334 6.167-7-.5-3-5.5.333-10-2.5-3.167.833-5.5-4.333-3-4.667-4.5.5-2 2.834-.667 2.166-2.833-.5-1-.666-2.667 2.166-1.833 1.167-2.5.833-.5 5.5-2.833 2.334-.833 4.666.833 3.5-1.167 3.167.167 4.333 3.5-.833 1.667-.667 2.167 3.334 4.167-.334 1.667 1.834.666 5.166z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "영동군"
            )
          }
          fill={
            document.getElementById("imgpattern_영동군") !== null
              ? "url(#imgpattern_영동군)"
              : null
          }
          d="M244.25 400.605l-3.167 2.667-3.167-4.167-2.5-5.833-3.5-3.334 1.5-3.5-.167-4 6.333 1.334 1.5-8.167 3.333-1.667 4.5-4.5 4.333-.333 2-3.667 5.167-3.5 2.833.334 2.167 5.166 3.333.5s2.333-4.667 2.833-4 3.334 4.167 3.334 4.167l5.333 2.833 2.667-2.5 4.333.167 2.167 2-2.334 2.833 4.834 6.834-3.167.333-4.5-1.333-3 .5 1 4.166 1.333 3-3 4.334-.833 3.5-.667 5.5-6.5 2.166-4.5 5-3.833-1.833-2.667 1-7.5 2.333-1.166-2.333-5.167-1.333-2-2.5-1.498-2.167z"
        />
      </g>
      <g fill={fillColor} stroke={strokeColor}>
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "유성구"
            )
          }
          fill={
            document.getElementById("imgpattern_유성구") !== null
              ? "url(#imgpattern_유성구)"
              : null
          }
          d="M209.875 345.855l-2.375-5.5.375-1.125-.125-4.75-2.375-1.875L204 333.98l-2.375-.25.5 4.25-.5 3.375-3.375 3.625-4.25.375-2.75 3.25v9.375l-1.625 3-.5 4.25-1.625 1.625 6.25 3.125 5.5-6.875 1.875-2.5 2-7.25 4.125-.375 1.5-1.375 1.125-5.75z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "대전 서구"
            )
          }
          fill={
            document.getElementById("imgpattern_대전") !== null
              ? "url(#imgpattern_대전)"
              : null
          }
          d="M208.375 357.23l-1.5-4.375-3.75.5-2 7.25-7.375 9.375-.875 3.25 3.5 3.875 3.625 4 3-4.5-.125-5.375 1.75-2.875-.25-2.5 2.125-2.875 1.125-4.25.75-1.5z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "대전 중구"
            )
          }
          fill={
            document.getElementById("imgpattern_대전") !== null
              ? "url(#imgpattern_대전)"
              : null
          }
          d="M206 368.73l.375 5.875 3.875 3.875 1.5-2.625 1.5-2.875-1.25-2.25.5-2.5-.875-2.375 3.125-1.625-3-2.125-2-2.25.125-2.125-1.5-.5-.875 1.875-1 3.875-2.125 2.875.375 2 1.25.875z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "대덕구"
            )
          }
          fill={
            document.getElementById("imgpattern_대덕구") !== null
              ? "url(#imgpattern_대덕구)"
              : null
          }
          d="M216 355.105l-1.5-4.5 4.75-7 .875-3.125-1.25-1.125-1-3.5-1.5 1.75-2.25 3.125-1.625-.625-4.625-.875-.375 1.125 2.375 5.5-1.125 5.75-1.875 1.25 1.5 4.375 1.5.5 2.375-2.125 1.625.75 2.125-1.25z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "대전 동구"
            )
          }
          fill={
            document.getElementById("imgpattern_대전") !== null
              ? "url(#imgpattern_대전)"
              : null
          }
          d="M213.25 380.73l-3-2.25 3-5.5-1.25-2.25.5-2.5-.875-2.375 3.125-1.625-3-2.125-2-2.25.125-2.125 2.375-2.125 1.625.75 2.125-1.25-1.5-4.5 4.75-6.625 2.125 3.625 1.375-2.125 3.167.458.5 1.667 1.667.833-2.208 1.667-2.125.333-.375 5.167-2.958 2.667-.792 4.333.792 3.833-1.167 3.167.167 4.333-6.168 6.792z"
        />
      </g>
      <g fill={fillColor} stroke={strokeColor}>
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "천안시"
            )
          }
          fill={
            document.getElementById("imgpattern_천안시") !== null
              ? "url(#imgpattern_천안시)"
              : null
          }
          d="M159 307.48l4.875-6.5 2.875-.875s1.125-4.375 1.125-4.75 1-2.75 1-2.75l2.625-.875.25-4-2-1.875-.875 1.375-.5-6.125L171 278.48l-.375-2.625-1.5-.25-1.375-10.875.375-2 3.25-3.875h2.75l6.625 3.125 3.625 4 3.625.625 7.5 5.625 1.25 3.75 2.833 1.125.042 4.375 6.125 3.125 2.5 2.167-.125 2.208 1.75 2.75-.375 1.25-2.125.875-2.875-1-3.25-.25-2.5 1.25.25 2.625-3.125 1.75-.75 3.125-1.75.875-4.375.125-3.75-2.375-5.125-2.875-4.625.25-1.75 3.25 2.625 2.5.625 5.375-1 4-4.125-3.875-2.25.625-1.625 1.625-2.875-.25-1-1.5-5-.25-.125-1.375z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "계룡시"
            )
          }
          fill={
            document.getElementById("imgpattern_계룡시") !== null
              ? "url(#imgpattern_계룡시)"
              : null
          }
          d="M190.875 374.73l-3.625-.125-1.125-2.75-2.875.125-1.75-4.875 1.5-2.5.125-2.75-1.5-2.75L184 355.98l3.375.875 2.375 3.75-.625 4.625-1.625 1.625 6.25 3.125-.875 3.25-2 1.5z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "공주시"
            )
          }
          fill={
            document.getElementById("imgpattern_공주시") !== null
              ? "url(#imgpattern_공주시)"
              : null
          }
          d="M170.75 358.105l-2.25.25-3.5 8.75-9.5-3.625v-11.625l4.375-3.625-.125-5.25-4.25-4.375h-6.125l-1.5 1.375-5-6 .25-8.875 6-8.375 3.125-9.875 3 3 3.875-1 5 .25 1 1.5 2.875.25 1.625-1.625 2.25-.625 3.75 3.875 4.375 5.75 3.75 3.125.125 5.375-.875 5.322 1.188 4.928 3.437 4.001 4.5 2.874 1.875 1.5-2.75 3.25v9.375l-1.375 2.25-2.5-3.375-3.375-.875-2 3-6 4-3.5-2.125-1.75-2.75z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "아산시"
            )
          }
          fill={
            document.getElementById("imgpattern_아산시") !== null
              ? "url(#imgpattern_아산시)"
              : null
          }
          d="M139 286.23l-.375-3-1.625-7.5 4-4.5 5-.25-.125-1.5 1.125-.375 10.125-4.875 4.5 1.75 6.5-2.875-.375 1.625 1.375 10.875 1.5.25.375 2.625-2.625 2.625.5 6.125.875-1.375 2 1.875-.25 4-2.625.875-1 2.375-1.125 5.125-2.875.875-4.875 6.5.25 1-3.5 1.25-3.375-3.25.5-3.375-2.75-1.5-4.75-.375-2-4-5.625-3.375-1.125-5.5 2.375-.25v-1.875z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "당진시"
            )
          }
          fill={
            document.getElementById("imgpattern_당진시") !== null
              ? "url(#imgpattern_당진시)"
              : null
          }
          d="M91.625 268.855l1.125-7.75-.875-6-4-5.5 4.625-3.75.25-1.625 5.5.5 5.625 6 6.5 3.75 9.875.5 9.25 3.25 1.375 6.5 2.5 2.25 2.25 7.75 1.375 1 1.875 9.25.125 3.125-2.375.25-2-.25-6.5 5.75-5.625-6.875-2.5-1.625-5.5 4.5-5.125-6-2.125-.375-1.625-2.375-5.375.75-4.125-2.125-.375-4.625-4.625-2.375.5-3.875z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "예산군"
            )
          }
          fill={
            document.getElementById("imgpattern_예산군") !== null
              ? "url(#imgpattern_예산군)"
              : null
          }
          d="M138.375 322.105l-5.125 7-4.75-1-2.875.125-.625-4.25 2-4.75 1.25-2.625-2.75-4.875-2-4.75-4.625-.25-9.375 2.75-.25 4.125-4.125-.125v-5.75l2.375-7.25-.625-2.5 3.375-4 4.25-4.125 5.5-4.5 2.5 1.625 5.625 6.875 6.5-5.75 2.125.75 1 5 5.625 3.375 2 4 4.75.375 2.75 1.5-.5 3.375-3.25 10.25-6 8.375-4.75-3z"
        />
        <S.G
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "서산시"
            )
          }
          fill={
            document.getElementById("imgpattern_서산시") !== null
              ? "url(#imgpattern_서산시)"
              : null
          }
        >
          <S.Path d="M74 298.23l2.75-11.125-4-4.75-.875-3.25 2.5-3.375 2.5 4.5.875-7.25 4.125-2.5L84 268.105l-.125-3.125-4.625-1.25-6-4.625-.75-5 2.125-3.25 1.875 2.375 1.125-1.625L82 251.48l3.625 2 2.75 1.125 4.25 8.125-1.5 10 4.625 2.375.375 4.625 4.125 2.125 5.375-.75 1.625 2.375 2.125.375 5.125 6-7.625 8.125.625 2.5-2.125 6.375-3.125 3.5-4.75.375h-6.375l-2.375-6.375-2.5 1.5.375 5.625-3.375 5.375-2.5-2.625-3-1.375-2.5-7.375-1.25-7.25z" />
          <S.Path d="M69.375 257.48l-2 1.75v4.25L70 265.605l.5-4-1.125-4.125z" />
        </S.G>
        <S.G
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "태안시"
            )
          }
          fill={
            document.getElementById("imgpattern_태안시") !== null
              ? "url(#imgpattern_태안시)"
              : null
          }
        >
          <S.Path d="M70.5 268.73l-3-2.25-3.625 6-4.375 2.375 1-3.5 3-3.625-4.25.5-4.5 1.875-1.75 2.5 2.375 2-1.125 5.5-3.25-2.5-1.375 3.875.25 3.875-3.125 3.625-3 .625 3.625 3.5-.75 5.125 3.875-1.75.125-3.25 4.5 1.5 3.625 3.625s-4.625-.5-5-.5-5.125 3.75-5.125 3.75l-2 2.875 5.75 1.25 4.5-2.5 4.75-1.5 2.625-1.75.25 4.75 3.375 2.75.25 5.75-.75 4.125 1.375 1.625 3-2.75 3.25-3.375-.625-4.75L74 298.23l2.75-11.125-4-4.75-.875-3.25-.5-4.875L73 271.605l-2.5-2.875z" />
          <S.Path d="M76.125 314.48l-3.375 2.125-2.625 4.125 2.375 4.875.25 7.75-.5 4.5 3 5.125 1.25 2.375 4.375 1.75 1.75 1.625L86 344.98l-1.625-7.25-3.25-7.875-1-3.5 1.25-5.375-.625-3.625-4.625-2.875z" />
        </S.G>
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "세종특별자치시"
            )
          }
          fill={
            document.getElementById("imgpattern_세종특별자치시") !== null
              ? "url(#imgpattern_세종특별자치시)"
              : null
          }
          d="M191.876 343.855l-5.375-3.469-2.313-3.406-1.188-4.928.625-5.322.563-6.178-4.063-2.072-4.75-6 1.375-4-.625-5.375-2.625-2.5 1.75-3.25 4.625-.25 8.875 5.25 4.375-.125.5 2.125h1.625l-.5 3.875-2.75 1.875 1.25 3 2 2.375v4l3.375 1.375 4.306 1.809 1.736 2.055-.917 5.168.917 2-2.091 1.171.517 4.106-1.718 4.191-3.75 3.875-3.875.125-1.874-1.5z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "홍성군"
            )
          }
          fill={
            document.getElementById("imgpattern_홍성군") !== null
              ? "url(#imgpattern_홍성군)"
              : null
          }
          d="M91.375 330.605l-3.75-5.875.5-6.625 2.75-1.125-1.375-2.75v-7.125l1.625 3.625 5.75.125 5.375-.5 2.625-3 .25 6.125 4.125.125.25-4.125 9-2.5h5l2 4.375 2.75 5.25-3.25 7 .625 4.625 2.875-.125-1.125 3.5-2.875 5.25h-5.375l-5 2.125-5.125-2.5-2.625-.375-1.625-2.875-3.875-.375-3.375-1.75-3-.875-3.125.375z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "청양군"
            )
          }
          fill={
            document.getElementById("imgpattern_청양군") !== null
              ? "url(#imgpattern_청양군)"
              : null
          }
          d="M120.125 348.855l-2-4.375-3.5-5.875 4.5-1.75h5.375l3-5.625 1-3.125 4.75 1 5.125-7 4.75 3-.25 8.875 5 6 1.5-1.375h5.75l4.625 4.375.125 5.25-4.375 3.625-.375 6.5-3.375 1.5-4.375 2.25-2.75-2.875-3.75 1.25-2.125-4.125-2.125-2.625 1.375-2.5-3.625.375-2.625 1.625-1 2.25-4.25-.125-3.375-3.25-2.375-.5-.625-2.75z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "논산시"
            )
          }
          fill={
            document.getElementById("imgpattern_논산시") !== null
              ? "url(#imgpattern_논산시)"
              : null
          }
          d="M163.375 388.355l2 5.625.875 3.375 6.125 3 2.875-3.25h7l2.625-2.125 4.125 1.5.75-4.125 4 1 5.25-3 1-9.625-7.125-7.5-2 1.5-3.625-.125-1.125-2.75-2.75-.375-1.875-4.375 1.625-2.875v-2.375l-1.5-2.75L176 362.98l-3.5-2.125-1.75-2.75-2.25.25-3.25 8.25.5 3.875-3.5 3.625-3.25 4.5h-3.625l.25 4.75 2.75 3.375 1.25 2.5 3.75-.875z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "금산군"
            )
          }
          fill={
            document.getElementById("imgpattern_금산군") !== null
              ? "url(#imgpattern_금산군)"
              : null
          }
          d="M209.417 409.105l2.167-2.333 3.833 5.833 9.333-.333 1-8.167 10 6.333 1.667-5-1.667-4.166 2.167-2.167-2.5-5.833-3.5-3.334 1.5-3.5-.167-4-.667-4.666-1.667-2.334h-3.833l-2.5-3-4.667 1.334-6.667 6.958-2.833-2.625-4.042-3.5-.374-5.875-1.375-.375-1.708 2.417.083 5.833-2.417 4.167-1.583 9.583 2.75 2.583 2.167 9.667 4.333 6.167 1.167.333z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "부여군"
            )
          }
          fill={
            document.getElementById("imgpattern_부여군") !== null
              ? "url(#imgpattern_부여군)"
              : null
          }
          d="M120.75 353.355l-4.125 8.375 2.25 5.875 2.125 3.75 3.375 1.375-.625 2.625-2.75 1.375-3.625 4.75 4.75 3 8.875-.625.125 5.375 3.375 1.25 2.625 3.375.875 5.125 3.625-.375-.125-6.375 2.25-3.875 4.75.125 3.125-1.125 2.125.875 5.875 1-1.25-2.5-2.75-3.375-.25-4.75H159l3.25-4.5 3.5-3.625-.75-3.375-9.5-3.625-.375-5.125-7.75 3.75-2.75-2.875-3.75 1.25-2.125-4.125-2.125-2.625 1.375-2.5-3.625.375-3 2-.625 1.875-4.375-.625-3.25-2.75-2.375-.5v1.75z"
        />
        <S.G
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "보령시"
            )
          }
          fill={
            document.getElementById("imgpattern_보령시") !== null
              ? "url(#imgpattern_보령시)"
              : null
          }
        >
          <S.Path d="M85.25 351.355c-.5 0-5.625.875-5.625.875l.25 1.625 5.375.75 2.875 1.25.5-1.125-2.5-2.25-.875-1.125z" />
          <S.Path d="M102.625 381.605l2.625 2.625 8.125-.75 4-2 3.625-4.75 2.75-1.375.625-2.625-3.375-1.375-2.125-4.125-2.25-5.5 4.125-8.375v-1.75l-.625-2.75-2-4.375-3.5-5.875L109 336.48l-2.625-.375-1.625-2.875-4.375-.5L98 331.105l-3.5-.875-3.125.375-1.125 1.75.125 5.375 3.5 3.875-.625 6.5-2.625 3.375 6.75 1.625 2.5 2.875-1.125 2.375-5.25 1.625 5.375 6.875-.625 5.25-1.5 4 1.75 2.375v2.25l4.125.875z" />
        </S.G>
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "서천군"
            )
          }
          fill={
            document.getElementById("imgpattern_서천군") !== null
              ? "url(#imgpattern_서천군)"
              : null
          }
          d="M119.875 410.605l3.875-.625 3.625-4 6.625-.25 5.375-4.25 1.875-2.875-3.25.375-.875-5.125-2.625-3.375-3.375-1.25-.125-5.375-8.875.625-4.75-3-3.5 1.875-8.625.875-2.625-2.625-5.75.125-1.25 3.5-2.25 1.25.125 3.25 2.625-1.5 4.375 1.875 3 .625 4.875 5.125 2.75.25-2.25 3 1.75 2.125 1.625 1.875 1.5 2.375 1 4.375 5.125.75z"
        />
      </g>
      <g fill={fillColor} stroke={strokeColor}>
        <S.G
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "제주시"
            )
          }
          fill={
            document.getElementById("imgpattern_제주시") !== null
              ? "url(#imgpattern_제주시)"
              : null
          }
        >
          <S.Path d="M381.083 674.105l12.667-11.666.333-3.166 4.334-2.834 2.5-3 8.833-.334 7.333-3.5 7.334-4h10.333l5.667-2.5 6.333-2 8.833-.332 2.834-2.5 9 .332 2 4.834 6.166 1.666 2.834.168.5 4-.5 3.5-11.5 5.832-3.667.334-3.167 3.666h-8.666l-2.667 2.168-3.5.5-5.167 3.832-8.5.168-2.333 2.332-11 .5-.5 3.334-8.333-1-6.5 1.166-9.5 6.668-2.167 2.666-6.167-3.834-4 1.334v-8.334h0z" />
          <S.Path d="M484.583 646.439l-1.5 3.166 2 2.334 1.5-1.166.834-3.334-2.834-1z" />
        </S.G>
        <S.G
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "서귀포시"
            )
          }
          fill={
            document.getElementById("imgpattern_서귀포시") !== null
              ? "url(#imgpattern_서귀포시)"
              : null
          }
        >
          <S.Path d="M383.25 686.439l-2.167-4 4-1.334 6.167 3.834 2.167-2.666 9.166-6.834 6.334-1 8.833 1 .5-3.334 11-.5 2.333-2.332 8.5-.168 5.167-3.832 3.5-.5 2.667-2.168h8.666l3.167-3.666 4.333-.5 10.834-5.666 3.166 2.5 1.334 2-2.334 2.832 1.334 2.168-4 3.832-3.334 3.334-5.833 8-.167 3.334-7.5.832-5.5 4.5s-10.667-.5-11 0-6 6.334-6 6.334l-4.333-1.5-11 1.166-5-.5h-3.167l-2.666-1.332-2.334 1.666-9-.666-3.333 2.332-.5 3.168-2.833-.334-5.667-6-3.667-.834-1.833-3.166z" />
          <S.Path d="M394.417 706.773l-.5 3.5 1.5.332 1.333-2.332-2.333-1.5z" />
        </S.G>
      </g>
      <g fill={fillColor} stroke={strokeColor}>
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "문경시"
            )
          }
          fill={
            document.getElementById("imgpattern_문경시") !== null
              ? "url(#imgpattern_문경시)"
              : null
          }
          d="M298.083 313.939l4 2.5 7.834 3.667 1.166 7.167 5.5.333.667-2.833 2.833-.667-.166-4.833-2.334-4.5 6-5.833 2.834.5.5-1.667-3-3.667 2-10.333 3.333-.333-.25-8.46-2.25-2.125-3.75-1.375-6.5-7.625-3.125-.75-3.458 3-.167 5.333-2.667.833-6.833-2.917-6.25 5.25-1.375-1.625-2.042-.375-1.333 5.333-2.625 4.792 6.125 6.125-3.5 1-4.75-3.375-2 1.75-4.125-2.625-2.5 5-3.25 2.375-2.375.292 5.5 5.833-1.875 7 1.875 7.167-.167 4.333 4.334 1.5 2.333-3.833 5.667.5 2.666-4.667-.5-2.167 3.667-3.167 2.667-.333 1.666-1.498z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "상주시"
            )
          }
          fill={
            document.getElementById("imgpattern_상주시") !== null
              ? "url(#imgpattern_상주시)"
              : null
          }
          d="M298.75 372.772l2.167-3.667 2.333-5.333 7.834-.5 2.5-6.834 3.666-2.833 3.167 2.333 2.667-4.666 3.833-4.5-2.333-4.834-2.334-3.833-4.666-1.833-1.001-8.667-5.5-.333-1.166-7.167-7.834-3.667-4-2.5-1.666 1.5-2.667.333-3.333 3.167.167 2.667-2.667 4.167-5.667-.5-2.333 3.833-4-1.667-.167-4.833-1.875-6.5-5.458-5.833-1.042-1.417-3 3.375.875 2.25-8.333 1.792 1.166 2.667 4.5 2.5h3.5l1 3.667 3.834 4.667.166 2.667-3.333 2-.167 9.167 1.001 2.167-2.501 2.666 2.834 3.834.333 3.5-5.666 6.333 1.833 5.333 3.333.5 2.833-4 3.334 4.167 5.333 2.833 2.667-2.5 4.333.167 2.167 2 2.833 2.5 3.667-.833 2.833.498z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "예천군"
            )
          }
          fill={
            document.getElementById("imgpattern_예천군") !== null
              ? "url(#imgpattern_예천군)"
              : null
          }
          d="M339.417 327.939l2.666-5.5 3.667-2.667v-5.167l4.5-.667-.167-3.167 6.5-2.667 2.5-.167.834-6.833-4.334-5.667-3.166-5.5-4.667-.167-5-1.333.167-6.167.333-2.333-3.125-3.833-3.75 5.75-3.875-.25-3.5 3.375-.25 8.458-2.833.333-2 10.333 2.666 3.167-.166 2.167-2.834-.5-6 5.833 2 4.667.5 4.667-2.833.667-.667 2.833.667 8.333 5 2.167 3.166-3.833 1-5.667 4.5-.167 1.167 2.667 3.833-3.167h3.501v.002z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "영주시"
            )
          }
          fill={
            document.getElementById("imgpattern_영주시") !== null
              ? "url(#imgpattern_영주시)"
              : null
          }
          d="M375.583 299.105l-.333-13.5-1-3 1.667-5.167-2.5-3.167-6.167.667v3.167l-3-3.833 2.167-9.5 2.5-7.333 2.333-11.667-6-2.833-2.75 3.167-6.25.125-4.5 8-2.625.875-9.625 9.25-1.917 5.25 1.542 3.75 1 2.75 3.125 3.833-.5 8.5 5 1.333 4.667.167 3.166 5.5 2.167 2.667 8.167-.333 3.666 2.167 2.334-1.167 3.666.332z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "봉화군"
            )
          }
          fill={
            document.getElementById("imgpattern_봉화군") !== null
              ? "url(#imgpattern_봉화군)"
              : null
          }
          d="M408.417 291.439l-2.667.5-3.833-4-5.167-.333-9.167-5.5-2.5 1.167-1.333-2.5-3.667 2.167-5.166 1.667-.5-2.667 1.5-4.5-2.5-3.167-6.167.667v3.167l-3-3.833 2.167-9.5 2.5-7.333 2.333-11.667 5.833 1.5-.666-3 5-5.5 5.5 3.833 4.833 1.333 4.167-.667 3-6.333 4.333 2.5 3-1 9.5 2.167.667-2.333 2.833-2.333 3.667.833 8.666 7.333-3.5 4-2.833-1.833-6 3.333 1 6.833-1.333 3.167 6.833 4.5 2.333 5.667-4 3.5-2 4.333-6.333 4.167-3.5 3.833-5.5 1 .667 2.667 1 2.165z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "영양군"
            )
          }
          fill={
            document.getElementById("imgpattern_영양군") !== null
              ? "url(#imgpattern_영양군)"
              : null
          }
          d="M443.75 302.605l2.333-6.667-3.166-4.5 5.5-6.833-5-6.833.166-5.333-3-.833-1.666 2.667-4.167-2.5-6.667-2-4 3.5-2 4.333-6.333 4.167-3.5 3.833-5.333 1.5.5 2.167 1 2.167-.167 2 .667 6.833-.167 11.333 1.833 4.5 3.667.5 3.5 5.667 6 .667 2.667 3.667v2.167l3.833-.167 7.333 1.833 1.667-2.333 1.167-8.333-3.167-5.167 2.5-6-1-4.167 1.5-1.667 3.5-.168z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "울진군"
            )
          }
          fill={
            document.getElementById("imgpattern_울진군") !== null
              ? "url(#imgpattern_울진군)"
              : null
          }
          d="M463.417 303.772l-8.5.167-2.334 2-4-2.5-4.833-.833 2.333-6.667-3.166-4.5 5.5-6.833-5-6.833-.334-5.333-2-.833-2.5 2.667-4-3-6.5-1.5-2.333-5.667-6.833-4.5 1.333-3.167-1-6.833 6-3.333 3.167 1.667 3.166-3.833 5.667-.167-.333-5.333 5.833-5.667 3.667-.333 3.666-4.167h3.5l2.5 7 6.167 5.833-2.333 2.833.833 7.833-1 3.5 2.167 4.833-.834 6.167.834 7.667 4.5 4.5 2.5 7.667-.667 2.667.833 3.333-.5 7.333-5.166 4.165z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "안동시"
            )
          }
          fill={
            document.getElementById("imgpattern_안동시") !== null
              ? "url(#imgpattern_안동시)"
              : null
          }
          d="M397.083 362.438l-2.833-9.833-4.833-7.667-1.667-5.333-10-5.833-2.167 1.5-2.166-.333-.667 5.333-12 5-4.5-4.5-4-8-5.167-1.5-3.333-1.833-2.5 3-3.5-1.5v-2.833l1.167-.167 3.5-6 3.333-2.167v-5.167l4.5-.667-.167-3.167 6.5-2.667 2.5-.167.834-6.833-2.167-3 8.167-.333 3.666 2.167 2.334-1.167 3.666.333-.666-14.5 5.166-1.667 3.667-2.167 1.333 2.5 2.5-1.167 8.667 5.333 5.667.5 3.833 4 2.333-.5.834 8.833-.167 11.333 1.833 4.5-2.5 3.333.334 3.167-2.5 2.333 3.666 3.833-2.333 5.833-1.167 4 1.667 5.333-2.333 6.167v6.5l-6 5.667-2.334.17z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "의성군"
            )
          }
          fill={
            document.getElementById("imgpattern_의성군") !== null
              ? "url(#imgpattern_의성군)"
              : null
          }
          d="M340.583 359.605l-5 6-7.333-9.667-4.834 3-2.999-3 2.833-5.333 3.333-3.833-4.333-8.667 3.166-3.833 1-5.667 4.5-.167 1.167 2.667 3.833-3.167 1.834.167v2.833l3.5 1.5 2.5-3 3.333 1.833 5.167 1.5 3.666 8 4.834 4.5 12-5 .667-5.333 2.166.333 2.167-1.5 10 5.833 1.333 5 4.833 8.167 3.167 9.666-2 .334-.333 3.333-3.167 2.167 5 2.166-1.833 2.834 2.333 3.666-.667 1.667-5.666-3.167-5.834 3-8.333-.166-8.333-3.167-3.667 1.333-.333-5.666-7-4.667-3.667.667-1-3.334-6.5-.666-3.5-3.167-2 .001h0z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "김천시"
            )
          }
          fill={
            document.getElementById("imgpattern_김천시") !== null
              ? "url(#imgpattern_김천시)"
              : null
          }
          d="M292.916 435.105l2.334-4.832-4.334-10.335 2.5-.333 2.334 2.334 3-5.167 2.833-1.167 3.5-4.667v-5.5l3.5-.666 3.333-3.334h10.5l-1.5-4.166.834-2.167-2.167-2.333.333-3.667.834-4.5-2.834-2.833-.666-2-4.5-1.167-.167-3.333-7.333-4.167-4.667-1.5-2.167 3-2.499-.333-3.667.833-2.833-2.5-1.834 2.333 4.334 7.334-3.167.333-4.334-1.667-3.166.834 1 4.166 1.333 3-3 4.334-1.5 9-6.5 2.166-4.167 4.5.167 3.834 4.833 7.5-3.833 2.833.333 5.668 5.334 1.832 1.166 4.5 6.167-.332 3.667 3.666 6.666-1.334z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "구미시"
            )
          }
          fill={
            document.getElementById("imgpattern_구미시") !== null
              ? "url(#imgpattern_구미시)"
              : null
          }
          d="M331.916 400.105l4.167-5s7.001 2.833 7.167 2.333 3.833-6.666 3.833-6.666l9 .5-3.167-6.5 1.167-2.167-3.5-3.833-3.833 2.333-1.5-6.667-4.5 1-4.5-4.666-.667-5.167-7.333-9.667-4.834 3-2.999-3-3.167-2.333-3.666 2.833-2.5 6.834-7.834.5-2.667 5.833 5.333 1.667 6.667 4 .167 3.333 4.5 1.167.666 2 2.834 2.833-.834 4.5-.333 3.667 2.167 2.333 3.166.333 7 4.667z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "성주군"
            )
          }
          fill={
            document.getElementById("imgpattern_성주군") !== null
              ? "url(#imgpattern_성주군)"
              : null
          }
          d="M304.917 444.939l1.333-1.834-.5-3.332 5.333-1 3.667 4.664 5.167-5.664 3.5 1.664 5.5 2.5 4.833-6.832v-7.334l2.333-5-1.333-3.166-4.167-1.833-7-6.334.334-5.833-1.501-4.167h-10.5l-3.333 3.334-3.5.666v5.5l-3 4-3.333 1.834-3 5.165-2.334-2.332-2.5.333 4.334 10.333-2.334 4.834 6.334 2.5 2.667 5.832 3 1.502z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "고령군"
            )
          }
          fill={
            document.getElementById("imgpattern_고령군") !== null
              ? "url(#imgpattern_고령군)"
              : null
          }
          d="M304.583 463.273l.334-2 6-4.334-2.334-6.834-3.666-5.166 1.333-1.834-.5-3.332 5.333-1 3.667 4.664 5.333-6 8.834 4 4.833-7.164 4.833-1.168 6.667 3.334-.667 2.5-6.5.5-2.333 5.334-1.5 2.832 6 4.834-.667 5.166-9.166-1 .666 4.668 4.834 4.5v4.832l-3.334.334-3.166-4.5-4.5-2.166-7.834.332-2.833 2-3.833-.666-1.334-1.5-4.5-1.166z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "칠곡군"
            )
          }
          fill={
            document.getElementById("imgpattern_칠곡군") !== null
              ? "url(#imgpattern_칠곡군)"
              : null
          }
          d="M348.417 425.939l-4.334-1.334-.333-5.167-2.5-1.166-5.167 4.501-1.333-3.168-4.667-2.333-6.5-5.834-.166-6.333-2.501-7.833.834-2.167 3.166.333 7 4.667 4.167-5 7.167 2.333 4.333-6.5 8.5.334.334 7.166 7.333-1.833.333 10.167-3.666 4.5-6 3-2.5-1.667-1.334 1.333 1 3.667-.833 4.168-2.333 4.166z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "군위군"
            )
          }
          fill={
            document.getElementById("imgpattern_군위군") !== null
              ? "url(#imgpattern_군위군)"
              : null
          }
          d="M372.917 406.771l.666-8.5 4.667-6 5.5 1.834 3.5.833 4.333-7 6.834-1.167-.667-5.666-1.334-2.5-5.666-3.167-5.5 2.833-8.667.001-8.333-3.167-3.667 1.333-.333-5.666-7-4.667-3.667.333-1-3-6.5-.666-3.5-3.167h-2l-4.666 5.333.166 5.167 4.667 5.333 4.5-1 1.5 6.333 3.833-1.999 3.5 3.833-.833 2.5 2.667 5.666.5 7.667 7.333-1.833.333 10.167 8.834-.001z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "영덕군"
            )
          }
          fill={
            document.getElementById("imgpattern_영덕군") !== null
              ? "url(#imgpattern_영덕군)"
              : null
          }
          d="M458 365.355l-10.25-.5 1-5.75-2.25-2.5-3.5.5-4.25-4.5-.25-5-3.25-6.5-3.75-.75-2.25-4.5-.25-6.75 1.25-.5 7.333 1.833 1.167-1.583 1.667-9.083-3.167-5.167 2.5-6-1-4.167 1.5-1.667 3.5-.167 4.833.833 4 2.5 2.334-2 8.5-.167-1.417 5.585.25 6.5 4.5 5.75-.5 6.5-1.25 7-.25 8.75-6.5 11-.25 10.5z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "청송군"
            )
          }
          fill={
            document.getElementById("imgpattern_청송군") !== null
              ? "url(#imgpattern_청송군)"
              : null
          }
          d="M419.25 374.605l2-3.25-4.75-3.75 2.75-1.75 8.25 2.25 5.5 6 6-9.5v-4.25l4-3.25-4.25-4.5-.25-5-3.25-6.5-3.75-.75-2.25-5.25-.25-6-2.583-.333v-2.167l-2.667-3.667-6-.667-3.5-5.667-3.667-.5-2.5 3.333.334 3.167-2.5 2.333 3.666 3.833-3.5 9.833 1.667 5.333-2.333 6.167v6.5l-6 5.667-4.334.5-.333 3.333-3.167 2.167 5 2.166-1.833 2.834 2.333 3.666-.667 1.667 1.334 2.5 5.5.5 4.5 2 5.75-3 2.5-5.25 3.25-.748z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "포항시"
            )
          }
          fill={
            document.getElementById("imgpattern_포항시") !== null
              ? "url(#imgpattern_포항시)"
              : null
          }
          d="M446.5 395.605l-4.25.5-1.25 3.75-5.5 1.5-4-3-3-.75-.5-2.25-4.25-3.25v-2.25l-3.25-.25-2.75-4.5-9-1.75 4.75-2.75 2.5-5.25 3.25-.75 2-3.25-4.75-3.75 2.75-1.75 8.25 2.25 5.5 6 6-9.5v-4.25l4-3.25 3.5-.5 2.25 2.5-1 5.75 10.25.5 1 4.5 1.5 1.25-1.75 4-1.25.5 1 2 2.5 2.25.75 5.5 4.5 4.25-1.25 2.5-6 6 3.25 4.5 2.25 3.25 5.25 2.75 2.75-4 3.25-2.25 5.75-8.75 2 2 1.25 7.5-2.75 6.5-1.25 5.5-4 2.5 2 7-.25 6.25-1.75 2.5-6-3.25-4.75-5-2.25 3.75-6.25-.5-.75-3.25-2-2.5-3.5-11.25-5.25-8 1.75-6-1.25-1.75z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "영천시"
            )
          }
          fill={
            document.getElementById("imgpattern_영천시") !== null
              ? "url(#imgpattern_영천시)"
              : null
          }
          d="M406 434.105l-7-1-4.25-5 .5-3-1.75-3.75-.5-6-6.5-2-3.5-2.75-5 .75-1.25-3.5-3.833-1.084.666-8.5 4.667-6 9 2.667 4.333-7 6.834-1.167-.667-5.666 5.5.5 4.5 2 10 1.5 2.75 4.5 3.25.25.25 3 4 2.5.5 2.25 1 .75-1 3.25 1 5.25-3-.75-1.75-1 1.5 9.25 3.25 4.5-2.75 1-2.5-2.75h-4.75l-3.5 6-.5 7.25-5.75 4.5-3.75-.75z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "경산시"
            )
          }
          fill={
            document.getElementById("imgpattern_경산시") !== null
              ? "url(#imgpattern_경산시)"
              : null
          }
          d="M402.75 445.355l-4 .75-5.25 2-8 .5-3.75 7.25-5.5-3-3.75-4.25 1.25-2.75-1-3.25 3.25-2.5v-4.75l1.5-3.75 3.5-2v-7.5l-2.5-1.75-.5-9 5-.75 2.75 2.75 7.25 2 .5 6 1.75 3.75-.5 3 4.25 5 8 1.25-1 5.25-3.25 5.75z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "청도군"
            )
          }
          fill={
            document.getElementById("imgpattern_청도군") !== null
              ? "url(#imgpattern_청도군)"
              : null
          }
          d="M369 472.855l-5.5 2.5-9.25-7.5-2-5.25-.75-3.75.75-4.25 4.5-3.5 7.25.25-.5 4.5 7-2.5 2-4.75 2.75 3.5 6.5 3.75 3.75-7.25 6.25-.75 7-1.75 4-.75 3.25-5.75 1-5.25 2.75.5 4.5-3.25-2.75 6.5-2.5 8 5 9.25 2.25 1.25 2.75 8-5.25 2-3.5 3.25-3.5-3.5-4.25-1.75-6.25 2.25-2.5 5.25-5.5.25-2.75 3.75-7.25-.75-5.25-1.75-4-.75z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "경주시"
            )
          }
          fill={
            document.getElementById("imgpattern_경주시") !== null
              ? "url(#imgpattern_경주시)"
              : null
          }
          d="M458 457.355l-7.25 4.75-4.5-1.25-.5-7-6.5-1.75-6.75.25-1.25-1-3 2.5-4.75.75-3.25 6.5 3 3.5-4.25-.75-2.75-7.25-2.25-1.25-5-9.25 5.25-14.5 1.25-1.25.5-7.25 3.5-6h4.75l2.5 2.75 2.75-1-3.25-4.5-1.5-9.25 4.5 1-.75-4.5 1-3.25 2.75.25 3.25 2.75 5.5-1.5 1.25-3.75 4.25-.5 1.25 2.75-1.75 5 5.25 8 3.5 11.25 2 2.5.75 3.25 6.25.5 2.25-3.75 4.75 5 6 3.25.5 2.75-2.75 3.25-.5 8.75-1.75 6 .25 2.75-4.25 4.75-10.25-4.25z"
        />
        <S.G
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "울릉군"
            )
          }
          fill={
            document.getElementById("imgpattern_울릉군") !== null
              ? "url(#imgpattern_울릉군)"
              : null
          }
        >
          <S.Path d="M493.25 352.105l-3.25-.25-2.25 1.5-3.75 2.5-4.25.25-2.75.5 1.25 2.5 1 2.5v2l8 3 .75-2 4-2.75.25-6 1-3.75z" />
          <S.Path d="M504.25 365.105l-1.25 2.5 2 1 1.25-2.5-2-1z" />
        </S.G>
      </g>
      <g fill={fillColor} stroke={strokeColor}>
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "대구 동구"
            )
          }
          fill={
            document.getElementById("imgpattern_대구") !== null
              ? "url(#imgpattern_대구)"
              : null
          }
          d="M367.25 428.605l-3.333 1.834-1.334-1.834 1.667-3.166.667-2.834-1.167-4.333-3-7.334 3.333-4.166 8.834-.001 3.833 1.084 1.25 3.5.5 9 2.5 1.75-.417 7.5-2.5 1.668-6.666-.668-.5-1.832-3.667-.168z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "대구 북구"
            )
          }
          fill={
            document.getElementById("imgpattern_대구") !== null
              ? "url(#imgpattern_대구)"
              : null
          }
          d="M360.917 428.773l-2.667.332-.333-2.5-3.167-.5-3.667 1.168-2.666-1.334 2.333-4.166.833-4.168-1-3.667 1.334-1.333 2.5 1.667 6-3 3.333 7 1.167 4.333-.667 2.834-1.5 2.666-1.833.668z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "수성구"
            )
          }
          fill={
            document.getElementById("imgpattern_수성구") !== null
              ? "url(#imgpattern_수성구)"
              : null
          }
          d="M361.75 432.273l-.333 5-1.667 1.5 4.5.5 3.333 1.5 5.167 1.832 3.25-2.5-.417-4.666 2.5-4.166-6.666-.668-.5-1.832-3.667-.168-3.333 1.834-2.167 1.834z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "대구 중구"
            )
          }
          fill={
            document.getElementById("imgpattern_대구") !== null
              ? "url(#imgpattern_대구)"
              : null
          }
          d="M357.75 431.939l.5-2.834 4-1 1.667 2.334-2.167 1.834-4-.334z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "대구 서구"
            )
          }
          fill={
            document.getElementById("imgpattern_대구") !== null
              ? "url(#imgpattern_대구)"
              : null
          }
          d="M350.25 430.105l.833-2.832 3.667-1.168 3.167.5.333 2.5-.5 1.834-2.667 1h-1.833l-3-1.834z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "대구 남구"
            )
          }
          fill={
            document.getElementById("imgpattern_대구") !== null
              ? "url(#imgpattern_대구)"
              : null
          }
          d="M356.083 433.773l-.666 2.666 4.333 2.334 1.667-1.5.333-5-4-.334v-1l-1.5.834-.167 2z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "달서구"
            )
          }
          fill={
            document.getElementById("imgpattern_달서구") !== null
              ? "url(#imgpattern_달서구)"
              : null
          }
          d="M347.417 439.105l2.166 1.334 2.667 2.666 4.5 1.5 1.833-2.832 1.167-3-4.333-2.334.666-3.166.167-1.5-1.167.166h-1.833l-3-1.834-4.833.668-.167 5.664-.5 2 2.667.668z"
        />
        <S.G
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "달성군"
            )
          }
          fill={
            document.getElementById("imgpattern_달성군") !== null
              ? "url(#imgpattern_달성군)"
              : null
          }
        >
          <S.Path d="M345.417 430.773l4.833-.668.833-2.832-7-2.668-.333-5.167-2.5-1.166-4.667 4.001-2.833 4.832v7.168l4.833-1.168 6.667 3.334.167-5.666z" />
          <S.Path d="M342.583 466.773l7-.168 1-5.5.917-2.25.75-4.25 4.5-3.5 7.25.25-.5 4.5 7.417-2.582 1.583-4.668 1.25-2.75-1-3.25-8.5-3.332-4.5-.5-1 2.332-2 3.5-4.5-1.5-2.667-2.666-2.5-1.666-2.333-.334-6.667 1-3.833 8.166 6 4.834-.667 5.166-9.166-1 .666 4.668 4.5 4.5.334 4.832 6.666-3.832z" />
        </S.G>
      </g>
      <g fill={fillColor} stroke={strokeColor}>
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "울산 북구"
            )
          }
          fill={
            document.getElementById("imgpattern_울산") !== null
              ? "url(#imgpattern_울산)"
              : null
          }
          d="M456.75 471.355h-3.375L451 472.73l-.5-7.125.25-3.5 7.25-4.75 10.25 4.25 1.25 4.5 2.125 3-.25 3.375-1.5 2-3 .75-2.625 2.5v4.75l-6.375-4.75-.625-4.5-.5-1.875z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "울산 중구"
            )
          }
          fill={
            document.getElementById("imgpattern_울산") !== null
              ? "url(#imgpattern_울산)"
              : null
          }
          d="M455.875 477.98l-4.5.125-1 .875-2.125-1.375-2.125-.25-.375-3.375 3.25-1.5 2 .25 2.375-1.375h3.375l.5 2.25.625 4.125-2 .25z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "울산 동구"
            )
          }
          fill={
            document.getElementById("imgpattern_울산") !== null
              ? "url(#imgpattern_울산)"
              : null
          }
          d="M463.25 484.98l1-2.5v-4.75l2.625-2.5 3-.75 1.375 1.75-1.125 2.875-.125 5.625-1.625 3-3 2.375-.375-4.25-1.75-.875z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "울산 남구"
            )
          }
          fill={
            document.getElementById("imgpattern_울산") !== null
              ? "url(#imgpattern_울산)"
              : null
          }
          d="M462 489.605l-3.875 2.375-2.375-3.625-3.5-2-4.75-5.125-3.5-1 2.125-2.875 2.125.25 2.125 1.375 1-.875 6.5-.375 5 3.625-.875 2.5-.25 2.375.25 3.375z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "울주군"
            )
          }
          fill={
            document.getElementById("imgpattern_울주군") !== null
              ? "url(#imgpattern_울주군)"
              : null
          }
          d="M459.5 507.605l-.875-4.25.875-2.625-.625-2.75 1.25-2.25-2-3.75-2.375-3.625-4.25-2.25-4-4.875-3.5-1 2.125-2.875-.375-3.375 3.625-1.625 1.625.375-.5-7.125-.125-3.125-4.125-2-.5-6.625-6.5-1.75-6.75.25-1.25-1-3 2.5-4.75.75-3.25 6.5 2.375 3.375-3.625.125-5.25 2 2.125 3.125-.75 3.75-5.25 3v2.875l3 2.5 1.5 1.5 6.5.875 5.875 4.25 6.125 8.25 5.625-.375 2.875 3.75-2 3.75 5.25.75 2.375-.875 2.5 2.125.375 5.75 1.875 1.625 4.75-3.875 2.625-.625.375-1.125z"
        />
      </g>
      <g fill={fillColor} stroke={strokeColor}>
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "거창군"
            )
          }
          fill={
            document.getElementById("imgpattern_거창군") !== null
              ? "url(#imgpattern_거창군)"
              : null
          }
          d="M243 446.855l4.75 3.5.5 3 5-1.5 3.5 4 4.75 4 3.75 4 3-.75.25 7.75-4 6.5 4.25 2.25 1.25 4.25 8.75 3 2.25-6 3-6.25 1.75-8 5.75-6 3.75-1-2.25-6.75-2.25-7.5-.75-1.75 6.25-7.25-2.5-1.5-7.5 1.584-4.25-3.584-5.584.25-1.166-4.5-5.334-1.832-.166-1.918-3 .75-2 4.5-7 4.75-6.5.75-1.75 5.75-6.5 5.5z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "합천군"
            )
          }
          fill={
            document.getElementById("imgpattern_합천군") !== null
              ? "url(#imgpattern_합천군)"
              : null
          }
          d="M297.25 508.855l-5.25-7h-3.75l-6-9.5-3.5-6.25 5.25-11.5 1.75-8 5.75-6 3.75-1-4.5-13.5-.75-2.5 6.25-7.25 3 1.25 2.667 5.834 3 1.5 3.666 5.166 2.334 6.834-6 4.334.583 1.832 3.583 1.334 1.334 1.5 3.833.666 2.833-2 7.834-.332 4.5 2.166 3.166 4.5-2.083 2.916.25 5-1.75 2.75 2.75 4.5v3l-10.25-2.25-6.25 4.25-4.75 1.75-.5 6.5-1.25 5.5-5.75.5-5.75 3.5z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "함양군"
            )
          }
          fill={
            document.getElementById("imgpattern_함양군") !== null
              ? "url(#imgpattern_함양군)"
              : null
          }
          d="M247.25 516.105l4.75-4 6.5-15.25 2.25-4.75.5-4.25 1.25-4 3.75-5.5-1.75-1 4-6.5-.25-7.75-3 .75-3.75-4-5.5-4.75-2.75-3.25-5 1.5-.5-3-4.75-3.5-.5 3.25-1 6.5-3 2.5-2 5.5 2 5.75-2.5 2.5-1 3.25-3 2.25 4.25 4.5 3.75 6.75-1.75 3 1 4 3.75 1.5-1.75 4.5-5.25 4.75-.5 4.25 2 3.25 9.75 1.25z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "창녕군"
            )
          }
          fill={
            document.getElementById("imgpattern_창녕군") !== null
              ? "url(#imgpattern_창녕군)"
              : null
          }
          d="M335 494.105l3.75-4-4.75-3.75-2.25-.25-2.75-4.5 1.5-4-.25-4.5 2.333-2.166 3.334-.334 5.833-3.75 7.833-.25 1-5.5.667-1.5 1 3 1.25 4 10 8.75-3.25 1.5.75 4-2.5 2.25 1.5 3.25-1.25 3 1.25 5 5.25 1 3.5 4.75-.5 6.75-6.75-2.25-3.5 2-7.25-3-4.75 3-5-.75-.75-4.5-6.25-2.5 1-4.75z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "밀양시"
            )
          }
          fill={
            document.getElementById("imgpattern_밀양시") !== null
              ? "url(#imgpattern_밀양시)"
              : null
          }
          d="M387.25 510.605l8-6.25 4.5-5 4 .25-1.25-4.25 6.25-2.25-.25-6.75 3-5.5-1.625-1.5v-2.875l5.25-3 .75-3.75-2.125-3.125-3.5 3.25-3.5-3.5-4.25-1.75-6.25 2.25-3.25 5.25-5 1-2.5 3-7.25-.75-9.25-2.5-8.75 4 .75 4-2.5 2.25 1.5 3.25-1.25 3 1.25 5 5.25 1 3.5 4.75-.5 6 4.75.25 5.75 5.25 8.5-1z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "양산시"
            )
          }
          fill={
            document.getElementById("imgpattern_양산시") !== null
              ? "url(#imgpattern_양산시)"
              : null
          }
          d="M430.5 507.605l-1.5 9.5-12 5-6.75-5.25-.75-4.25-5.5-4.25-5.75-.5-1.5-4.75 3-3.75 4 .25-1.25-4.25 6.25-2.25-.25-6.75 3-5.5 3.5 2.75 6.5.75 5 3.5 6.375 8.875 5.625-.375 2.875 3.75-2 3.75-.875 3.75-3 2-3-2.25-2 .25z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "김해시"
            )
          }
          fill={
            document.getElementById("imgpattern_김해시") !== null
              ? "url(#imgpattern_김해시)"
              : null
          }
          d="M388.5 541.605l-7.75-2.75-.25-5.25-2-.5-1-5.75-4-9.25 5-3.25 1.25 1.75 3.25-5.25 4.25-.75 9.5-7.5 1.5 4 5.75 1.25 5.5 4.25.75 4.25 5.75 4.5-2.25 5.75-7 2.75-2.5 2.5s-4.5.25-5.25.25-2 4.5-2 4.5l.25 3.5-3.5-1.75-1.75 2.25-3.5.5z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "창원시"
            )
          }
          fill={
            document.getElementById("imgpattern_창원시") !== null
              ? "url(#imgpattern_창원시)"
              : null
          }
          d="M358.875 509.605l-1.625 2.375.25 3.375 1.875 1.75v2.75l1.375 4.125-4.75-.75-4.875 2.25-2-2-1.375 3-2.375 4.5 2.25 3.75-.625 2.5-3.125.125-2.125 3.625-3.375-2.625-1.75-3.625-3.5 2.125-1 8.75-1.5 3.375 4.125 1.5 3.625 3 2.875.25 2.25 2.125 2.875-2-3-2.75 1.375-1.375 4.25 1.5 1.875-.75 2.5-1.875 3 3.375 2.75.75-1.375 3.125 3 .375-.875 1.75 5.375-.875 1-2.75-1.875-1.5-.375-1.75-2.5-5.5.625-2.5-2-2.75-1.625-2.875 2.875-2.75 1.625 3.875 2.125 4v2.25l2.375-1.875 3.25 1.75 2.625-1.75 1.375 4-1.375 3.25 4 1.625 4.625-.25 4.5-2.25.375 3.375 4.125-1 2.625-2.25-.5-2.875-4.25-2.75-.875-2.375-7.25-2.625-.25-5.25-2-.5-1-5.75-3.875-8.75 4.875-3.75 1.25 1.75 3.25-5.25-4.25.25-6.125-5.125-4.375-.375v.75l-6.75-2.25-3.5 2 .875 3z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "함안군"
            )
          }
          fill={
            document.getElementById("imgpattern_함안군") !== null
              ? "url(#imgpattern_함안군)"
              : null
          }
          d="M322.25 527.773l-2.167-1.5 3.667-3.668-.5-3.5 1.5-4.166 1.667-5 3.166 1.166 3 2.168 3.5-.168-.666-2.5 4-.166 1.333-4.166 5.25.332 4.75-3 6.833 3.5 1.292 2.5-1.125 2.168-.5 3 1.667 2.666.458 2.416 1.375 4.125-5.167-.707-4.166 1.666-2.292-1.459-3.375 7.459 1.875 3.791-.625 2.5-3.125.125-2.125 3.625-3.375-2.625-1.625-3.082-3.625 1.582-3.375-2.25h-3l-4.5-6.832z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "의령군"
            )
          }
          fill={
            document.getElementById("imgpattern_의령군") !== null
              ? "url(#imgpattern_의령군)"
              : null
          }
          d="M310.417 525.273l-2.834-4 .5-5.5-4-3-3.333 3-3.5-2.168v-4.75l5.75-3.5 5.75-.5 1.25-5.5.5-6.5 4.75-1.75 6.25-4.25 10.25 2.25v-3l2.25.25 4.75 3.75-3.75 4-.583 4.168 5.833 3.082.75 4.5-1.583 4.584-4 .166.666 2.5-3.5.168-2.666-2-3.5-1-3.167 8.832.5 3.5-3 3.5-6.5.334-3.833-1.166z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "산청군"
            )
          }
          fill={
            document.getElementById("imgpattern_산청군") !== null
              ? "url(#imgpattern_산청군)"
              : null
          }
          d="M269.25 526.773l-4.167 5.166h-8.166l-4.334-4.334-5.667-3.5.333-8 4.333-3.666 6.917-15.584 2.25-4.25.667-5.666 1.083-3.084 3.75-5.5 2.5 1.25 1.25 4.25 8.75 3 9 14.584 4.25.416 4.917 6.418.333 5.332-4.333 1.834-1 3.166-4.834 1-4.5 5.5-1.5 3.334h-5.833l-1.333 3.666-2-.332-1.167-3.668-1.499-1.332z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "진주시"
            )
          }
          fill={
            document.getElementById("imgpattern_진주시") !== null
              ? "url(#imgpattern_진주시)"
              : null
          }
          d="M307.417 551.939l-2.834-3.166-6.333 2.332-2.167-2.666-3.333-1.5-5.833 2.334-2.5-6.834-6.334.166-2.333-3.832-4-2.5-.167-4.334 2.334.166 1.333-3.666h5.833l1.5-3.334 4.5-5.5 4.834-1 1-3.166 4.333-1.834 3.5 2.168 3.333-3 4 3-.666 4.832 2.666 4.168 4.167 1.666 5.833-.166 2.167 1.166 4.5 7.166h3l3.375 2.25-1 8.75-1.542 2.5-13.5-.5-4.333 1.834-2.5 3.834 3.167 1.832-3.5 3.334-4.5-2.834 2-3.666z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "고성군"
            )
          }
          fill={
            document.getElementById("imgpattern_고성군") !== null
              ? "url(#imgpattern_고성군)"
              : null
          }
          d="M299.917 578.939l4.833-10.334 2.667-.5-1.167-5.166 3.667-2.334v-2.166l3.166-3.334-2.833-1.832 2.5-3.834 4.333-1.834 13.834.334-.292 1.041 4.125 1.5 3.625 3 3.375.625 1.75 1.75-2.583.75-5.167 1.334-2 3.5-1.5 4 4-4 2.167-2 2.833-.166 3-2.334 1.833-.666-1.666 3.332 3.666 2.668-.166 4-5.667 1.5-3.333-.668-.167 1.334 4 1.5-6 1.834-2.333 2.832-4 1.834-2.334-2.666-2.5 2.166-1.833 5.5-3-.334-1.833-4.666-6.5.334-.334 5.666h-9.166l-3.5-1.334.5-2.166z"
        />
        <S.G
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "거제시"
            )
          }
          fill={
            document.getElementById("imgpattern_거제시") !== null
              ? "url(#imgpattern_거제시)"
              : null
          }
        >
          <S.Path d="M354.083 578.939l4.667 2.666 3.5-2 3.167 2.5-3.167-5.666 2.5-4.666 3 .166 3-3.166 1.833-3.668.334-3.5 5.166-.166v2.5l-3.166 2.666.5 4.668 2.833 1.5.333 5.5-2.166 4.832 2 3.168 3.166-2.834.334 3.166-1.834 2.168.5 1.832-3.166.168-.834 2.832 3.5 1.5 2 3.5-2.833-.166-2.5-2.334-5.167.168.334 3-2.667 1.832.333 4.5 3.834 1.5-1.5 2.168-3-1-2 .332 1.5 2.334-5.834 1.5-1.666-1 2-3.166-.667-1-1.5-2 .5-3-3.167.666-.166-2.834 3.333-2.666 1.833-3.334-2.833-4.166-3.167 2-4 1.5-1.166 1.5-.834-2.666-2.666-2-.334-5 3.667-4.168 2.333-2.166z" />
          <S.Path d="M354.083 570.773l-1.833 1.332.167 4s3.333 1.168 3.333.168v-3l-1.167-.168-.5-2.666" />
        </S.G>
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "사천시"
            )
          }
          fill={
            document.getElementById("imgpattern_사천시") !== null
              ? "url(#imgpattern_사천시)"
              : null
          }
          d="M276.583 544.273l-4-.5s-2.166 1.834-1.666 2 3.666 3.666 3.666 3.666l-.5 3.666 1.667 4.5.833 5.834v3.334l3.667 3.832 1.5-1.666 4.167.334 2-4-4.5-3.334 2.166-1.834 2.334 2.168 1.166-5.668 4-3.5-2.166 6.834-.5 4.334 2 1-2.667 3.332 1.833 1.5-2.166 4 3.833 4.168 6.167 2.832.166-2.166 5.167-10.334 2.667-.5-.667-5.166 3-3 .167-1.5-4.5-2.834 2-3.332-2.834-3.5-6.333 2.332-1.833-2.332-3.667-1.834-5.333 2-3.334-6.334h-6l-1.5 1.668z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "하동군"
            )
          }
          fill={
            document.getElementById("imgpattern_하동군") !== null
              ? "url(#imgpattern_하동군)"
              : null
          }
          d="M236.083 516.105l-5 4.5 1.833 3.168 4.833 6.332-.667 8.168 8.5 7.666.667 6 5 4 1.333 2.666 2.667 1.168 1.333 5.5 1.834-.168-.667 3.834-2.333 2.334 1.833 4 5.667.832 2.833-1.832 1.167 1.666 5.833-1.5 2.667-4.666v-4.668l1.333-.5-1-7-1.667-4.5.5-3.666-4.166-4 2.166-1.666 4 .166 1.5-1.334-2.333-3.832-4-2.5-.167-4.334-.833-3.834-1.5-1.332-4.167 5.166-8.166-.5-4.334-3.834-5.667-3.5.333-8-9.75-1.25-1.415 1.25z"
        />
        <S.G
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "남해군"
            )
          }
          fill={
            document.getElementById("imgpattern_남해군") !== null
              ? "url(#imgpattern_남해군)"
              : null
          }
        >
          <S.Path d="M276.583 580.939l-1.833-3.5-4-1.334-3.833 2.334s.666 3.332.166 3c-.5-.334-2.833-.166-2.833-.166l-.667 5.332-2.166 2.5 2.833 6.334 2.167 6.166-.167 3.668-1 1.666 4.5 3.334 4.167-.334.166-4.834 3.334-2.166 2.833.834v6.332l3 3.334 4.333-2 2.834 2.834 2.166-1.334-1.5-2.5 2.834-3.666-.667-4.668.333-4-1.666-2.832-3.167-1-5.167 1.166-4 2.5-1.166-3-2.667-3.334-1.833-6 2.833-2.832-.167-1.834z" />
          <S.Path d="M289.75 579.773l-4.5.832-3.667 5.5 1.5 5.834h8l4 1.166-1.333-3.666.833-3.166-4-2.834-1.833 4.334-.5-3.668 1.167-2 .333-2.332z" />
        </S.G>
        <S.G
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "통영시"
            )
          }
          fill={
            document.getElementById("imgpattern_통영시") !== null
              ? "url(#imgpattern_통영시)"
              : null
          }
        >
          <S.Path d="M343.917 583.105l-3.5 3.5-3.667 2.168-1.167 2.832 2.834.834 2.666.666 1.834-2.5 1.833-4 1.667-1.666-2.5-1.834z" />
          <S.Path d="M332.917 591.105l-2.667 1 1 4.334 5.667 6 4.333-5.334-4.833-1.832-3.5-4.168z" />
          <S.Path d="M348.083 596.939l-2.333 2.334 2 5.166 2.167-2.334-1.834-5.166z" />
          <S.Path d="M345.917 607.939l-1.5 4.834 2.833-2.668-1.333-2.166z" />
          <S.Path d="M343.083 571.773l-2.166 2.832.166 4-1 4.834-3 4-2.333-2.5-2.167 1.834-6.5-2.668.167-2.5 5.833-.5-1.666-4.666 4-1.834 2-3.166 6.333-1.5.333 1.834z" />
          <S.Path d="M314.25 589.439h-6.167l3.334 4.334 2.166-2.5.667-1.834z" />
          <S.Path d="M317.25 593.439l-4.167.834 5.167 5 3-2.168-4-3.666z" />
          <S.Path d="M319.083 622.273l-2.333.332.5 3.5 4.167-.5-2.334-3.332z" />
          <S.Path d="M309.25 612.105l-1.333 2.334 3.333 2 1-2.166-3-2.168z" />
        </S.G>
      </g>
      <S.G
        stroke={strokeColor}
        onClick={(e) =>
          setAreaHandler(
            e.currentTarget.getBBox().width,
            e.currentTarget.getBBox().height,
            "부산광역시"
          )
        }
        fill={
          document.getElementById("imgpattern_부산광역시") !== null
            ? "url(#imgpattern_부산광역시)"
            : fillColor
        }
      >
        <S.Path
          d="M2541.9-515.87h2.55l2.55 1.912 2.55-1.912 1.912-3.984 5.418.8 1.594-.8 2.869 2.55v4.462l2.072 2.391v2.072l-3.666-2.072-1.275 3.665 1.275 2.231-1.275 3.347h-1.594l1.594 2.072-1.594 5.418h-1.912v5.1l-3.506 2.072-1.912 3.984H2547V-484l-2.55 1.434h-2.55v2.231l.8 1.753-1.594 4.3h-2.709v-1.275h-2.709l-1.594-3.028-1.594 3.028v1.275l-2.235 1.282a16.647 16.647 0 00-1.594 2.231 44.421 44.421 0 000 4.622l-2.072-2.391v-3.506h-1.434l-.8 1.275.8 2.231v3.665l-.8-2.231-2.869 3.028-1.753-4.462v-7.809l-2.072.8-1.594 3.506h-2.072v-4.94l-1.912 1.434v4.781h-6.693l-2.39-1.275 2.39-2.231-.8-2.072-4.462-3.187v-3.028h3.665s1.281-1.441 1.597-1.441a35.08 35.08 0 013.347 1.434l-.8-4.622 2.869-3.825h5.259l1.594-2.709 6.693-2.231 3.347-6.853.956 1.594 11.474-5.578z"
          transform="translate(-2025.128 1036.605) translate(-87 -13)"
        />
        <S.Path
          d="M2531.313-470.928l4.849 3.825 1.115-.956-1.115-2.869v-1.594l-1.115-.8-2.55.8z"
          transform="translate(-2025.128 1036.605) translate(-87 -13)"
        />
        <S.Path
          d="M2507.475-468.7l3.028-.8v1.912h-2.231z"
          transform="translate(-2025.128 1036.605) translate(-87 -13)"
        />
        <S.Path
          d="M2499.375-465.669l1.407.637 1.115 3.984s1.434.637 1.594 1.116a25.464 25.464 0 010 3.506l2.072-1.753a2.857 2.857 0 01-.8-1.753c0-.956 2.39-5.737 2.39-5.737l-.8-3.028h-1.594z"
          transform="translate(-2025.128 1036.605) translate(-87 -13)"
        />
      </S.G>
      <g fill={fillColor} stroke={strokeColor}>
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "무주군"
            )
          }
          fill={
            document.getElementById("imgpattern_무주군") !== null
              ? "url(#imgpattern_무주군)"
              : null
          }
          d="M230.083 429.605l1.333-3.332-3.667-4.5v-3.001l-3-6.5 1-8.167 10 5.833 1.667-4.5-1.667-4.166 2.167-2.167 3.667 4.167 2.667-2.667 3 4.833 5.667 1.167 1.166 2.333 10.167-3.333 3.833 1.833.5 3.334 5.167 7.333-4.167 3 .167 3.75-3 .75-2 4.5-7 4.75-6.5.75-1.75 5.75-3.083 1.75-4.5-3.332-4.833-.5-.667-3.334-2.333-5.5-4.001-.834z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "진안군"
            )
          }
          fill={
            document.getElementById("imgpattern_진안군") !== null
              ? "url(#imgpattern_진안군)"
              : null
          }
          d="M191.75 445.273l4.833-8.668 2.5-7.666v-4.166l2-.5.5-8.668-1.667-1.667 3-2.5 1.667-6.833 3.667 4.167 1.167.333 2.167-2.333 3.833 5.833 9.5-.667 2.833 6.834v2.667l3.667 4.5-1.333 3.666 4 .834 2.667 5.834-2.333.166-1.333 4.5-1.833 1.5-6-1.5-3 2 .333 7-4.833 5-1.167 6.5.833 3.834-.5 4-5 .332-.833-2.166-3-1.5-4.5-2.834-5.333-.332s-3.833-.168-3.833-1.334.167-7.334.167-7.334l-3-4.666.164-4.166z"
        />
        <S.G
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "전주시"
            )
          }
          fill={
            document.getElementById("imgpattern_전주시") !== null
              ? "url(#imgpattern_전주시)"
              : null
          }
        >
          <S.Path d="M164.917 438.773l-.167-4.168-3.667-1.5-1.667-1.5-2.667-3.832 2.333-1 3.167.666 4-.834h8l3.667 7.168 4.667-.5 2.167 5.164 1.667.668-1.167 2-6-.334-2.833-3.334-5.167-.5-1.667-1-1.667 1-2.999 1.836z" />
          <S.Path d="M165.917 445.105l-.5-3.5.333-1.5-.833-1.332 4.667-2.834 1.667 1 5.167.5 2.833 3.334 6 .332-4.5 4.668-3.667-.168-2.5 3.5-5.833 1.168-.667 2.332-3.667-3.332.667-2.168.833-2z" />
        </S.G>
        <S.G
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "완주군"
            )
          }
          fill={
            document.getElementById("imgpattern_완주군") !== null
              ? "url(#imgpattern_완주군)"
              : null
          }
        >
          <S.Path d="M179.417 452.773l-5.5 4.666-.167 6.166-.167 3.168-5.667 6-.167-9.668-2.667-2.166 2.5-7.834 1.167-2.832 5.833-1.168 2.5-3.5 3.667.168 3.167-3.168 2.5-3.5-1.667-.666-2.167-5.166-4.667.5-3.667-7.168h-8l-4 .834-.333-3.5 4-.166 3.333-4.835.833-7.333 3.333-2.5-.833-4 1-3-1-2.167 2.667-2.833h7l2.167-1.833L189 396.48l.75-4.125 4 1.583 4.667-3.666 3.333 2.666 2.167 9.667 1.333 2.167-2.333 6.666-2.667 2.834 1.333 1.333-.5 8.668-1.5.166-.5 4.5-2.5 7.666-4.833 8.668-3.833 4.164.667 2.168.833 2.666.5 5-1.5.166-2.833-2.666-2.333-.834-1.667-2.832-2.167-.332z" />
          <S.Path d="M156.75 436.105l2.167-4.832 2.167 1.832 3.667 1.5.333 3.5.667 2-.333 1.5.5 3.5-2.5-1-4.333-2.332-2.335-5.668z" />
        </S.G>
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "익산시"
            )
          }
          fill={
            document.getElementById("imgpattern_익산시") !== null
              ? "url(#imgpattern_익산시)"
              : null
          }
          d="M153.583 426.105l-3-1.166h-11.667s5-8.334 5-8.834 2.167-6.667 2.167-6.667l-4.833-4.166-1.167-4.167 1.167-2.5.25-6.375 2.25-3.875 4.75.125 3.125-1.125 2.792 1.083 5.208.792 3.292-1.125 3.333 9.25 6.333 2.583 1 2.167-1 3 .833 4-3.333 2.5-1 7.667-3.333 4.167-3.833.5.167 3-3-.166-2.333 1-3.168-1.668z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "장수군"
            )
          }
          fill={
            document.getElementById("imgpattern_장수군") !== null
              ? "url(#imgpattern_장수군)"
              : null
          }
          d="M203.083 480.273l2.333-3 .5-6 6-1.668 5-.332.5-4-.833-3.834 1.167-6.5 4.833-5-.333-7 3-2 6 1.5 1.833-1.5 1.333-4.5 2.333-.166.333 2.666 4.833.834 5 3.666-3.915 3.416-1.5 9.75-2.417 2.168-2.583 5.832 2 5.75-2.417 2.084-1.083 3.666-2.583 2.334-2 3.334.333 6.666-2.667 4.166-4.667-.332v-4l-6-5.5-3.5-.334-4.667-2.166-1 1.832-5.166-1.832z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "남원군"
            )
          }
          fill={
            document.getElementById("imgpattern_남원군") !== null
              ? "url(#imgpattern_남원군)"
              : null
          }
          d="M181.25 513.73l2.875-4 2.125-4.875 3.375-.375.5-3.125 3.75-.75 3.5-5.125-.75-3.25.75-2.375h5.75l-.875-3.125-1.25-1.875-.375-3.25 2.75-1 4.875 1.5 1-1.832 4.375 2.332 3.792.168L223 488.23l.417 4.043 4.667.332 2.667-4.166v-6.959l1.667-3.041 3.833 4.416 3.75 6.75-1.75 3 1 3.625 3.375 1.625-1.75 5.125-4.876 4.375-.625 3.875 2.125 3.625-6.25 5.25-4.25-4.25-7-4.5-6.875-.25-6.375 8.625-4.5-2.25-5.25 3.375-4.125-2.5-3.5-.25-3.125-3.625-2.25 3.875-3.125-1.125.375-3.5z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "임실군"
            )
          }
          fill={
            document.getElementById("imgpattern_임실군") !== null
              ? "url(#imgpattern_임실군)"
              : null
          }
          d="M178.875 495.23l-3.75-.625-1.875-5.5-4.875-1.5v-2.75l2.375-2.125-2.375-2.125-.125-4.75 1.625-1.625-1.5-2 5.208-5.457.042-9.168 5.792-4.832 2.167.332 1.667 2.834 2 1.041 3.167 2.459 1.208-.459-.208-4.707-1.5-4.834 3.458-3.584.208 3.584 3 4.666-.083 7.75 2.625.875 6.458.375 7.5 4.334.833 2.166-5.667 1.375-.75 6-2.5 3.625-2.375 1 .375 3.25 1.25 1.875.875 3.125h-5.75l-.75 2.375-8.625.5-3.125-.875-1.5-1.625-2.75 2-.75 2.875-1 .125z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "순창군"
            )
          }
          fill={
            document.getElementById("imgpattern_순창군") !== null
              ? "url(#imgpattern_순창군)"
              : null
          }
          d="M138 492.605l10.25-.375.375-4.25-.25-2.625 5.375-4.625 2.5 2.125 2.875-.875 4.875 5.625h4.375l4.875 1.5 2.25 5.5 4.375.5.75-2.875 2.75-2 1.5 1.625 3.125.875 8.625-.5.75 3.25-3.875 5.25-3.375.625-.5 3.125-3.375.375-1.875 4.5-3.125 4.375-8.75 7-8.125-2.5-1.125-3.125 2.375-.625-.75-6.375-3-.625-1-2.375 3-1.25v-2.875l-1.5-1.25-.875-4.125-4.25.5-1.75 4.25-1.75 1.375-.25 2.875-4.125.75-3.75-3.875-.875-3.375-3.5-2.125-3.5-1.75.25-1.625z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "정읍시"
            )
          }
          fill={
            document.getElementById("imgpattern_정읍시") !== null
              ? "url(#imgpattern_정읍시)"
              : null
          }
          d="M142 449.105l-.75 1.375.375.875L139 453.48l-6 1.625 2.875 2.75-1.125 2.375-7.875.375-5 3.5-1.5 6.25 1.25 7.75 2 .375 2.5-.875v3.875l.25 3.25 1.625.75-1.125 3.375 1 5.375 5-.125 1.5-3.125 3.625 1.625 10.25-.375.375-4.25-.375-2.25 5.5-5 2.5 2.125 2.875-.875 4.875 5.625h4.375v-2.75l2.375-2.125-2.375-2.125-.125-4.75 1.625-1.625-1.875-2.5-.25-8.625-2.5-2.5-1.875 2.25-4.25-.5L156 459.23l-.75-2.75-3-2.375-3.625.75-2.375-3.75-4.25-2z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "김제시"
            )
          }
          fill={
            document.getElementById("imgpattern_김제시") !== null
              ? "url(#imgpattern_김제시)"
              : null
          }
          d="M127.875 441.73l-10-5.75 3.75-4.125 3-.75 4.25 1.125 2.25-4.25 5.875-3h2.5l11.083-.041 3 1.166 3.167 1.668 2.167 3.5-2.167 4.832 2.333 5.668 7.167 3.207-1.625 3.875 3 3.625-2.375 7.625-1.875 2.75-4.25-.5L156 459.23l-.75-2.75-3.375-2.25-3.25.625-2.375-3.75-4.25-2-.75 1.375.375.875L139 453.48l-6 1.625-4.625-6.5L127 443.98l1.5-1-.625-1.25z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "부안군"
            )
          }
          fill={
            document.getElementById("imgpattern_부안군") !== null
              ? "url(#imgpattern_부안군)"
              : null
          }
          d="M114.875 478.73l-4.75-5.5-10 .875-5 2.5-7.625-6.25.25-4.25 10.5-6.5 3.5-.5 6.75-7.5.75-9.5 10.5 1 6.875 2.625 1.75 2.375 4.625 7 3.25 3-1.5 2.125-7.875.375L122 463.73l-1.25 6.125.875 8.25-6.75.625z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "고창군"
            )
          }
          fill={
            document.getElementById("imgpattern_고창군") !== null
              ? "url(#imgpattern_고창군)"
              : null
          }
          d="M84.125 499.23l7.375-13.125 7.5-3.25 6.25-.125 4.125-3.5 5.25 1.25.25-1.75 6.75-.625 1.5.5 3-1 .625 6.875 1.25 1-.875 3 .75 5.25-3.875 4.125 1.375 2.5-1 4.125s-2.25 1.125-2.375 1.625-.125 4.25-.125 4.25l-7.75 2.625-3.625 3.875-4.375-1.375-2.875.375.125 4s-7.375-1.375-7.5-1.75-.5-5.875-.5-5.875L93 511.98l-2.375-5.125 1-6.625-7.5-1z"
        />
        <S.G
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "군산시"
            )
          }
        >
          {" "}
          fill=
          {document.getElementById("imgpattern_군산시") !== null
            ? "url(#imgpattern_군산시)"
            : null}
          <S.Path d="M127.75 427.773l5-3.168 6.167.334 5-8.834 2.167-6.667-4.833-4.166-1.167-4.167L134 405.73l-6.625.25-3.625 4-3.5.458-3.167-.333-1.167 2.333-13.333 1.667-1.667 1.833-1.833-1 .5 2.834 5.333 2 2.833 1.667v6.834l7 .5 2.333-.834 3.5.334 1.167 1.166 2-.666 4.001-1z" />
          <S.Path d="M80.583 437.105l-.5 5 3-1.5-2.5-3.5z" />
        </S.G>
      </g>
      <g fill={fillColor} stroke={strokeColor}>
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "광산구"
            )
          }
          fill={
            document.getElementById("imgpattern_광산구") !== null
              ? "url(#imgpattern_광산구)"
              : null
          }
          d="M136.833 531.355l-5.083 2.25-6.167-2.916-.25-2.666h-2.25l-1.75 6.166-4.417.584-3.917 3.75 1.5 2.75-2.25 1.75s-.25 5.58 0 5.916c.25.334 2.917 2.166 2.917 2.166l9.083-.166 3.083 3.834-.583 2.25 5.5-4.25v-2.334l2.25-3.084 2.5-7.5 1.833-1.082-.917-1.668-.25-5-.832-.75z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "광주 북구"
            )
          }
          fill={
            document.getElementById("imgpattern_광주") !== null
              ? "url(#imgpattern_광주)"
              : null
          }
          d="M145.583 526.605l-3.333 2-2.833.084-2.583 2.666.75 1 .333 4.75.917 1.668-1.417.75-.667 1.916 4.5-.084 2 1.25 1.5 1.084 1.5-.084 1.917-1.082 2.25 1.332 1.583 2.084 2.417 1.334 2.417 2.832 2-3.166-.75-1.916v-2.168l1.5-1.416-2.25-2.916-3.167.082-2-1.916-1.75-4.416-2.667-4-2.167-1.668z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "광주 동구"
            )
          }
          fill={
            document.getElementById("imgpattern_광주") !== null
              ? "url(#imgpattern_광주)"
              : null
          }
          d="M147.583 547.689l-.833-2.834-.167-1.332 1.75-.75 2.083 1.082 1.417 2.334 2.833 1.084 2.167 2.832-2 3-3.583 1.668-1 1.5-3.833-3.168.083-3.666 1.083-1.75z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "광주 남구"
            )
          }
          fill={
            document.getElementById("imgpattern_광주") !== null
              ? "url(#imgpattern_광주)"
              : null
          }
          d="M134.667 552.773l2.583-2 4.25-1.168 1.583-.916-.083-2.834 1.75-2.166 1.5-.084.583 1.5.75 2.584-1.083 1.75-.083 3.666-3.917 1.75-5.25 1.334-3.25 2.416-5.5-.25-1.75-1.332 5.5-4.25h2.417z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "광주 서구"
            )
          }
          fill={
            document.getElementById("imgpattern_광주") !== null
              ? "url(#imgpattern_광주)"
              : null
          }
          d="M133.5 549.023l1.167-1.918 2.083-5.666h4.167l3.833 2.25-1.417 1.916-.167 2.834-1.667 1.166-4.25 1.168-2.417 2h-2.583v-2.334l1.251-1.416z"
        />
      </g>
      <g fill={fillColor} stroke={strokeColor}>
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "구례군"
            )
          }
          fill={
            document.getElementById("imgpattern_구례군") !== null
              ? "url(#imgpattern_구례군)"
              : null
          }
          d="M210.5 538.355l-5.75-.5v-5l5.25-2.5-3.5-6 .25-4.625 6.375-8.625 6.875.25 7 4.5 4.25 4.25 2.25 4 4.25 6-.75 8.75-1.5 3-.75 6-3 1.25-4.5 3-3.25-4.5h-1.75l-4.5-4.25-3.75-3-3.5-2z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "곡성군"
            )
          }
          fill={
            document.getElementById("imgpattern_곡성군") !== null
              ? "url(#imgpattern_곡성군)"
              : null
          }
          d="M182.25 546.605l-.333-6.166.333-3.666-2-3.168-3 3.334-6 .166-4-8.332 1.5-2 .167-6.5 3.583.457 8.583-6.625-.208 3.125 3.125 1.125 2.25-3.875 3.125 3.625 3.875.334 4.167 2.666 4.833-3.625 4 2.293.333 4 3.417 6.582-5.25 2.5v5l4.833.418-.667 6.832-2.833 3.168-1.167 4-4.167.166-1.333 4-6.833-2.334-4.333-3.5-3.667-2.5-2.333-1.5z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "담양군"
            )
          }
          fill={
            document.getElementById("imgpattern_담양군") !== null
              ? "url(#imgpattern_담양군)"
              : null
          }
          d="M161.417 546.273l6 3.166 1.333-3.166-2.5-6.5h2.667l2.333-2.668-4.333-8.666 1.833-1.666v-6.834l-4.375-1.709-1.125-3.125 2.375-.625-.75-6.375-3-.625-1-2.375 2.542-1.334.458-2.791-1.5-1.25-1.292-3.959-3.833.334-1.75 4.25-1.75 1.375-.25 2.875-4.125.75-1.958 1.916-2.833 1.834-3.5 4.834 1.833 2-.833 1.832-2.333.5-.167 4.5 2.667 5.834 3.333-2 1.833 1 3 4.668 1.167 3.998 2 2 3.75.252 2.25 2.916-1.5 1.416.333 2.75.417 1.334 2.583-.666z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "장성군"
            )
          }
          fill={
            document.getElementById("imgpattern_장성군") !== null
              ? "url(#imgpattern_장성군)"
              : null
          }
          d="M108.583 532.771s-4.5-1.998-4.667-2.666c-.167-.666-.167-3.666-.167-3.666l4-3.668.667-2.5 1.833-.5.25-2.916 3.625-3.875 7.75-2.625.042-4.584 2.458-1.291 1-4.125-.958-2.75 3.458-3.875 5.042.041 1.833-2.834 3.25 1.668-.25 1.625 7 3.875.875 3.375 4.458 3.457-3.167 3.168-1.667.666-3.5 4.666 1.167 2.5-.833 1.834-1.833-.166-.667 5.166 2.667 5.834-2.833.082-2.583 2.668-4.917 1.916-6.333-2.584-.5-2.25h-2l-1.75 5.75-4.417.584-3.917 3.75-2.25-3.584-2.166-2.166z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "영광군"
            )
          }
          fill={
            document.getElementById("imgpattern_영광군") !== null
              ? "url(#imgpattern_영광군)"
              : null
          }
          d="M69.917 539.439l7.5-4.334-2.667 3.5 1 3.334 5.333-2.5 2.333.5 5.833-1.5 5.833.332 7-1 1.833-7.666-.167-3.166 4-4.168.667-2.5 1.833-.5.25-2.916-4.375-1.375-2.875.375.125 4-7.5-1.75-.5-5.875-2.373-.25-2.375-5.125 1-6.625-7.042-.791-3.333 3.5v4.5l5.833 5.5-6-2.668-2 1.168-1.5 5-.333 4.666-6 1.334-.333 5.332-2.667.5-.667 5.834.5 1.666-.5 2.5 2.334 1.168z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "함평군"
            )
          }
          fill={
            document.getElementById("imgpattern_함평군") !== null
              ? "url(#imgpattern_함평군)"
              : null
          }
          d="M89.75 563.939l-1.5-3.666 1.167-2.834-4-2.834 2.167-2.666-5.833-1.334-1.5-4.332-4.5-4.334 5.333-2.5 2.333.5 5.833-1.5 5 .334 7.833-1.002 1.833-7.666 4.667 2.666 1.833 1.668 4.083 6.834-2.75 1.832.5 5.834-.333 2.666-5.167 1-2.167 3.834-.167 7.5.833 3.666-2.333 3.5-2.667-1.5-3 2-5.167-2.832-.167-4-2.164-.834z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "순천시"
            )
          }
          fill={
            document.getElementById("imgpattern_순천시") !== null
              ? "url(#imgpattern_순천시)"
              : null
          }
          d="M180.75 570.939l-.167-6.5.5-7.334-.833-6 2-4.5 6 4 4.333 3.5 6.833 2.334 1.333-4 4.167-.166 1.167-4 2.833-3.168.667-6.832.917.082 4.083 2.25 7.667 7H224l3.25 4.5-2.333 4.834 2.583 4.666 1.25 5.5-.5 7.75 3.167 1.918 1 4.332-.833 2.668-4.333 1.166.333 5.166-.833 2.834-3.333-4-.5-2.666-2.833 1.166.167 4.666-8 1-2.5 1.168-5.167-5-3.833-.334-5.833-5.5-4.167 1.666-4.5-1.332.5-5.168-2.5-5.666-3.502-2z"
        />
        <S.G
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "광양시"
            )
          }
          fill={
            document.getElementById("imgpattern_광양시") !== null
              ? "url(#imgpattern_광양시)"
              : null
          }
        >
          <S.Path d="M228.25 574.855l.5-7.75-1.25-5.5-3-4.5 2.75-5 4.5-3 3-1.25.75-6 1.5-3 8.583 7.084.667 6 5 4 1.333 2.666 2.667 2 1.333 4.668 1.834-.168-.667 3.834-2.333 2.334-3.167 3.082-2 .75-6.5 7.5H238l-2.75-4.5-3.5 2.75-.75-4-2.75-2z" />
          <S.Path d="M251.917 578.439l-2.334 3.332 2.5 1.334 3.5-3-3.666-1.666z" />
        </S.G>
        <S.G
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "여수시"
            )
          }
          fill={
            document.getElementById("imgpattern_여수시") !== null
              ? "url(#imgpattern_여수시)"
              : null
          }
        >
          <S.Path d="M239.083 625.605l-3.333-2.5h-2.5v2.334l-3.333-3.834-1.5-5.666 1.5-1.334-1.167-3.332 5.667-4.668-4.333-4-.5-4.666-4.667-.334 1.833-4.666.833-2.834-.333-5.166 4.333-1.166 3.333 4.5 4.833 4 .833 3.5 3.667-3.334 3.5-3.666 4.167.332 2 1.5 1.666-1.832 2 2.166-1 4-.333 5.666-2.167 3.334.5 4.334-2.333 3.166-5.333-.666-4.167-3.668-2.333 4-3.833 2 1 3.168.333 2.166 1.833 1.834-.666 5.332z" />
          <S.Path d="M260.75 632.439l-4.667-.5-5.666-5 .166-3.666 3.5-6-.166-5 1-1.5 3 2-.667 5.332 3.167 3-.834 7.168s1.834.832 1.834 1.332-.667 2.834-.667 2.834z" />
          <S.Path d="M251.417 638.273l-3.5 3.166 3.5.834 2.5 3 3.833 2.666 1.5-1.666-2.667-2.334.667-1.166-2.167-3.668-3.666-.832z" />
          <S.Path d="M241.583 632.273l-2 2.166 1.167 3.334 3.833-.668v-2.166l-3-2.666z" />
        </S.G>
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "화순군"
            )
          }
          fill={
            document.getElementById("imgpattern_화순군") !== null
              ? "url(#imgpattern_화순군)"
              : null
          }
          d="M134.417 588.773l4.833-3.5 1.833-9.834 2.833-5.166-3-5 2.333-6.668.333-4 2.833-1 3.833 2.668 1-1.5 3.583-1.668 4-6.166 2.583-.666 6 3.166 1.333-3.166-2.5-6.5h2.667l2.333-2.668 6-.166 3-3.334 2 3.168-.333 3.666.333 6.166-2 4.5.833 6-.5 6.5.167 7.334-5.333 2.166-7.333 6.834v6.334l-1.667 3.5-1.833 3.332-10-.166-1.5-1.666-4.833 3.666-3.833-3.5-1.5-4.834-3.667 2.168h-4.831z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "나주시"
            )
          }
          fill={
            document.getElementById("imgpattern_나주시") !== null
              ? "url(#imgpattern_나주시)"
              : null
          }
          d="M93.583 578.939l3.333 5.334 2.833 4.832 1.833-5.5 2.5-3.332 3.5.332 1.667 4.168 3.667.5 1.833 1 .167-5.668-1.167-3.332h3.333l3.833 5.166.333 3.834 4.5-1.834 4.333 2.666 4.333 1.668 4.833-3.5 1.833-9.834 2.833-5.166-3-5 2.333-6.668v-3.5l-6 1.084-3.25 2.416-5.083.168-2.167-1.75.5-1.75-3-4.334-8.333.166-3.167-1.666-.833 2.166-5.167 1-2.167 3.834-.167 6.666.833 4-2.333 4-2.667-1.5-3 2-.5 2.5-.167 2.834 1.667 3.5-2.5-1.666-2.162.166z"
        />
        <S.G
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "무안군"
            )
          }
          fill={
            document.getElementById("imgpattern_무안군") !== null
              ? "url(#imgpattern_무안군)"
              : null
          }
        >
          <S.Path d="M72.917 566.939l2.167 2.166 1.333-.666.833 3.334 1.333 2.832.5 6.334 1.5 1.334-2 3.166 1.5 3.834.333 2 3 1.166 2 3.166 1.5.834.667 4 3 1.834 2.333 1.832 2.5-4.166 3.333-4.666 1-6.168-5.667-10 1.667-.332 2.5 1.666-1.833-3.166.833-5.668-5.167-2.832-.167-4-2.667-1.5-1-3 1.167-2.834-2.167-1.334-1.833 2.168-2.833 2-.833 4.166-1.667-2-1.333-1.334-1 2.834-1.833 1.166-2.999 1.834z" />
          <S.Path d="M72.917 543.105l-4 3-4.5-1.332s-4.333.5-4.333 1-.333 4.666-.333 4.666l-.333 1.834-6.667-1.668-3.167 2 1.5 3.834 5.667 1.334.5 4 .833 3.332 5-2.666-.833-3.666 2.5-.168 1.667 2.834 2.5-3v-4.5h1.667l1.5-4 1-3.334-.168-3.5z" />
          <S.Path d="M74.583 554.273l-2.5.832-1.333 3.834 3 2.666 3.333-1.666 3.167-.334v-3.666l-3.167-2.166-1 2.832-1.5-2.332z" />
          <S.Path d="M72.083 571.439c-.5 0-2.833-.666-2.833-.666l-2-.168-1 3.168 5.167 5.832.833 1.834s3-3.166 3-3.666v-4.334l-1-2.834-2.167.834z" />
        </S.G>
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "목포시"
            )
          }
          fill={
            document.getElementById("imgpattern_목포시") !== null
              ? "url(#imgpattern_목포시)"
              : null
          }
          d="M78.75 593.273l-2.333 2.666-2.167 3.166 3.333 3.168 5.167-1 2.333-.168 2.667-.332-.833-4.334-1.5-.834-2-3.166-2.5-1.166-2.167 2z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "영암군"
            )
          }
          fill={
            document.getElementById("imgpattern_영암군") !== null
              ? "url(#imgpattern_영암군)"
              : null
          }
          d="M77.083 609.273l5.167-.668 3.667 1.5 5.667-.832 6.5 7.832 12.167 1.334 3.833-2.5 1.333-3.834-2-3 6.333-4 3.5.834 4.667-5h4l.167-6.166 5.333-2.668 1.833-3.332h-4.333l-4.833-1.668-4.333-2.666-4.333 1.334-.167-3.834-4.167-4.666h-3.333l1.167 3.332-.167 5.334-1.833-.666-3.667-.5-1.667-4.168-3.5-.332-2.167 2.666-2.167 6.166-1 6.168-5.833 8.832-5.167-3.332-1 1.666-4.833.834-4.667.666.167 2.166-2.333 2 1.999 1.168z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "보성군"
            )
          }
          fill={
            document.getElementById("imgpattern_보성군") !== null
              ? "url(#imgpattern_보성군)"
              : null
          }
          d="M162.917 623.605l5-4.166 4.5-4.166 2.667 1.332 5.833-1.332 3.833-7.5 3.167-4.168 1.667-2.5 6.333-3.666h2.5l2.167-1.666 7.333 4.832 1.667-3.166-5.333-3.334 5.5.168-5.167-5h-3.667l-6-5.5-4.167 1.332-4.667-1.666.667-4.834-3-6-3-1.666-4.667 2-8 7v6.334l-3.5 6.832-2.833-.166-2.667 7.5 1.667 2.834-1.5 2.332v4.334l-5 4.666.667 2.834 6 .5 2 5.666z"
        />
        <S.G
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "고흥군"
            )
          }
          fill={
            document.getElementById("imgpattern_고흥군") !== null
              ? "url(#imgpattern_고흥군)"
              : null
          }
        >
          <S.Path d="M171.917 639.939l.833-6.666 4.5-3 3.5-6 3-1.5-1.667 4-1.167 5.332 4.5.334 3.333-5.166-1.667-4.834v-6.166l4.333-3.668 2 1.334.5 5.834 5.667-.334.667-5.334-.333-4.332-1.167-3.334-4 2.5-4 .166-2.333-6.166 1.167-1.834 6.333-3.666h2.5l2.167-1.666 7.333 4.832-.5 1.834 1.833 1.5-.333 2.834-3.167 2 1.5 3.666 3.833 2.5 2 2.5.333 1.834 6.833 2.5-1.833 2 4 3.166-1.5 6.334-6.167.666s-5.333-.832-5.333-.166c0 .664.167 3.666.167 3.666l3.667.334-.667 6.666-4.5 1.666-.167 3-6.333-.332-2.5 3.5-5-2.5-2.333-2.668 2-5-5.333-.5-5.167-.5-4.667 1.834-6-.666-.665-2.334z" />
          <S.Path d="M183.417 647.773h-5.333l-4.167 1.166s-2.833-1.166-3-.166-.5 5.332-.5 5.332l4.667 3.834 8-.5 2-3.166 1-4-2.667-2.5z" />
          <S.Path d="M219.083 644.105l-3.5 1.168-.333 3 5-.668 1.833-1.332-3-2.168z" />
          <S.Path d="M222.75 651.439l-5-.666-1.5 2 6.5 4.5 1.167 2.166 2.667-4-3.834-4z" />
        </S.G>
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "장흥군"
            )
          }
          fill={
            document.getElementById("imgpattern_장흥군") !== null
              ? "url(#imgpattern_장흥군)"
              : null
          }
          d="M137.583 628.105l3.5-.5-1-6.666-1.833-3.334v-5.166l-4.167-5.668-2.167-5.832.167-6.166 5.333-2.668 1.833-3.332 3.667-2.168 1.5 4.834 3.833 3.5 4.833-3.666 1.5 1.666h7.167l-2.667 7.5 1.667 2.834-1.5 2.332v4.334l-4.667 4.166.333 3.334 6 .5 2 5.666-2.833 3.5-6-.5-.167 1 3.167 1.834-1.167 3.332-.667 1.834 2 .834-1.333 4-4 2 2.167 2.832-.833 3.5 2.167 2.334-4.333 2.166-2.5-2.166v3.666l-7.667-.832 2 3.832-6.5-2.166.5-10 5-5.666-.833-5-3.5-5.834z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "강진군"
            )
          }
          fill={
            document.getElementById("imgpattern_강진군") !== null
              ? "url(#imgpattern_강진군)"
              : null
          }
          d="M122.083 652.605l2.333-1.832-.833-1.834 2.167-2s1.167-7.832 1.167-9.166c0-1.336.667-11.168.667-11.168l2-1.5-1.333 2.834.833 5.334 1.667 2.5v13l1.833 2 3.833 3.832.5-10 5-5.666-.833-5-3.5-5.834 3.5-.5-1-6.666-1.833-3.334v-5.166l-4.167-5.668-2.167-5.498h-4.333l-4.333 5-3.5-1.168-6.333 4 2 3-1.333 3.834 2.667 1.5 1.5 3-.667 3.834.833 1.5-3.167 5.666 2.167 5-2.5 3.834 1.5 1.666.333 8.834 3.667.332 1.665 1.5z"
        />
        <S.Path
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "해남군"
            )
          }
          fill={
            document.getElementById("imgpattern_해남군") !== null
              ? "url(#imgpattern_해남군)"
              : null
          }
          d="M71.083 608.939l-5.167-3.334-2.167 6-3.167 2.668v9.166l3.167 1.666v3.334l3.667 4.166.167 1.5 9.333 2.668.833 3.332 4.5-2.5 4.167 4.168 1 3.5.5 7.166-1.333 1.666 3.833 4.168 3.667-2.668-.833 4.334s-2.833 1.334-3 2.166c-.167.834-1.667 7-1.667 7l4.333-.332.833 4.166.667 5.334 4.833-4.168 6 .834-.167-6.334 2.333-1.832-1.667-3.668 5.167-3 6.167-3.832 3.667-1.168 1.333-2.5-1.333-1-4-.832-.333-8.834-1.5-1.666 2.5-3.834-2.167-5 3.333-6-1-1.166.667-3.834-1.5-3-2.667-1.5-3.833 2.5-10.167-.834.333 3.5 7 4-5.167.834-3.667-3-3.167-.5-.167 3.834-5.833-2.668-5.5-4 2.667-4.5-2.667-.332-1 1.666-3.167-1.666-1.667.332.167 3-.167 4.668 3.667-.834 2 2.834 4.833 3.5-1.333 3.832-7-3.666-4.167-1-1.833-7.166-2.167-4.668.833-3.166-1.5-1.166-.33-2.334z"
        />
        <S.G
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "진도군"
            )
          }
          fill={
            document.getElementById("imgpattern_진도군") !== null
              ? "url(#imgpattern_진도군)"
              : null
          }
        >
          <S.Path d="M60.083 632.273l-1.667 3.5 2.833 1.166.667 3.666s-5.333.5-5.833.5-.667 2.668-.667 2.668l-1.333 2.332-2.333-1.666-1.167 4-6.667 4.5-4.167 4.334 3 5.832 3.333 1.5-.333 2.334 6.667.834 6.833-2.5 6-4.168 4.5-2.5-.167 1.668 4.667-5.5-.5-4.668 3.5-2-1-3.832-6.5-5.668-3-1-.167-1.832-6.499-3.5z" />
          <S.Path d="M33.25 675.273l-.833-1.168-3.167 4.668 4 2 5.667-.168-.167-4.5-2.667-.166-2.833-.666z" />
        </S.G>
        <S.G
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "완도군"
            )
          }
          fill={
            document.getElementById("imgpattern_완도군") !== null
              ? "url(#imgpattern_완도군)"
              : null
          }
        >
          <S.Path d="M111.25 663.105l5.125-.625 5.125 2.5.75 4.75 4.375 5.25.875 4-4.375-.25-5.375-.25-3.75-4.625-2.75-1.125v-9.625z" />
          <S.Path d="M134.75 655.855l-3.375 1-4.875 3.25-1.25 3.5 1.75 1.375 2.5 1.125 4.5-2.25 4.625-2.125-3.375-1.875 1.25-1-1.75-3z" />
          <S.Path d="M135 668.98l-1.75 1.625-3.75-.625-1.25 3.25 5.125 1.625 2.25.25 1.125 2.75 3.125-2.25 2.5-.625.375-2.25-2.25-1.625-1.125-1.375h-3.25l-1.125-.75z" />
          <S.Path d="M141.5 691.48l-2.625 1.625-1 4.875 2.875 1.25 7.25-.125-.5-3.125-2.125-1-.625-3.25-3.25-.25z" />
          <S.Path d="M99.125 688.73l-.75 4 1.875 3.5s6.5.125 6.5-.375-.625-2.25-.625-2.25l1.25-1.5-2-2.625-3.125-.375-3.125-.375z" />
          <S.Path d="M99 697.355l-3.875-1.25-2.25 2.5.125 4.375 3.75 1.5 3.25-2.625 3.125-3-4.125-1.5z" />
          <S.Path d="M111.875 693.98l-1.75 2.5 2.75.375 2.25-.75-1.125-1-2.125-1.125z" />
          <S.Path d="M110.125 699.855l-.75 3.625 2.125 2.75 1.375-2.5.375-3.5-1.875-.5-1.25.125z" />
          <S.Path d="M160.875 664.98s-2.75-.375-2.75.5.875 4.125.875 4.125 2.75 2.75 2.875 3.25 0 4.25.5 3.5 4.125-4.125 4.125-4.125l3.75-1.625s-3.375-4-3.75-4-2.5 2.25-2.5 2.25l-3.125-3.875z" />
          <S.Path d="M110.125 699.855l-.75 3.625 2.125 2.75 1.375-2.5.375-3.5-1.875-.5-1.25.125z" />
          <S.Path d="M160.875 664.98s-2.75-.375-2.75.5.875 4.125.875 4.125 2.75 2.75 2.875 3.25 0 4.25.5 3.5 4.125-4.125 4.125-4.125l3.75-1.625s-3.375-4-3.75-4-2.5 2.25-2.5 2.25l-3.125-3.875z" />
        </S.G>
        <S.G
          onClick={(e) =>
            setAreaHandler(
              e.currentTarget.getBBox().width,
              e.currentTarget.getBBox().height,
              "신안군"
            )
          }
          fill={
            document.getElementById("imgpattern_신안군") !== null
              ? "url(#imgpattern_신안군)"
              : null
          }
        >
          <S.Path d="M37.083 577.273l-1.167 2.832-4.333-.166-3.667 2.5-2.833 4.334-2.333.5 9 2 4 2 4.333-3.834 1.167-4-2.5-2.666-1.667-3.5z" />
          <S.Path d="M25.75 598.273l-5.5 4-5.167-.334-1.333 8 3 2.166 3.667-1.666v-3.166l5-1.5 2-6-1.667-1.5z" />
          <S.Path d="M22.25 609.939l-1.167 2-4.833 1.334 1.333 3.832 5.667 3.5 2.833-2.832 3-2.5-.5-4.668-2.833 1.834-3.5-2.5z" />
          <S.Path d="M33.417 620.439l-3.333 4.666-.833 4.168 1 3.666 2.5 1.334 2.5-2.668-1.667-3-.833-3.666 1.5-2-.834-2.5z" />
          <S.Path d="M39.417 628.439l-2.5 1.834 2.167 4-3.667 3-1.833.832 2 1.168-.667 2.5 3-2.5 2.667-3 1.5-3.668-2-2.166-.667-2z" />
          <S.Path d="M48.25 597.105l-2.333 1.5-5.667.668 3.667 2.5 2.667 1.5 2.667-2.334-1.001-3.834z" />
          <S.Path d="M47.417 606.273l-2.833-1.334-3.333-1.666-.833 5.5.833 6.332 4.333-1.5 4.667-3.166-2.834-4.166z" />
          <S.Path d="M43.917 587.605l-.833 1.834-3.5 1.666-1.167 2.5 3.333 2.5 1.167-2.832 2.667-.834-.167-2 1.5-2.334-3-.5z" />
          <S.Path d="M46.583 618.273l-3.5 3.332 2.5 4.168 3.333-2 .833-3.168-3.166-2.332z" />
          <S.Path d="M66.917 580.439l-2 .834 1.667 2.666-1.333 1.334-2.5 2.166-4 2 4.167 1.666 2.5-1 5.833 1.668-.667 2.666 3.667-.834.333-3.5-3.667-1-2.167-.5 1.167-3.166 2.667-.834-2.667-2.5-3-1.666z" />
          <S.Path d="M47.083 544.939l-6 2.666-3.833 4.334s-4.5 2.332-4.167 2.832 2.333 4 2.333 4l5.667-.332 2-4.5.167-3.668 3.667-3.666.166-1.666z" />
          <S.Path d="M45.25 564.105l-3.5 2.5 3.5.666.5 6s-3 2.334-2.167 2.5c.833.168 5.833.168 5.833.168l.333-4.334-.667-3.666-3.832-3.834z" />
        </S.G>
      </g>
    </svg>
  );
};

export default SvgComponent;
