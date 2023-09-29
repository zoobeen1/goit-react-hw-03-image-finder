// import { GlobalStyle } from 'GlobalStyle';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import React, { Component } from 'react';
//import axios from 'axios';
import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from './ImageGallery';
// import { ImageGallery } from 'components/ImageGallery';
// import { Button } from 'components/Button';

export class App extends Component {
  state = {
    query: '',
  };

  handleFormSubmit = searchQuery => {
    this.setState({ query: searchQuery });
  };
  // *************************************************************************
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery query={this.state.query} />
        <ToastContainer autoClose={2000} />
      </>
    );
  }
}
