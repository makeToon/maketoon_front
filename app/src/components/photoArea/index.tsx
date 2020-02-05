import React, { FC, useRef, useState, useEffect, useCallback } from "react";
import { useParams, useHistory } from "react-router-dom";

import * as S from "./style";
import Header from "components/header";
import CheckModal from "./CheckModal";
import ImageCropCover from "./ImageCropCover";
import CroppedImageCover from "./CroppedImageCover";

const PhotoArea: FC = () => {
  const { area } = useParams();
  const { goBack } = useHistory();
  const didMountRef = useRef(false);
  const [croppedImageUrl, setCroppedImageUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      document.title = `makeToon - '${area}' 포토 설정`;
    }
  }, [didMountRef]);

  const goBackHandler = useCallback(() => {
    goBack();
  }, []);

  return (
    <>
      {isModalOpen && (
        <CheckModal
          area={area}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      <S.Wraapper>
        <Header />
        <section>
          <button onClick={goBackHandler}>뒤로가기</button>
          <S.PhotoAreaDivision>
            <ImageCropCover setCroppedImageUrl={setCroppedImageUrl} />
            {croppedImageUrl && (
              <CroppedImageCover
                setIsModalOpen={setIsModalOpen}
                croppedImageUrl={croppedImageUrl}
              />
            )}
          </S.PhotoAreaDivision>
        </section>
      </S.Wraapper>
    </>
  );
};

export default PhotoArea;
