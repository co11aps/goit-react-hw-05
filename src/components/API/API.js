import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  query: "",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`,
  },
};
const fetchMovies = async () => {
  const res = await axios.get("/trending/movie/day", options);
  return res.data.results;
};

const getMovieById = async (id) => {
  const res = await axios.get(`/movie/${id}`, options);
  console.log("movie by id", res.data);
  return res.data;
};

const getCast = async (id) => {
  const res = await axios.get(`/movie/${id}/credits`, options);
  console.log("api cast", res.data);
  return res.data.cast;
};

// https://api.themoviedb.org/3/movie/{movie_id}/reviews
const getReviews = async (id) => {
  const res = await axios.get(`/movie/${id}/reviews`, options);
  console.log("api rev", res);
  return res.data.results;
};

// https://api.themoviedb.org/3/search/movie
const getMovieByName = async (query) => {
  const res = await axios.get(`/search/movie`, options);
  console.log("api search q", query);
  console.log("api search", res);

  // return res.data.results;
};

export { fetchMovies, getMovieById, getCast, getReviews, getMovieByName };
