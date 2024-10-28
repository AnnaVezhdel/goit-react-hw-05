import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";
import { useHttp } from "../../hooks/useHttp";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();

  const [cast] = useHttp(fetchMovieCast, movieId);

  if (!cast) return <h2>Loading...</h2>;
  if (!cast?.length) {
    return <h2>There is no information</h2>;
  }

  const defaultImg =
    "https://dummyimage.com/200x300/cdcdcd/000.jpg&text=No+photo";
  return (
    <div>
      <ul className={s.castWrapper}>
        {cast?.map((actor) => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : defaultImg
              }
              width={100}
              alt={actor.name}
            />
            <p className={s.name}>{actor.name}</p>
            <p>As: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
