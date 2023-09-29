import { ListItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ imgUrl, imgName, url }) => {
  return (
    <ListItem>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Image src={imgUrl} alt={imgName} />
      </a>
    </ListItem>
  );
};
