import React, { useState, useEffect } from 'react';
import { FallingLines } from 'react-loader-spinner';
import css from './Home.module.css';
import PropTypes from 'prop-types';
import { MovieList } from 'components/MovieList/MovieList';
import { popularMovies } from 'api/FetchMovies.js';
export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleRequest = async page => {
      setIsLoading(true);
      try {
        const data = await popularMovies((page = 1));
        const movies = data.movies.results;
        setTrendingMovies(movies);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    handleRequest();
  }, []);

  return (
    <main>
      <section className={css.section}>
        <h1 className={css.title}>Trending today</h1>
        {error && <p>Sorry, something went really wrong: {error.message}</p>}
        {isLoading && (
          <FallingLines
            color="#3f51b5"
            width="100"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        )}

        <MovieList moviesArr={trendingMovies} />
      </section>
    </main>
  );
};
Home.propTypes = {
  trendingMovies: PropTypes.array,
};
