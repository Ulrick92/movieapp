// React Hooks
import React, { useState} from "react";
// React Router
import { useLocation, useParams } from "react-router-dom";
// Components
import { MoviesList, Pagination, LoadingPage } from "../component";
// Custom Hooks
import { usePagination } from "../hooks";
// Helpers
import { substringPath } from "../helpers";

type Props = {
  request?:string,
  title?:string,
}

type PageParams = {
  pageNumber:string
}

const PaginationContent= ({ request, title }:Props) => {
  // Get page number with useParams function
  const {pageNumber} = useParams<PageParams>();
  const location = useLocation();

  // Is the true or not
  const isRequest = request ? true : false;

  // Num page
  const pageNumberParams = Number(pageNumber) || 1;

  const [page, setPage] = useState(pageNumberParams);

  // Paginate function
  const paginate = (value:number) => setPage(value);

  // Substr Url
  const substrRequest:string[] = substringPath(location.pathname, "/page");

  // Destructuring result
  const { movies, pages, previousPage, nextPage, loader } = usePagination(
    request ? request : `${substrRequest[0]}`,
    page
  );

  if (loader) return <LoadingPage/>;

  return (
    <>
      <MoviesList movies={movies} title={title}/>
      <Pagination
        page={page}
        pages={pages}
        paginate={paginate}
        isRequest={isRequest}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </>
  );
};

export default PaginationContent;
