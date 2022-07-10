import { Item, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webUrl, url, title }) => {
  return (
    <Item>
      <Image src={webUrl} alt={title} />
    </Item>
  );
};
