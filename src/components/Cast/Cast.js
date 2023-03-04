import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FallingLines } from 'react-loader-spinner';
import { fetchCast } from 'api/FetchCast';
import css from './Cast.module.css';
//import PropTypes from 'prop-types';
export const Cast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const handleRequest = async movieId => {
      setIsLoading(true);
      try {
        const data = await fetchCast(movieId);
        const cast = data.credit.cast;
        setMovieCast(cast);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    handleRequest();
  }, [movieId]);

  return (
    <section>
      {error && <p>Sorry, something went really wrong: {error.message}</p>}
      {isLoading && (
        <FallingLines
          color="#3f51b5"
          width="100"
          visible={true}
          ariaLabel="falling-lines-loading"
        />
      )}
      <ul className={css.list}>
        {movieCast.map(actor => (
          <li key={actor.cast_id} className={css.listItem}>
            {actor.poster_path !== null || undefined ? (
              <img
                className={css.poster}
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actor.name}
              />
            ) : (
              <img
                className={css.poster}
                src={`https://image.tmdb.org/t/p/w500/wmyYQbahIy4SF2Qo6qNBBkJFg7z.jpg`}
                alt={actor.name}
              />
            )}
            <p>Actor: {actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
