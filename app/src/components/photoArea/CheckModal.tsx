import React, { FC, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";

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
  const { push } = useHistory();

  const setCloseHandler = useCallback(() => {
    setIsModalOpen(false);
  }, [isModalOpen]);

  useEffect(() => {
    if (putCropPhotoStatus === 204) {
      setCloseHandler();
      push("/photomap");
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
          <span>"{area.split("-")[0]}"</span>에 해당 이미지를
          <br />
          등록하시겠습니까?
        </h1>

        <div>
          <button
            onClick={() =>
              putCropPhoto({
                accessToken,
                photo,
                area: area.split("-")[0],
                width: area.split("-")[1],
                height: area.split("-")[2],
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
