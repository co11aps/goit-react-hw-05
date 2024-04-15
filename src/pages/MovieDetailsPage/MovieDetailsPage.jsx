import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { getMovieById } from "../../components/API/API";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    if (!movieId) return;
    async function loadMovieById(movieId) {
      try {
        const movie = await getMovieById(movieId);
        setMovieDetails(movie);
        console.log("overview:", movie.overview);
        console.log("movie:", movie);
      } catch (error) {
        console.log(error);
      }
    }
    loadMovieById(movieId);
  }, [movieId]);

  // const releaseDate = movieDetails.release_date.slice(0, 4);

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  return (
    <>
      <p>MovieDetailsPage {movieId}</p>
      <h2>{movieDetails.original_title}</h2>

      {movieDetails.release_date && (
        <h2>{` (${movieDetails.release_date.slice(0, 4)})`}</h2>
      )}
      <h4>{movieDetails.tagline}</h4>
      <h4>Genres</h4>
      {movieDetails.genres && (
        <ul>
          {movieDetails.genres.map((genre) => (
            <li key={genre.id}>
              <p>{genre.name}</p>
            </li>
          ))}
        </ul>
      )}
      <img
        src={
          movieDetails.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
            : defaultImg
        }
        alt={movieDetails.original_name}
        width={250}
      />
      <p>{movieDetails.overview}</p>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
