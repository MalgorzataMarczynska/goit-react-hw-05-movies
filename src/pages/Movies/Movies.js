import React, { useState, useRef } from 'react';
import { FallingLines } from 'react-loader-spinner';
import css from './Movies.module.css';
import PropTypes from 'prop-types';
import { MovieList } from 'components/MovieList/MovieList';
export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const input = useRef();

  const handleSubmit = evt => {
    evt.preventDefault();
    const searchInput = input.current.value;
    if (searchQuery === searchInput) return;
    setSearchQuery(searchInput);
    setSearchedMovies([]);
  };
  return (
    <div className={css.section}>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          ref={input}
          placeholder="What do you looking for?"
        ></input>
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
      {error && <p>Sorry, something went really wrong: {error.message}</p>}
      {isLoading && (
        <FallingLines
          color="#3f51b5"
          width="100"
          visible={true}
          ariaLabel="falling-lines-loading"
        />
      )}
      {searchedMovies.length > 0 ? (
        <MovieList moviesArr={searchedMovies} />
      ) : (
        <p className={css.invitation}>
          Hey there! There are so many films to discover! Let's seek something
          interesting!
        </p>
      )}
    </div>
  );
};
Movies.propTypes = {
  handleSubmit: PropTypes.func,
  input: PropTypes.object,
};
