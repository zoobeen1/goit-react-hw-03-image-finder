import { Form, Input, Button, ButtonLabel } from './SearchForm.styled';
export const SearchForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Button type="submit">
        <ButtonLabel>Search</ButtonLabel>
      </Button>
      <Input
        type="text"
        name="search"
        autocomplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </Form>
  );
};
