import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMovies } from "../../components/API/API";
import Loader from "../../components/Loader/Loader";

const HomePage = () => {
  const [movieList, setMovielist] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function loadMovies() {
      try {
        setLoader(true);
        const movies = await fetchMovies();
        setMovielist(movies);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    loadMovies();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      {loader && <Loader />}
      <MovieList movieList={movieList} />
    </div>
  );
};

export default HomePage;
