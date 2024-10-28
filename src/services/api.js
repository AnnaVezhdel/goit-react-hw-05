import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDQxMmQ3NjE2NTFlMTc0ZGNmZjgyYWIzYTEyNGZhNyIsIm5iZiI6MTcyOTk2NTk2Ny44MjA4MjcsInN1YiI6IjY3MWQyZTFiYTRhYzhhNDMyYzVjNzhlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bpHo6iIq7z93U6yMNt3P-1MChwUT3ZmbNr0GQJFEDf0";

export const fetchMovies = async () => {
  const { data } = await axios.get("/trending/movie/day");
  return data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}`);
  return data;
};

export const fetchMovieCast = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}/credits`);
  return data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}/reviews`);
  return data.results;
};

export const fetchMoviesSearch = async (query) => {
  const { data } = await axios.get(`/search/movie`, {
    params: {
      query,
    },
  });
  return data.results;
};
