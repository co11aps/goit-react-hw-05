const MovieList = ({ movieList }) => {
  return (
    <ul>
      {movieList.map((movie) => (
        <li key={movie.id}>{movie.original_title}</li>
      ))}
    </ul>
  );
};

export default MovieList;
