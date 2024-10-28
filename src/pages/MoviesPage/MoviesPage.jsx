import { useMemo } from "react";
import MoviesList from "../../components/MoviesList/MoviesList";
import { useSearchParams } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { useHttp } from "../../hooks/useHttp";
import { fetchMoviesSearch } from "../../services/api";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const [movies] = useHttp(fetchMoviesSearch, query);

  const handleChangeQuery = (newQuery) => {
    if (!newQuery) {
      return setSearchParams({});
    }
    searchParams.set("query", newQuery);
    setSearchParams(searchParams);
  };

  const filterData = useMemo(
    () =>
      movies?.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      ) || [],
    [movies, query]
  );

  const handleSubmit = (values, { resetForm }) => {
    handleChangeQuery(values.query);
    resetForm();
  };

  return (
    <div className={s.formWrapper}>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field name="query" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      {movies?.length > 0 && <MoviesList movies={filterData} />}
    </div>
  );
};

export default MoviesPage;
