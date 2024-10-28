import MoviesList from "../../components/MoviesList/MoviesList";
import { useHttp } from "../../hooks/useHttp";
import { fetchMovies } from "../../services/api";

const HomePage = () => {
  const [movies] = useHttp(fetchMovies);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2>Trending today</h2>
      <MoviesList movies={movies} />
    </div>
  );
};

export default HomePage;
