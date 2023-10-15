import { useState, useEffect } from 'react';
import { StyledAppContainer } from './App.styled';
import { fetchPhoto } from 'servises/api';

import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreButton } from './LoadMoreButton/LoadMoreButton';
import { Modal } from './Modal/Modal';
import Notiflix from 'notiflix';

export const App = () => {
  const [query, setQuerty] = useState('');
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (query.trim() === '') {
      return;
    }
    setIsLoading(true);

    const fetchAllPhotos = async () => {
      try {
        const photo = await fetchPhoto(query, page);
        if (photo.hits.length === 0) {
          Notiflix.Notify.info('Изображение не найдено.');
        } else {
          setItems(prevItems => [...prevItems, ...photo.hits]);
          setTotal(photo.total);
          Notiflix.Notify.success('Изображение успешно найдено.');
        }
      } catch (error) {
        Notiflix.Notify.failure('Произошла ошибка при поиске изображения.');
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllPhotos();
  }, [query, page]);

  const handleSearch = newQuery => {
    if (newQuery.trim() === '') {
      Notiflix.Notify.warning('Введите поисковый запрос.');
      return;
    }
    setQuerty(newQuery);
    setPage(1);
    setItems([]);
    setError(null);
  };

  const checkLastItems = () => {
    return items.length === total;
  };

  const onOpenModal = modalData => {
    setSelectedImage(modalData);
  };

  const onCloseModal = () => {
    setSelectedImage(null);
  };

  const showPhotos = items.length > 0;
  const isLastItems = checkLastItems();

  return (
    <StyledAppContainer>
      <Searchbar handleSearch={handleSearch} />
      {isLoading && <Loader />}
      {showPhotos && (
        <div>
          <ImageGallery items={items} onOpenModal={onOpenModal} />
          {!isLastItems && (
            <LoadMoreButton onLoadMore={() => setPage(page + 1)} />
          )}
        </div>
      )}
      {error && <p>{error}</p>}
      <Modal selectedImage={selectedImage} onCloseModal={onCloseModal} />
    </StyledAppContainer>
  );
};
