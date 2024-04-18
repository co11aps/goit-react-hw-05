import { useParams } from "react-router-dom";
import { getReviews } from "../API/API";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [noReviews, setNoReviews] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    setNoReviews(false);
    setMovieReviews([]);

    async function onGetReviews(movieId) {
      try {
        setLoader(true);
        const rev = await getReviews(movieId);
        if (rev.length === 0) {
          setNoReviews(true);
          return;
        }
        setMovieReviews(rev);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    onGetReviews(movieId);
  }, [movieId]);

  return (
    <div className={css.container}>
      {loader && <Loader />}
      {movieReviews.length > 0 && (
        <ul>
          {movieReviews.map((review) => (
            <li key={review.id} className={css.item}>
              <p className={css.author}>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
      {noReviews && <p>No reviews yet</p>}
    </div>
  );
};

export default MovieReviews;
