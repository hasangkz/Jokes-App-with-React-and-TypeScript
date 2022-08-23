import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';

interface IHeadProps {
  theme: DefaultTheme;
}

const Head = styled.h1<IHeadProps>`
  font-size: 5em;
  margin: 0px 32px;
  letter-spacing: 1rem;
  color: ${(props) => props.theme.colors.main};
`;

export default Head;
