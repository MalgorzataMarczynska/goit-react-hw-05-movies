import React from 'react';
import { Link } from 'react-router-dom';
import css from './MovieList.module.css';
import PropTypes from 'prop-types';
export const MovieList = ({ moviesArr }) => {
  return (
    <ul className={css.list}>
      {moviesArr.map(movie => (
        <li key={movie.id} className={css.listItem}>
          <Link to={`/movies/${movie.id}`}>
            <p>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
MovieList.propTypes = {
  movies: PropTypes.array,
};
