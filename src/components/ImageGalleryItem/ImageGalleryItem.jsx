export const ImageGalleryItem = ({ item, onOpenModal }) => {
  const handleImgToken = () => {
    onOpenModal(item);
  };
  const { tags, webformatURL } = item;
  return (
    <li onClick={handleImgToken} className="ImageGalleryItem">
      <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
    </li>
  );
};
