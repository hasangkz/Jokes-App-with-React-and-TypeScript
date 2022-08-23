import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';

interface IFormProps {
  theme: DefaultTheme;
}

const Form = styled.form<IFormProps>`
  padding: 16px;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export default Form;
