import React, { FC, useState, useCallback, useRef } from "react";
import ReactCrop from "react-image-crop";

import * as S from "./style";

interface OwnProps {
  setCroppedImageUrl: (croppedImageUrl: string) => void;
  setLocation: ({ width, height }: { width: number; height: number }) => void;
  setPhoto: (photo: File) => void;
  inputWidth?: string;
}

let fileUrl = "";

const ImageCrop: FC<OwnProps> = ({
  setCroppedImageUrl,
  setPhoto,
  inputWidth,
  setLocation,
}) => {
  const imageRef = useRef(null);
  const [src, setSrc] = useState(null);
  const [crop, setCrop] = useState({
    unit: "%",
    width: 100000,
    height: 0,
    aspect: 1 / 1,
  });

  const onSelectFile = useCallback(
    ({ target: { files } }: React.ChangeEvent<HTMLInputElement>) => {
      if (files && files.length > 0) {
        setPhoto(files[0]);

        const reader = new FileReader();
        reader.addEventListener("load", () => {
          setSrc(reader.result);
        });

        reader.readAsDataURL(files[0]);
      }
    },
    []
  );

  const onImageLoaded = useCallback((image) => {
    imageRef.current = image;
  }, []);

  const getCroppedImg = useCallback(
    (image: HTMLImageElement, crop) => {
      const canvas = document.createElement("canvas");
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx = canvas.getContext("2d");

      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
      );

      return new Promise<string>((resolve, reject) => {
        canvas.toBlob((blob) => {
          if (!blob) {
            reject(new Error("Canvas is empty"));
          }
          window.URL.revokeObjectURL(fileUrl);
          fileUrl = window.URL.createObjectURL(blob);

          resolve(fileUrl);
        }, "image/jpeg");
      });
    },
    [fileUrl]
  );

  const makeClientCrop = useCallback(
    async (crop) => {
      if (imageRef.current && crop.width && crop.height) {
        const croppedImageUrl = await getCroppedImg(imageRef.current, crop);
        setCroppedImageUrl(croppedImageUrl);
      }
    },
    [imageRef.current]
  );

  const onCropComplete = (crop) => {
    makeClientCrop(crop);
  };

  const onCropChange = (crop) => {
    setCrop(crop);
    setLocation({ width: crop.width, height: crop.height });
  };

  return (
    <S.Wrapper>
      <S.InputCover
        htmlFor={src ? "" : "imageInput"}
        width={inputWidth}
        isAccept={!!src}
      >
        {src ? (
          <S.Crop>
            <ReactCrop
              src={src}
              crop={crop}
              ruleOfThirds
              onImageLoaded={onImageLoaded}
              onComplete={onCropComplete}
              onChange={onCropChange}
            />
          </S.Crop>
        ) : (
          <>등록할 이미지를 선택하여 주십시오</>
        )}
      </S.InputCover>
      <input
        id="imageInput"
        type="file"
        accept="image/*"
        onChange={onSelectFile}
      />
    </S.Wrapper>
  );
};

export default ImageCrop;
