// const { default: axios } = require("axios");

// const url =
//   "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

// const options = {
//   headers: {
//     // Замість api_read_access_token вставте свій токен
//     Authorization: "Bearer api_read_access_token",
//   },
// };

// axios
//   .get(url, options)
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const fetchMovies = async () => {
  const options = {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`,
    },
  };

  const res = await axios.get("/trending/movie/day", options);
  console.log(res.data);
  //   return res;
};

// ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}

// const fetchMovies = async () => {
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzI3MzcxMzdlYTlhNzI3MDk5Yzk5NjhlNmM5MjhjNyIsInN1YiI6IjY2MWEwMzk5ZGFmNTdjMDE0OTNlZTZjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UhCzdM0SLKkf654pzUkEKk5ABeNhkawrCfE-oMyrgUg",
//     },
//   };

//   axios
//     .get("https://api.themoviedb.org/3/movie/changes?page=1", options)
//     .then((response) => console.log(response.data))
//     .catch((err) => console.error(err));
// };
export { fetchMovies };
