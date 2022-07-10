import { Component } from 'react';
import axios from 'axios';
import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Button } from 'components/Button/Button';

axios.defaults.baseURL = 'https://pixabay.com/api';

export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
  };
  async componentDidMount() {
    const response = await axios.get(
      `/?q=${this.props.searchQuery}&page=1&key=27472864-20a91975f294fe19c608dc0e7&image_type=photo&orientation=horizontal&per_page=12`
    );
    this.setState({ images: response.data.hits });
  }
  async componentDidUpdate(pp, ps) {
    if (pp.searchQuery !== this.props.searchQuery) {
      const response = await axios.get(
        `/?q=${this.props.searchQuery}&page=1&key=27472864-20a91975f294fe19c608dc0e7&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState({ images: response.data.hits, page: 1 });
    }
    if (ps.page !== this.state.page) {
      const response = await axios.get(
        `/?q=${this.props.searchQuery}&page=${this.state.page}&key=27472864-20a91975f294fe19c608dc0e7&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState(ps => ({ images: ps.images.concat(response.data.hits) }));
    }
  }

  componenetWillUnmount() {
    console.log('ImageGallery will unmount');
  }
  handleButtonClick = () => {
    console.log('Button clicked');
    this.setState(ps => ({ page: ps.page + 1 }));
  };
  // *************************************************************************
  render() {
    //Деструктуризация объекта из state
    const { images } = this.state;
    return (
      <>
        <List>
          {images.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              webUrl={webformatURL}
              url={largeImageURL}
              title={tags}
            />
          ))}
        </List>
        <Button onClick={this.handleButtonClick} />
      </>
    );
  }
}
