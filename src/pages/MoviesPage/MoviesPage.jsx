import { Link, useParams, useSearchParams } from "react-router-dom";
import SearchForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MovieList/MovieList";
import { useEffect } from "react";
import { getMovieByName } from "../../components/API/API";

const MoviesPage = () => {
  // const { movieId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams) return;
    async function loadMovies() {
      try {
        const searchResults = await getMovieByName(searchParams);
        console.log("search res effect:", searchResults);
        // setMovielist(movies);
      } catch (error) {
        console.log(error);
      }
    }
    loadMovies();
  }, [searchParams]);

  // const onSearch = (topic) => {
  //   console.log("onSearch topic", topic);
  // };

  return (
    <>
      <h2>Movies page</h2>
      <SearchForm onSearch={setSearchParams} />
      {/* <MovieList /> */}
    </>
  );
};
export default MoviesPage;
