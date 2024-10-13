import css from "./ImageCard.module.css";
import { FC } from "react";

interface ImageProps {
   urls: {
    small?: string;
    regular?: string;
  };
  alt_description?: string;
}

interface ImageCardProps {
  image: ImageProps;
  openModal: (image: string) => void;
}

const ImageCard: FC<ImageCardProps> =  ({ image, openModal }) => {
  return (
    <div className={css.imageCard}>
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => openModal(image)}
      />
    </div>
  );
};

export default ImageCard;