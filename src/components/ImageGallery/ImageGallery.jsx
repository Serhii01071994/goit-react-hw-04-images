import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ items, onOpenModal }) => {
  return (
    <div>
      <ul className="ImageGallery">
        {items.map((item, index) => (
          <ImageGalleryItem
            key={item.id || index}
            item={item}
            onOpenModal={onOpenModal}
          />
        ))}
      </ul>
    </div>
  );
};
