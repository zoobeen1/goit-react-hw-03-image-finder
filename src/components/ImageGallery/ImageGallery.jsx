import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  console.log('ImageGallery', images);

  return (
    <List>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webUrl={webformatURL}
          url={largeImageURL}
          alt={tags}
        />
      ))}
    </List>
  );
};
