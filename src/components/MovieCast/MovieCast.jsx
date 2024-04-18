import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "../API/API";
import css from "./MovieCast.module.css";
import Loader from "../Loader/Loader";

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    setMovieCast(null);
    async function onGetCast(movieId) {
      try {
        setLoader(true);
        const cast = await getCast(movieId);
        setMovieCast(cast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    onGetCast(movieId);
  }, [movieId]);

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  return (
    <div className={css.castDiv}>
      {loader && <Loader />}
      {movieCast && (
        <ul className={css.list}>
          {movieCast.map((actor) => (
            <li className={css.card} key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : defaultImg
                }
                alt={actor.original_name}
                width={250}
                height={375}
              />
              <h4>{actor.original_name}</h4>
              {actor.character && (
                <p className={css.character}>{`(${actor.character})`}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
