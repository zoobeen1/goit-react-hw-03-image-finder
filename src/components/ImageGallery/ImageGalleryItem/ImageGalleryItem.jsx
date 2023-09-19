import { Item, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webUrl, url, alt }) => {
  return (
    <Item>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Image src={webUrl} alt={alt} />
      </a>
    </Item>
  );
};
