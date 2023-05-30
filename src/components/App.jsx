import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import { Routes, Route, NavLink } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" >
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
};
