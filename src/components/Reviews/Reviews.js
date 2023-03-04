import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'api/FetchReviews';
import { FallingLines } from 'react-loader-spinner';
import css from './Reviews.module.css';

export const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const handleRequest = async (id, page = 1) => {
      setIsLoading(true);
      try {
        const id = Number(movieId);
        const data = await fetchReviews(id, (page = 1));
        const review = data.reviews.results;
        setReviews(review);
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
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3 className={css.author}>Author: {review.author}</h3>
            <p className={css.review}> {review.content}</p>
          </li>
        ))}
        {reviews.length === 0 && (
          <p>We are sorry! We do not have any reviews for this movie</p>
        )}
      </ul>
    </section>
  );
};
