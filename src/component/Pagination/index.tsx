// React Router
import { useHistory, useLocation } from "react-router-dom";
// Components
import { MiddlePagination } from "..";
// Helpers
import { substringPath } from "../../helpers";

type Props = {
  paginate: (value:number)=>void,
  page:number,
  pages:number,
  isRequest:boolean,
  previousPage?:number,
  nextPage?:number,
}

const Pagination = ({
  paginate,
  page,
  pages,
  isRequest,
  previousPage,
  nextPage,
}:Props) => {
  // React Router Hooks
  const history = useHistory();
  const location = useLocation();

  // Substr Url
  const pushUrl:string[] = substringPath(location.pathname, `/${page}`);

  // Go to previous page
  const goToPrev = () => {
    previousPage && paginate(previousPage);
    if (!isRequest) history.push(`${pushUrl[0]}/${previousPage}`);
  };

  // Go to next page
  const goToNext = () => {
    nextPage && paginate(nextPage);
    if (!isRequest) history.push(`${pushUrl[0]}/${nextPage}`);
  };

  if (pages <= 1) {
    return null;
  }
  
  return (
    <>
      <button onClick={goToPrev} disabled={!previousPage}>
        Précédent
      </button>
      <MiddlePagination paginate={paginate} page={page} pages={pages}
        isRequest={isRequest}/>
      <button onClick={goToNext} disabled={!nextPage}>
        Suivant
      </button>
    </>
  );
};

export default Pagination;
