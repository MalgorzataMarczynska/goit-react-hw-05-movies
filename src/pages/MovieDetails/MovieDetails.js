import { fetchMovieById } from 'api/FetchMovieById';
import React, { useState, useEffect } from 'react';
import { FallingLines } from 'react-loader-spinner';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import css from './MovieDetails.module.css';

export const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const handleRequest = async id => {
      setIsLoading(true);
      try {
        const id = Number(movieId);
        const data = await fetchMovieById(id);
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
  const releaseYear = `${releaseDate}`.substring(0, 4);

  const genres = movieDetail.genres;
  const genreNames = genres?.map(genre => genre.name).join(' ');
  const userScore = Math.round(movieDetail.vote_average * 10);
  return (
    <section className={css.section}>
      <div className={css.goBackSec}>
        <Link to={backLinkHref} className={css.goBack}>
          Go back
        </Link>
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
          <h2 className={css.title}>
            {movieDetail.title} ({releaseYear})
          </h2>
          <p>
            <b>User Score:</b> {userScore} %
          </p>
          <h3>Overview</h3>
          <p>{movieDetail.overview}</p>
          <h4>Genres</h4>
          {genres?.length > 0 ? (
            <p className={css.genres}>{genreNames} </p>
          ) : (
            <p>We have no information about it</p>
          )}
        </div>
      </div>
      <div className={css.additional}>
        <h5>Additional information</h5>
        <ul>
          <li>
            <Link to="cast" className={css.linkItem}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" className={css.linkItem}>
              Rewiews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </section>
  );
};
