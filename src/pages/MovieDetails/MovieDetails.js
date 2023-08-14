import { fetchMovieById } from 'api/FetchMovieById';
import React, { useState, useEffect, Suspense } from 'react';
import { FallingLines } from 'react-loader-spinner';
import {
  useParams,
  useLocation,
  Link,
  Outlet,
  useNavigate,
} from 'react-router-dom';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

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
        <button
          type="button"
          className={css.goBack}
          onClick={() => navigate(-1)}
        >
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
        {movieDetail.poster_path !== null || undefined ? (
          <img
            className={css.poster}
            src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
            alt={movieDetail.title}
          />
        ) : (
          <img
            className={css.poster}
            src={`https://image.tmdb.org/t/p/w500/wmyYQbahIy4SF2Qo6qNBBkJFg7z.jpg`}
            alt={movieDetail.title}
          />
        )}
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
            <Link to="cast" className={css.linkItem} state={{ from: location }}>
              Cast
            </Link>
          </li>
          <li>
            <Link
              to="reviews"
              className={css.linkItem}
              state={{ from: location }}
            >
              Rewiews
            </Link>
          </li>
        </ul>
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
          <Outlet />
        </Suspense>
      </div>
    </section>
  );
};
export default MovieDetails;
