import { useParams } from "react-router-dom";
import SearchForm from "../../components/SearchForm/SearchForm";

const MoviesPage = () => {
  const { movieId } = useParams();

  return (
    <>
      <h2>Movies page</h2>
      <SearchForm />
    </>
  );
};
export default MoviesPage;
