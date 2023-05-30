import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/api';
import * as api from 'services/api';
import { Link } from 'react-router-dom';
const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.fetchTrendingMovies().then(response => {
      return setMovies(response.data.results);
    });
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to="/movies/:movieId">{movie.title || movie.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
