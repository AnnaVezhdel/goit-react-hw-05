import { Link } from "react-router-dom";

const MoviesList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies?.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`} />
            <p>{movie.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
