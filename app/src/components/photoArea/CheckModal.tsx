import React, { FC, useCallback } from "react";

import * as S from "./style";
import Modal from "components/common/modal";

interface OwnProps {
  area: string;
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

const CheckModal: FC<OwnProps> = ({ area, isModalOpen, setIsModalOpen }) => {
  const setCloseHandler = useCallback(() => {
    setIsModalOpen(false);
  }, [isModalOpen]);

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
          <button className="yes">예</button>
          <button onClick={setCloseHandler} className="no">
            아니오
          </button>
        </div>
      </S.CheckModal>
    </Modal>
  );
};

export default CheckModal;
