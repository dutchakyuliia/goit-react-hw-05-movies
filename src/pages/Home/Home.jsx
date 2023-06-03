import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/api';
import { Link } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
const Home = () => {
const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrendMovies = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const { results } = await fetchTrendingMovies();
        setTrendingMovies(results); 
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendMovies();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p>
          Sorry, we could not fetch the trending movies. Please try again later.
        </p>
      ) : (
        <MovieList trendingMovies={trendingMovies} />
      )}
    </>
  );
};

export default Home;
