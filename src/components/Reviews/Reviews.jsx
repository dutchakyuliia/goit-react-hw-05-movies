import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsMovies } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { results } = await fetchReviewsMovies(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <h3>Reviews</h3>

      {reviews.length ? (
        <ul className="reviews-container">
          {reviews.map(review => (
            <li className="review-card" key={review.id}>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie yet.</p>
      )}
    </div>
  );
};
export default Reviews;
