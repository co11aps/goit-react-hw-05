import { useEffect, useMemo, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMovies } from "../../components/API/API";

const HomePage = () => {
  const [movieList, setMovielist] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      try {
        const movies = await fetchMovies();
        setMovielist(movies);
      } catch (error) {
        console.log(error);
      }
    }
    loadMovies();
  }, []);

  return (
    <div>
      <h2>Homepage</h2>
      <MovieList movieList={movieList} />
    </div>
  );
};

export default HomePage;
