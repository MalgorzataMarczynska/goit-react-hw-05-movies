import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';
import PropTypes from 'prop-types';
export const MovieList = ({ moviesArr }) => {
  const location = useLocation();
  const releaseYear = moviesArr
    .map(movie => movie.release_date)
    .join('')
    .slice(0, 4);

  return (
    <ul className={css.list}>
      {moviesArr.map(movie => (
        <li key={movie.id} className={css.listItem}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <p>
              {movie.title} ({releaseYear})
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
MovieList.propTypes = {
  movies: PropTypes.array,
};
