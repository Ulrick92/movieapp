// React Hooks
import { useState, useEffect } from "react";
// Models
import { MovieModel } from "../models";
// Helpers
import { getPagination } from "../helpers";

const usePagination = (url:string, page:number, isquery?:string) => {
  const [movies, setMovies] = useState<MovieModel[]>([]);
  const [pages, setPages] = useState<number>(1);
  const [previousPage, setPreviousPage] = useState<number>();
  const [nextPage, setNextPage] = useState<number>();
  const [loader, setLoader] = useState(true);

  const resultpagination = async () => {
    const { total_pages, results, previous_page, next_page } =
      await getPagination(url, page, isquery);
    setMovies(results);
    setPages(total_pages);
    setPreviousPage(previous_page);
    setNextPage(next_page);
    setLoader(false);
  };

  useEffect(() => {
    resultpagination();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return {
    movies,
    pages,
    previousPage,
    nextPage,
    loader,
  };
};

export default usePagination;
