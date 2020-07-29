import React, { FC } from "react";

import ImageCrop from "components/common/imageCrop";

interface OwnProps {
  setPhoto: (photo: File) => void;
  setCroppedImageUrl: (croppedImageUrl: string) => void;
  setLocation: ({ width, height }: { width: number; height: number }) => void;
}

const ImageCropCover: FC<OwnProps> = ({
  setCroppedImageUrl,
  setPhoto,
  setLocation,
}) => {
  return (
    <div>
      <label htmlFor="imageInput">재등록</label>
      <p>※ 이미지를 가장 큰 비율로 자르는 것을 추천드립니다.</p>
      <ImageCrop
        setPhoto={setPhoto}
        setCroppedImageUrl={setCroppedImageUrl}
        setLocation={setLocation}
      />
    </div>
  );
};

export default ImageCropCover;
