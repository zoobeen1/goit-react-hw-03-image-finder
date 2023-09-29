import { Component } from 'react';
// import PropTypes from 'prop-types';
import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import API from 'services/api';
import { toast } from 'react-toastify';

export class ImageGallery extends Component {
  state = {
    imgs: null,
    error: null,
    status: 'idle', //State machine (idle, loading, rejectet, success)
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.query !== prevProps.query) {
      console.log('Запрос обновился!');
      this.setState({
        status: 'loading',
        imgs: null,
        error: null,
      });
      API.params.q = this.props.query;
      API.getPhotos()
        .then(resp => {
          if (resp.total === 0) {
            this.setState({
              error:
                'Sorry, there are no images matching your search query. Please try again.',
              status: 'rejected',
            });

            toast.info(
              'Sorry, there are no images matching your search query. Please try again.'
            );

            return;
          }
          toast.success(`Hooray! We found ${resp.total} images.`);
          this.setState({
            status: 'success',
          });
          console.log(resp);
          this.setState({ imgs: resp.hits });
          // hitCounter = API.params.per_page;
          // renderGallery(resp.hits);
          // refs.loadMoreBtn.classList.remove('invisible');
        })
        .catch(this.onError);
    }
  }
  onError() {
    this.setState({
      error: API.params.error,
      status: 'rejected',
    });
    toast.error('Oops, something went wrong. Please try again.');
  }
  render() {
    const imgs = this.state.imgs;

    return (
      <List>
        {imgs &&
          imgs.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              imgUrl={webformatURL}
              url={largeImageURL}
              imgName={tags}
            />
          ))}
      </List>
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
