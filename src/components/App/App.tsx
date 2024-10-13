import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import { Toaster } from "react-hot-toast";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import fetchImagesWithData from "../../images-api-service.ts";
import { ImageItem } from "../ImageGallery/ImageGallery.tsx";
import { Image } from "../../images-api-service.ts";


// import css from './App.module.css';

function App() {

  const [images, setImages] = useState<ImageItem[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  // const [loadBtn, setLoadBtn] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImg, setSelectedImg] = useState<string>("");
  
  
  // useEffect(() => {
  //   if (query === "") {
  //     return;
  //   }
  //   async function fetchImages() {
  //     try {
  //       setLoading(true);
  //       const data = await fetchImagesWithData(query, page);

  //       if (results.length === 0) {
  //         return toast.error("There are no images matching with your search query!");
  //       }

  //       setLoadBtn(total_pages > page);
  //       setImages((prevImages) => {
  //         return [...prevImages, ...results];
  //       });
  //       setLoading(false);
  //       } catch {
  //       setError(true);
  //       } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchImages();
  // }, [query, page]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const data = await fetchImagesWithData(query, page);
        if (page === 1) {
          setImages(data.map(convertToImageItem));
        } else {
          setImages((prevImages) => [
            ...prevImages,
            ...data.map(convertToImageItem),
          ]);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (query !== "") {
      fetchImages();
    }
  }, [query, page]);

  
  const handleSearch = async (topic: string) => {
      setQuery(topic);
      setPage(1);
      setImages([]);
      setError(false);
      
  };

  const loadMore = async () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (imageUrl: string) => {
    setSelectedImg(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const convertToImageItem = (result: Image): ImageItem => ({
    id: result.id,
    urls: result.urls,
    slug: result.id,
  });

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {images.length > 0 && <ImageGallery images={images} openModal={openModal} />}
      {images.length > 0 && (
        <LoadMoreBtn onClick={loadMore} loading={loading} />
      )}
      <ImageModal isOpen={modalIsOpen}
        onClose={closeModal}
        imageUrl={selectedImg} />
      <Toaster 
      position="top-center"
       />
    </>
  );
}

export default App
