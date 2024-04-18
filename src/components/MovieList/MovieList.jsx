import { Link } from "react-router-dom";

const MovieList = ({ movieList }) => {
  return (
    <ul>
      {movieList.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            {movie.original_title}
            {` (${movie.release_date.slice(0, 4)})`}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
