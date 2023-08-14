import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';
import PropTypes from 'prop-types';
export const MovieList = ({ moviesArr }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {moviesArr.map(movie => (
        <li key={movie.id} className={css.listItem}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <p>
              {movie.title} ({movie.release_date.slice(0, 4)})
            </p>
            {movie.poster_path !== null || undefined ? (
              <img
                className={css.poster_thumb}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            ) : (
              <img
                className={css.poster_thumb}
                src={`https://image.tmdb.org/t/p/w500/wmyYQbahIy4SF2Qo6qNBBkJFg7z.jpg`}
                alt={movie.title}
              />
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};
MovieList.propTypes = {
  movies: PropTypes.array,
};
