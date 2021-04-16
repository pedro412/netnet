import { useEffect, useState } from 'react';
import Hero from '../components/Hero';

export default function Home() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    fetch('/movies.json')
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        setMovies(resp);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return <div>{movies.length > 0 && <Hero movie={movies[0]} />}</div>;
}
