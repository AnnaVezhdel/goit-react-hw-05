import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/api";
import { useHttp } from "../../hooks/useHttp";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [reviews] = useHttp(fetchMovieReviews, movieId);

  if (!reviews) return <h2>Loading...</h2>;

  if (!reviews?.length) {
    return <h2>No reviews yet</h2>;
  }

  return (
    <div>
      <ul className={s.reviewsList}>
        {reviews?.map((review) => (
          <li key={review.id}>
            <p>Author: {review.author}</p>
            <span>{review.content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
