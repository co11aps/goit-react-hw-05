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
  return res.data;
};

const getCast = async (id) => {
  const res = await axios.get(`/movie/${id}/credits`, options);
  return res.data.cast;
};

// https://api.themoviedb.org/3/movie/{movie_id}/reviews
const getReviews = async (id) => {
  const res = await axios.get(`/movie/${id}/reviews`, options);
  return res.data.results;
};

// https://api.themoviedb.org/3/search/movie
const getMovieByName = async (query) => {
  const res = await axios.get(`/search/movie?query=${query}`, options);
  return res.data.results;
};

export { fetchMovies, getMovieById, getCast, getReviews, getMovieByName };
