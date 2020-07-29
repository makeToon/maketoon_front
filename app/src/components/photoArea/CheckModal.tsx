import React, { FC, useCallback, useEffect } from "react";

import * as S from "./style";
import Modal from "components/common/modal";
import { usePhotoRedux } from "container/photo";

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
    photoStore: { accessToken, putCropPhotoStatus },
    photoReducer: { putCropPhoto, resetStatus },
  } = usePhotoRedux();

  const setCloseHandler = useCallback(() => {
    setIsModalOpen(false);
  }, [isModalOpen]);

  useEffect(() => {
    if (putCropPhotoStatus === 200) {
      setCloseHandler();
    }

    resetStatus();
  }, [putCropPhotoStatus]);

  return (
    <Modal
      width="600px"
      height="300px"
      isOpen={isModalOpen}
      setIsOpen={setIsModalOpen}
    >
      <S.CheckModal>
        <h1>
          <span>"{area}"</span>에 해당 이미지를
          <br />
          등록하시겠습니까?
        </h1>

        <div>
          <button
            onClick={() =>
              putCropPhoto({
                accessToken,
                photo,
                area,
                width: String(location.width),
                height: String(location.height),
              })
            }
            className="yes"
          >
            예
          </button>
          <button onClick={setCloseHandler} className="no">
            아니오
          </button>
        </div>
      </S.CheckModal>
    </Modal>
  );
};

export default CheckModal;
