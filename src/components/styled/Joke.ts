import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';

interface JokeProps {
  theme: DefaultTheme;
}

const JokeWrapper = styled.div<JokeProps>`
  background: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  margin: 15px 0px;
  width: 650px;
  height: 220px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  font-size: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const JokeTop = styled.div<JokeProps>`
  text-align: center;
  background: ${(props) => props.theme.colors.white};
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: auto;
  transition: transform 0.2s;

  &:hover {
    filter: opacity(0.8);
    transform: scale(0.7);
  }
`;

const JokeBottom = styled.div<JokeProps>`
  background: ${(props) => props.theme.colors?.gray};
  color: #fff;
  font-size: 14px;
  display: flex;
  padding: 10px;
  font-style: italic;
`;

export { JokeWrapper, JokeTop, JokeBottom };
