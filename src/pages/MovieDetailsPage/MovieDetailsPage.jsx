import { Suspense, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieById } from "../../components/API/API";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState({});
  const [backLinkHref, setBackLinkHref] = useState({});

  const location = useLocation();

  useEffect(() => {
    setBackLinkHref(location.state ?? "/movies");
  }, []);

  useEffect(() => {
    if (!movieId) return;
    async function loadMovieById(movieId) {
      try {
        const movie = await getMovieById(movieId);
        setMovieDetails(movie);
      } catch (error) {
        console.log(error);
      }
    }
    loadMovieById(movieId);
  }, [movieId]);

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  return (
    <div>
      <div className={css.details}>
        <Link to={backLinkHref} className={css.backBtn}>
          Back
        </Link>
        <div>
          <img
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                : defaultImg
            }
            alt={movieDetails.original_name}
            width={250}
          />
        </div>
        <div className={css.descr}>
          <div>
            <div className={css.titleYear}>
              <h2>{movieDetails.original_title}</h2>
              {movieDetails.release_date && (
                <h2>{` (${movieDetails.release_date.slice(0, 4)})`}</h2>
              )}
            </div>
            <h4>{movieDetails.tagline}</h4>

            <p className={css.overview}>{movieDetails.overview}</p>
          </div>

          <div>
            <h4>Genres:</h4>
            {movieDetails.genres && (
              <ul className={css.genres}>
                {movieDetails.genres.map((genre) => (
                  <li key={genre.id}>
                    <p>{genre.name}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className={css.additional}>
        <h4>Additional information</h4>

        <div className={css.addLinks}>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
