import { fetchMovies } from "../API/API";
// import css from "./App.module.css";

const App = () => {
  const handleClick = async () => {
    await fetchMovies();
    console.log("hello");
  };

  return (
    <>
      <h1>Main page</h1>
      <button onClick={handleClick}>Get</button>
    </>
  );
};

export default App;
