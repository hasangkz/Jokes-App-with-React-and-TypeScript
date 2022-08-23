import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';

interface IButtonProps {
  theme: DefaultTheme;
}

const Button = styled.button<IButtonProps>`
  padding: 12px;
  outline: none;
  border: none;
  color: ${(props) => props.theme.colors.gray};
  border-radius: 8px;
  background: ${(props) => props.theme.colors.white};
  cursor: pointer;
`;

export default Button;
