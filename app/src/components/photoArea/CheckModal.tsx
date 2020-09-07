import React, { FC, useCallback, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import * as S from "./style";
import Modal from "components/common/modal";
import { useAuthRedux } from "container/auth";
import { usePhotoRedux } from "container/photo";
import { Loading } from "assets/index";

interface OwnProps {
  photo: File;
  area: string;
  isModalOpen: boolean;
  location: {
    width: number;
    height: number;
  };
  setIsModalOpen: (isModalOpen: boolean) => void;
}

const CheckModal: FC<OwnProps> = ({
  photo,
  area,
  isModalOpen,
  location,
  setIsModalOpen,
}) => {
  const {
    photoStore: { putCropPhotoStatus },
    photoReducer: { putCropPhoto, resetStatus },
  } = usePhotoRedux();
  const {
    authStore: { accessToken },
  } = useAuthRedux();
  const { push } = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [warningMeassage, setWarningMessage] = useState("");

  const setCloseHandler = useCallback(() => {
    setIsModalOpen(false);
  }, [isModalOpen]);

  const handleCropPhoto = useCallback(() => {
    const imageURL = URL.createObjectURL(photo);
    const img = new Image();

    img.addEventListener("load", () => {
      const imageWidth = String(img.naturalWidth) || String(img.width);
      const imageHeight = String(img.naturalHeight) || String(img.height);

      setIsLoading(true);
      putCropPhoto({
        accessToken,
        photo,
        imageWidth,
        imageHeight,
        area: area.split("-")[0],
        width: area.split("-")[1],
        height: area.split("-")[2],
      });
      URL.revokeObjectURL(imageURL);
    });

    img.src = imageURL;
  }, [accessToken, photo, area]);

  useEffect(() => {
    if (putCropPhotoStatus === 204) {
      setIsLoading(false);
      setCloseHandler();
      push("/photomap");
    } else if (putCropPhotoStatus === 403) {
      setIsLoading(false);
      setWarningMessage("이미지는 3MB까지만 업로드 가능합니다.");
    }

    resetStatus();
  }, [putCropPhotoStatus]);

  return (
    <Modal width="600px" height="300px" isOpen={isModalOpen}>
      <S.CheckModal>
        <h1>
          <span>"{area.split("-")[0]}"</span>에 해당 이미지를
          <br />
          등록하시겠습니까?
        </h1>

        <div>
          {isLoading ? (
            <div className="loadingWrapper">
              <p>이미지를 업로드하는 중 입니다. 잠시만 기다려주십시오.</p>
              <img className="loading" src={Loading} alt="로딩.." />
            </div>
          ) : (
            <div>
              <button onClick={handleCropPhoto} className="yes">
                예
              </button>
              <button onClick={setCloseHandler} className="no">
                아니오
              </button>
            </div>
          )}
          {warningMeassage && <S.Warning>{warningMeassage}</S.Warning>}
        </div>
      </S.CheckModal>
    </Modal>
  );
};

export default CheckModal;
