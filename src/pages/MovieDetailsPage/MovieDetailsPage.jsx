import { Outlet, useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  return (
    <>
      <p>MovieDetailsPage {movieId}</p>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
