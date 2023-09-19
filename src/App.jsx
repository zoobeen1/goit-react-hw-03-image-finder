import { GlobalStyle } from 'GlobalStyle';
import React, { Component } from 'react';
import axios from 'axios';
import { Searchbar } from './components/Searchbar';
import { ImageGallery } from './components/ImageGallery';
import { Button } from 'components/Button/Button';

axios.defaults.baseURL = 'https://pixabay.com/api';

export class App extends Component {
  state = {
    isLoading: false,
    searchQuery: '',
    images: [],
    isUpdated: false,
    page: 1,
  };

  // async componentDidMount() {
  //   // const response = await axios.get(
  //   //   `/?q=${this.props.searchQuery}&page=1&key=27472864-20a91975f294fe19c608dc0e7&image_type=photo&orientation=horizontal&per_page=12`
  //   // );
  //   // this.setState({ images: response.data.hits });
  // }
  imageRestart = async () => {
    this.setState({ isUpdated: true });
  };

  getImages = async () => {
    const response = await axios.get(
      `/?q=${this.state.searchQuery}&page=${this.state.page}&key=27472864-20a91975f294fe19c608dc0e7&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data.hits;
  };

  shouldComponentUpdate(nextProps, nextState) {}
  async componentDidUpdate(pp, ps) {
    if (ps.searchQuery !== this.state.searchQuery) {
      const response = await this.getImages();
      this.setState({ images: response.data.hits, page: 1 });
    }
    if (ps.page !== this.state.page) {
      const response = await axios.get(
        `/?q=${this.state.searchQuery}&page=${this.state.page}&key=27472864-20a91975f294fe19c608dc0e7&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState(ps => ({ images: ps.images.concat(response.data.hits) }));
    }
  }

  componenetWillUnmount() {
    console.log('Will unmount');
  }

  handleButtonClick = () => {
    console.log('Button clicked');
    this.setState(ps => ({ page: ps.page + 1 }));
  };

  //Метод для обработки изменения значения в поле поиска
  onSearchChange = e => {
    e.preventDefault();
    this.setState({ searchQuery: e.target.elements.search.value });
  };
  // *************************************************************************
  render() {
    //Деструктуризация объекта из state
    const { images } = this.state;
    return (
      <>
        <Searchbar onSearchChange={this.onSearchChange} />
        {images.length > 0 ? <ImageGallery images={images} /> : null}
        {images.length > 0 ? <Button onClick={this.handleButtonClick} /> : null}
        {/*Подключение глобального стиля */}
        <GlobalStyle />
      </>
    );
  }
}
