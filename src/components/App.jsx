import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Movies/Movies';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast.js';
import { Reviews } from './Reviews/Reviews.js';
import css from './App.module.css';

export const App = () => {
  return (
    // rozważyć zastosowane 'sharedLayout'
    <div className={css.container}>
      <div className={css.navigation}>
        {/* zmienić Linki w NavLinki i ostylowac klase active */}
        <nav className={css.navLinks}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
