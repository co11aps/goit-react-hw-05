import { useParams } from "react-router-dom";
import { getReviews } from "../API/API";
import { useEffect, useState } from "react";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    setMovieReviews([]);
    async function onGetReviews(movieId) {
      try {
        const rev = await getReviews(movieId);
        setMovieReviews(rev);
      } catch (error) {
        console.log(error);
      }
    }
    onGetReviews(movieId);
  }, [movieId]);

  return (
    <div>
      {movieReviews.length !== 0 ? (
        <ul>
          {movieReviews.map((review) => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet</p>
      )}
    </div>
  );
};

export default MovieReviews;
