import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';

interface IWrapperProps {
  theme: DefaultTheme;
}

const Wrapper = styled.div<IWrapperProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 700px;
  padding: 1rem;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.darkseagreen};
`;

export default Wrapper;
