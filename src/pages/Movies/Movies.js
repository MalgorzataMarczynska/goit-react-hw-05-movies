import React, { useState, useEffect, useRef } from 'react';
import { FallingLines } from 'react-loader-spinner';
import css from './Movies.module.css';
import PropTypes from 'prop-types';
import { MovieList } from 'components/MovieList/MovieList';
import { searchMovies } from 'api/SearchMovie';
import { useSearchParams } from 'react-router-dom';
const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const input = useRef();

  const handleSubmit = evt => {
    evt.preventDefault();
    const searchInput = input.current.value;
    if (searchQuery === searchInput) return;
    setSearchedMovies([]);
  };
  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };
  useEffect(() => {
    const handleRequest = async (searchValue, searchPage = 1) => {
      setIsLoading(true);
      try {
        const data = await searchMovies(searchQuery, (searchPage = 1));
        const movies = data.movies.results;
        setSearchedMovies(movies);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    handleRequest();
  }, [searchQuery]);
  return (
    <div className={css.section}>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          ref={input}
          placeholder="What do you looking for?"
          onChange={e => updateQueryString(e.target.value)}
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
      {searchedMovies?.length > 0 ? (
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
export default Movies;
Movies.propTypes = {
  handleSubmit: PropTypes.func,
  input: PropTypes.object,
};
