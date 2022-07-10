import { GlobalStyle } from 'GlobalStyle';
import React, { Component } from 'react';
import { Searchbar } from './components/Searchbar';
import { ImageGallery } from './components/ImageGallery';
// import { Button } from 'components/Button/Button';

export class App extends Component {
  state = {
    // isLoading: false,
    searchQuery: '',
  };

  // async componentDidMount() {
  //   const response = await axios.get('/search?query=react');
  //   this.setState({ articles: response.data.hits });
  // }

  // componentDidUpdate() {}

  // handleButtonClick = () => {
  //   console.log('Button clicked');
  // };

  onSearchChange = e => {
    e.preventDefault();
    this.setState({ searchQuery: e.target.elements.search.value });
  };
  // *************************************************************************
  render() {
    //Деструктуризация объекта из state
    const { searchQuery } = this.state;
    return (
      <>
        <Searchbar onSearchChange={this.onSearchChange} />
        {searchQuery ? <ImageGallery searchQuery={searchQuery} /> : null}
        {/* <Button onClick={this.handleButtonClick} /> */}
        {/*Подключение глобального стиля */}
        <GlobalStyle />
      </>
    );
  }
}
