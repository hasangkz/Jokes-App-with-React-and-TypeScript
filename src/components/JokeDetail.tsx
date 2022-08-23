import { FunctionComponent } from 'react';
import { JokeType } from '../types';

import { JokeWrapper, JokeTop, JokeBottom } from './styled/Joke';

interface IJokeProps {
  joke: JokeType;
}

export const JokeDetail: FunctionComponent<IJokeProps> = ({ joke }) => {
  return (
    <JokeWrapper>
      <JokeTop>
        <p>{joke.joke}</p>
      </JokeTop>
      <JokeBottom>
        <p>{joke.category}</p>
      </JokeBottom>
    </JokeWrapper>
  );
};
