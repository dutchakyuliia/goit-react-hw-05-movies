import Search from 'components/Search/Search';
import { React, useEffect, useState } from 'react';
import * as api from 'services/api';

const Movies = () => {
    const [movies, setMovies] = useState([]);

  
  return (
    <div>
      <h1>Movies</h1>
      <Search></Search>
    </div>
  );
};

export default Movies;
