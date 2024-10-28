import {
  useLocation,
  useParams,
  Link,
  NavLink,
  Outlet,
} from "react-router-dom";
import clsx from "clsx";
import { useHttp } from "../../hooks/useHttp";
import { fetchMovieDetails } from "../../services/api";
import { useRef } from "react";

import s from "./MovieDetails.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const goBack = useRef(location.state ?? "/");

  const [movie] = useHttp(fetchMovieDetails, movieId);

  if (!movie) return <h2>Loading...</h2>;

  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };
  return (
    <div>
      <Link to={goBack.current} className={s.backLink}>
        <button className={s.backLink}>Go back</button>
      </Link>
      <div className={s.wrapper}>
        <div className={s.movieWrapper}>
          <img
            src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
            alt="Poster"
          />
          <div className={s.movieDetails}>
            <h2>
              {movie.title} ({movie.release_date.slice(0, 4)})
            </h2>
            <p>
              Vote average: <span>{movie.vote_average}</span>
            </p>
            <p>
              Vote count: <span>{movie.vote_count}</span>
            </p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
            <hr />
            <p>Additional information</p>
            <div className={s.nav}>
              <NavLink to="cast" className={buildLinkClass}>
                Cast
              </NavLink>
              <NavLink to="reviews" className={buildLinkClass}>
                Reviews
              </NavLink>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
