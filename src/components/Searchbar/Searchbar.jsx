import { Component } from 'react';
import { SearchbarStyled } from './Searchbar.styled';
import { SearchForm } from './SearchForm';

export class Searchbar extends Component {
  state = {};
  // componentDidMount() {}
  // componentDidUpdate() {}

  //Вызывается при отправке формы
  // handleSubmit = e => {
  //   e.preventDefault();
  //   console.log('Button Submit clicked');
  // };

  // *************************************************************************
  render() {
    //Деструктуризация объекта из state
    const { onSearchChange } = this.props;
    return (
      <SearchbarStyled>
        <SearchForm onSubmit={onSearchChange} />
      </SearchbarStyled>
    );
  }
}
