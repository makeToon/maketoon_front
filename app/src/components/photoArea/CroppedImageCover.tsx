import React, { FC, useCallback } from "react";

import * as S from "./style";
import { UndrowPhotograph } from "assets/index";

interface OwnProps {
  croppedImageUrl: string;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

const CroppedImageCover: FC<OwnProps> = ({
  croppedImageUrl,
  setIsModalOpen
}) => {
  const isModalOpenHandler = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <>
      <S.CroppedImageCover>
        <p>※ 해당 이미지가 지도에 등록됩니다.</p>
        <img src={croppedImageUrl} alt="crop_image" />
      </S.CroppedImageCover>
      <S.SubmitCover>
        <img src={UndrowPhotograph} alt="등록하기" />
        <button onClick={isModalOpenHandler}>등록하기</button>
      </S.SubmitCover>
    </>
  );
};

export default CroppedImageCover;
