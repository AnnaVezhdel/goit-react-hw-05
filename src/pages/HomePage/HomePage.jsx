import MoviesList from "../../components/MoviesList/MoviesList";
import { useHttp } from "../../hooks/useHttp";
import { fetchFilms } from "../../services/api";

const HomePage = () => {
  const [movies] = useHttp(fetchFilms);
  return (
    <div>
      <h2>Trending today</h2>
      <MoviesList movies={movies} />
    </div>
  );
};

export default HomePage;
