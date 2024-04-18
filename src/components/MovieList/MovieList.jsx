import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movieList }) => {
  const location = useLocation();

  return (
    <ul>
      {movieList.map((movie) => (
        <li key={movie.id}>
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
