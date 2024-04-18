import { Link, useParams } from "react-router-dom";

const MovieList = ({ movieList }) => {
  // const { movieId } = useParams();

  return (
    <ul>
      {movieList.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
