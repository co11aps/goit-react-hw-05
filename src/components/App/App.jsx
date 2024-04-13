import { fetchMovies } from "../API/API";
// import css from "./App.module.css";

const App = () => {
  const handleClick = async () => {
    console.log("hello");
    await fetchMovies();
  };

  return (
    <>
      <h1>Main page</h1>
      <button onClick={handleClick}>Get</button>
    </>
  );
};

export default App;
