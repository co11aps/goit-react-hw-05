import { useSearchParams } from "react-router-dom";
import SearchForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { getMovieByName } from "../../components/API/API";
import Loader from "../../components/Loader/Loader";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieList, setMovielist] = useState([]);
  const [nothingFoundErr, setNothingFoundErr] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setNothingFoundErr(false);
    setMovielist([]);
    const query = searchParams.get("query");
    if (!query) return;
    async function loadMovies() {
      try {
        setLoader(true);
        const searchResults = await getMovieByName(query);
        if (searchResults.length === 0) {
          setNothingFoundErr(true);
          return;
        }
        setMovielist(searchResults);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
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
      {nothingFoundErr && <p>Nothing found</p>}
      {loader && <Loader />}
      <MovieList movieList={movieList} />
    </>
  );
};
export default MoviesPage;
