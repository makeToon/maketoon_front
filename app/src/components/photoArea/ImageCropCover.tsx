import React, { FC } from "react";

import ImageCrop from "components/common/imageCrop";

interface OwnProps {
  setCroppedImageUrl: (croppedImageUrl: string) => void;
}

const ImageCropCover: FC<OwnProps> = ({ setCroppedImageUrl }) => {
  return (
    <div>
      <label htmlFor="imageInput">재등록</label>
      <p>※ 이미지를 가장 큰 비율로 자르는 것을 추천드립니다.</p>
      <ImageCrop setCroppedImageUrl={setCroppedImageUrl} />
    </div>
  );
};

export default ImageCropCover;
