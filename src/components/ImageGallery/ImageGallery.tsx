import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
// import { Image } from "../../images-api-service.ts";


export interface ImageItem {
  id: string;
  urls: {
    small: string;
  };
  slug: string;
}

export interface ImageGalleryProps {
  images: ImageItem[];
  openModal: (id: string) => void;
}



const ImageGallery = ({ images, openModal }: ImageGalleryProps) => {
  return (
    <ul className={css.imgGallery}>
      {images.map((image) => {
        return (
          <li key={image.id} className={css.imgItem}>
            <ImageCard image={image} openModal={openModal} />
          </li>
        );
      })}
    </ul>
  )
}
export default ImageGallery;
