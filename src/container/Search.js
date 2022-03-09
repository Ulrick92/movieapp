// React Hooks
import React, { useState } from "react";
// Components
import { MoviesList, Pagination } from "../component";

const Search = ({ location }) => {
  const { search } = location;
  const [movies, setMovies] = useState([]);
  return (
    <>
      <MoviesList movies={movies} />
      <Pagination
        url={`/search${search}`}
        setMovies={(value) => {
          setMovies(value);
        }}
        isquery
      />
    </>
  );
};

export default Search;
