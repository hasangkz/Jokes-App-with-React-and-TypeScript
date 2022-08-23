import { useState } from 'react';
import {
  Wrapper,
  Main,
  Head,
  Form,
  Search,
  Button,
} from './components/styled/index';

import { JokeType } from './types';

import { JokeDetail } from './components/JokeDetail';

import axios from 'axios';

function App() {
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [jokes, setJokes] = useState<JokeType[]>([]);

  const BASE_URL: string = 'https://v2.jokeapi.dev/joke/Any?type=single';
  const END_POINT: string = `${BASE_URL}&contains=${search}&amount=10`;

  const handleSearch = (
    event: any & React.ChangeEventHandler<HTMLInputElement>
  ) => {
    setSearch(event.target.value);
  };

  const getJokes = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(END_POINT);
      if (data.error) {
        setError(true);
        setJokes([]);
      } else {
        setJokes(data.jokes);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setSearch('');
    }
  };

  const handleJokes = (e: any & React.FormEventHandler<HTMLFormElement>) => {
    e.preventDefault();
    getJokes();
  };

  return (
    <div>
      <Wrapper>
        <Main>
          <Head>JOKER</Head>
        </Main>

        <Form onSubmit={handleJokes}>
          <Search
            type='text'
            placeholder='Search a joke'
            value={search}
            onChange={handleSearch}
          />
          <Button type='submit'>Find a Joke</Button>
        </Form>
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Sorry... No Joke Like This</h1>
        ) : (
          jokes.length > 0 &&
          jokes.map((joke) => <JokeDetail key={joke.id} joke={joke} />)
        )}
      </Wrapper>
    </div>
  );
}

export default App;
