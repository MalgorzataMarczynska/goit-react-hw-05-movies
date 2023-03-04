import { fetchMovieById } from 'api/FetchMovieById';
import React, { useState, useEffect } from 'react';
import { FallingLines } from 'react-loader-spinner';
import { useParams, Link, Outlet } from 'react-router-dom';
import css from './MovieDetails.module.css';
//import PropTypes from 'prop-types';

export const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  console.log(movieId, typeof movieId);

  useEffect(() => {
    const handleRequest = async movieId => {
      setIsLoading(true);
      try {
        const data = await fetchMovieById(movieId);
        const movie = data.movie;
        setMovieDetail(movie);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    handleRequest();
  }, [movieId]);

  const releaseDate = movieDetail.release_date;
  console.log('data otw', releaseDate);
  // const releaseYear = movieDetail.release_date.slice(0, 4);
  // console.log('year', releaseYear);
  const genres = movieDetail.genres;
  console.log('genres', genres);
  // const movieGenres = genres.map(genre => genre.name).join(' ');
  // console.log('gatunki', movieGenres);

  const userScore = Math.round(movieDetail.vote_average * 10);
  return (
    <section className={css.section}>
      <div className={css.goBackSec}>
        <button className={css.button} type="button">
          Go back
        </button>
      </div>
      {error && <p>Sorry, something went really wrong: {error.message}</p>}
      {isLoading && (
        <FallingLines
          color="#3f51b5"
          width="100"
          visible={true}
          ariaLabel="falling-lines-loading"
        />
      )}
      <div className={css.mainDescription}>
        <img
          className={css.poster}
          src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
          alt={movieDetail.title}
        />
        <div>
          <h2>
            {movieDetail.title} ({movieDetail.release_date})
          </h2>
          <p>User Score: {userScore} %</p>
          <h3>Overview</h3>
          <p>{movieDetail.overview}</p>
          <h4>Genres</h4>
          {/* {genres.map(genre => (
            <span>{genre.name}</span>
          ))} */}
        </div>
      </div>
      <div className={css.additional}>
        <h5>Additional information</h5>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Rewiews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </section>
  );
};
