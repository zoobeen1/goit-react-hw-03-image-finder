import { Component } from 'react';
// import PropTypes from 'prop-types';
// import { List } from './ImageGallery.styled';
// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    error: null,
    status: 'idle', //State machine
  };
  render() {
    return (
      <>
        <h1>{this.props.query}</h1>
        {/* {imgs.map(img => {
        return (
          <List key={img.id}>
            <ImageGalleryItem imgUrl={img.url} imgName={img.name} />
          </List>
        );
      })} */}
      </>
    );
  }
}

// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };
