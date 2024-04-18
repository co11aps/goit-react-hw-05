import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movieList }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movieList.map((movie) => (
        <li key={movie.id} className={css.item}>
          <Link to={`/movies/${movie.id}`} state={location}>
            {movie.original_title}
            {` (${movie.release_date.slice(0, 4)})`}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
