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
  const [photo, setPhoto] = useState<File>(null);
  const [location, setLocation] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      document.title = `makeToon - '${area.split("-")[0]}' 포토 설정`;
    }
  }, [didMountRef]);

  return (
    <>
      {isModalOpen && (
        <CheckModal
          photo={photo}
          area={area}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          location={location}
        />
      )}
      <S.Wraapper>
        <Header photoArea={area.split("-")[0]} />
        <section>
          <S.PhotoAreaDivision>
            <ImageCropCover
              setPhoto={setPhoto}
              setCroppedImageUrl={setCroppedImageUrl}
              setLocation={setLocation}
            />
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
