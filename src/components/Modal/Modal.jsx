import { useEffect } from 'react';

export const Modal = ({ selectedImage, onCloseModal }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  if (!selectedImage) return null;
  const { tags, largeImageURL } = selectedImage;

  return (
    <div className="Overlay " onClick={handleOverlayClick}>
      <div className="Modal">
        <button onClick={onCloseModal}></button>
        <img
          src={largeImageURL}
          alt={tags}
          loading="lazy"
          className="largeImg"
        />
      </div>
    </div>
  );
};
