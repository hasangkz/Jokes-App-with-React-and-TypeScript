import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';

interface ISearchProps {
  theme: DefaultTheme;
}

const Search = styled.input<ISearchProps>`
  margin 10px;
  padding 8px;
  border-radius:8px;
  border: none;
  outline: none;
  autofocus;
`;

export default Search;
