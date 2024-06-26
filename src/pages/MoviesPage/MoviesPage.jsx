import { useSearchParams } from "react-router-dom";
import SearchForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { getMovieByName } from "../../components/API/API";
import Loader from "../../components/Loader/Loader";
import css from "./MoviesPage.module.css";

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
    <div>
      <SearchForm onSearch={onSearch} />
      {nothingFoundErr && <p className={css.nothingFound}>Nothing found</p>}
      {loader && <Loader />}
      <MovieList movieList={movieList} />
    </div>
  );
};
export default MoviesPage;
