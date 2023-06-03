import { Link } from "react-router-dom";

const MovieList = ({ trendingMovies }) => {
  return (
    <>
      <ul>
        {trendingMovies.map(trendingMovie => (
          <li key={trendingMovie.id}>
            <Link to={`/movies/${trendingMovie.id}`}>
              {trendingMovie.title || trendingMovie.name }
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;