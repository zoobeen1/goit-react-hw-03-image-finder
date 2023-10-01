import { ListItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ imgUrl, imgName, url, onModal }) => {
  return (
    <ListItem>
      {/* <a href={url} target="_blank" rel="noopener noreferrer"> */}
      <Image src={imgUrl} alt={imgName} onClick={() => onModal(url, imgName)} />
      {/* </a> */}
    </ListItem>
  );
};
