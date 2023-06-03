import Loader from "components/Loader/Loader";
import MovieCard from "components/MovieCard/MovieCard";
import React, { Suspense, useEffect, useState } from "react"
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchDetailsMovies } from "services/api";
const MovieDetails = () => {
 const { movieId } = useParams();
  const location = useLocation();
  const [selectedMovie, setSelectedMovie] = useState({});

 
  useEffect(() => {
    const fetchSelectedMovie = async movieId => {
      try {
        const movieData = await fetchDetailsMovies(movieId);
        setSelectedMovie(movieData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSelectedMovie(movieId);
  }, [movieId]);

  return (
    <main>
      <div>
        <Link to={location?.state?.from ?? '/'}>
          <button type="button">
            Go back
          </button>
        </Link>

        <MovieCard movie={selectedMovie} />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );

}

export default MovieDetails