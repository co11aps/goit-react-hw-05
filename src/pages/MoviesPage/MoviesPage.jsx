import { useSearchParams } from "react-router-dom";
import SearchForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { getMovieByName } from "../../components/API/API";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieList, setMovielist] = useState([]);

  useEffect(() => {
    const query = searchParams.get("query");
    if (!query) return;
    async function loadMovies() {
      try {
        const searchResults = await getMovieByName(query);
        setMovielist(searchResults);
      } catch (error) {
        console.log(error);
      }
    }
    loadMovies();
  }, [searchParams]);

  const onSearch = (topic) => {
    setSearchParams({ query: topic });
  };

  return (
    <>
      <h2>Movies page</h2>
      <SearchForm onSearch={onSearch} />
      <MovieList movieList={movieList} />
    </>
  );
};
export default MoviesPage;
