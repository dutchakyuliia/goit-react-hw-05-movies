import Search from 'components/Search/Search';
import { useEffect, useState } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import { fetchSearchMovies } from 'services/api';
import { toast } from 'react-hot-toast';

const Movies = () => {
   const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query') ?? ''; 
    if (!query) return;

    const getMovie = async () => {
      try {
        const { results } = await fetchSearchMovies(query);

        if (results.length === 0) {
          toast.dismiss();
          toast.error('No movies found');
          setMovies([]); 
        } else {
          setMovies(results);
        }
      } catch (error) {
        toast.error(error.message);
        setMovies([]);
      }
    };

      getMovie();
  }, [searchParams]);

  
  const handleSubmit = query => {
    setSearchParams({ query }); 
  };

  return (
    <main>
      <div>
        <h2>Movies</h2>
        <Search onSubmit={handleSubmit} /> 
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title|| movie.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Movies;
