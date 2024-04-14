import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const fetchMovies = async () => {
  const options = {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`,
    },
  };

  const res = await axios.get("/trending/movie/day", options);
  // console.log(res.data.results);
  return res.data.results;
};

export { fetchMovies };
