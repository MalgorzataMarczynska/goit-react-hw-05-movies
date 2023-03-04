import React, { lazy, Suspense } from 'react';
import { FallingLines } from 'react-loader-spinner';
import { Routes, Route, NavLink } from 'react-router-dom';
import css from './App.module.css';

const Home = lazy(() => import('../pages/Home/Home.js'));
const Movies = lazy(() => import('../pages/Movies/Movies.js'));
const MovieDetails = lazy(() =>
  import('../pages/MovieDetails/MovieDetails.js')
);
const Cast = lazy(() => import('./Cast/Cast.js'));
const Reviews = lazy(() => import('./Reviews/Reviews.js'));
export const App = () => {
  return (
    <div className={css.container}>
      <div className={css.navigation}>
        <nav className={css.navLinks}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </div>
      <Suspense
        fallback={
          <FallingLines
            color="#3f51b5"
            width="100"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};
