import { Link, useParams } from "react-router-dom";
import SearchForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const { movieId } = useParams();

  // useEffect(() => {
  //   async function loadMovies() {
  //     try {
  //       const movies = await fetchMovies();
  //       setMovielist(movies);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   loadMovies();
  // }, []);

  const onSearch = (topic) => {
    console.log("onSearch topic", topic);
  };

  return (
    <>
      <h2>Movies page</h2>
      <SearchForm onSearch={onSearch} />
      {/* <MovieList /> */}
    </>
  );
};
export default MoviesPage;
