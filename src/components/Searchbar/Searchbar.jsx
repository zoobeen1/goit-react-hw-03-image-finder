import { Component } from 'react';
import { toast } from 'react-toastify';
import {
  SearchbarStyled,
  Form,
  Input,
  Button,
  ButtonLabel,
} from './Searchbar.styled';
//Готово! Работает
//Возвращает в стэйт аппа поисковый запрос после нажатия на кнопку поиска
export class Searchbar extends Component {
  state = { searchQuery: '' };

  // Вызывается при отправке формы
  // очищает поле ввода
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      toast.error('Введите запрос прежде чем отправлять!!!');
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };
  // Вызывается при изменении поля ввода
  // изменяет "местный" стэйт - паттерн "Контролируемый элемент"
  handleChange = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };

  // *************************************************************************
  render() {
    return (
      <SearchbarStyled>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <ButtonLabel>Search</ButtonLabel>
          </Button>
          <Input
            type="text"
            name="search"
            autocomplete="off"
            value={this.state.searchQuery}
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </Form>
      </SearchbarStyled>
    );
  }
}
