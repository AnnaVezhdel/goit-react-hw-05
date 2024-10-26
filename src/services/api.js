import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDQxMmQ3NjE2NTFlMTc0ZGNmZjgyYWIzYTEyNGZhNyIsIm5iZiI6MTcyOTk2NTk2Ny44MjA4MjcsInN1YiI6IjY3MWQyZTFiYTRhYzhhNDMyYzVjNzhlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bpHo6iIq7z93U6yMNt3P-1MChwUT3ZmbNr0GQJFEDf0";

export const fetchFilms = async () => {
  const { data } = await axios.get("/trending/movie/day");
  return data.results;
};
