import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { FC } from "react";

Modal.setAppElement(document.getElementById("root"));

export interface selectedImage {
  src: string;
  urls: {
    small?: string;
    regular?: string;
  };
  alt_description?: string;
  description: string;
  likes: number;

}

export interface ImageModalProps {
  isClose: boolean;
  onClose: (state: boolean) => void;
  imageUrl: selectedImage;
}


const ImageModal: FC<ImageModalProps> = ({ isOpen,
  onClose,
  imageUrl }) => {
  if (!imageUrl) return null;

  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}
      onRequestClose={onClose}
      contentLabel="image modal window"
      className={css.modal}
      overlayClassName={css.overlay}
    >
      
      <img src={imageUrl.urls.regular} alt={imageUrl.alt_description} className={css.image} />
      <ul className={css.imageInfo}>
      <p>{imageUrl.description || "Image without description"}</p>
      <li>Likes: {imageUrl.likes}</li>
      </ul>
    </Modal>
  );
};

export default ImageModal;

