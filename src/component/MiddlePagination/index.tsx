// React Router
import { useHistory, useLocation } from "react-router-dom";
// Helpers
import { substringPath } from "../../helpers";

type Props = {
    paginate:(valu:number) => void,
    page:number,
    pages:number,
    isRequest:boolean,
}

const MiddlePagination = ({
    paginate,
    page,
    pages,
    isRequest,
  }:Props) => {
    const history = useHistory();
    const location = useLocation();

    // Substr Url
    const pushUrl:string[] = substringPath(location.pathname, `/${page}`);

    // goTopage function
    const goTopage = (value:number) => {
      if (!isRequest) history.push(`${pushUrl[0]}/${value}`);
    };
  
    let pagination;
  
    // Display condition of the paging buttons
    if (pages <= 5) {
      // Generate array numbers
      pagination = (
        <>
            {[...Array(pages)].map((_, idx) => {
                const pageNumber = idx + 1;
                return (
                <button
                    className={pageNumber === page ? "active" : ""}
                    key={pageNumber}
                    onClick={() => {
                    paginate(pageNumber);
                    goTopage(pageNumber);
                    }}
                    disabled={page === pageNumber}
                >
                    {pageNumber}
                </button>
                );
            })}
        </>);
    } else {
      const startValue = Math.floor((page - 1) / 5) * 5;
      const pageNumber = (id:number) => startValue + id + 1;
      pagination = (
        <>
          {[...Array(5)].map((_, idx) => (
            <button
              className={pageNumber(idx) === page ? "active" : ""}
              key={pageNumber(idx)}
              onClick={() => {
                paginate(pageNumber(idx));
                goTopage(pageNumber(idx));
              }}
              disabled={page === pageNumber(idx)}
            >
              {pageNumber(idx)}
            </button>
          ))}
          <button>...</button>
          <button
            onClick={() => {
              paginate(pages);
              goTopage(pages);
            }}
          >
            {pages}
          </button>
        </>
      );
      if (page > 5) {
        if (pages - page >= 5) {
          pagination = (
            <>
              <button
                onClick={() => {
                  paginate(1);
                  goTopage(1);
                }}
              >
                1
              </button>
              <button>...</button>
              <button
                onClick={() => {
                  paginate(startValue);
                  goTopage(startValue);
                }}
              >
                {startValue}
              </button>
              {[...Array(5)].map((_, idx) => (
                <button
                  className={pageNumber(idx) === page ? "active" : ""}
                  key={pageNumber(idx)}
                  onClick={() => {
                    paginate(pageNumber(idx));
                    goTopage(pageNumber(idx));
                  }}
                  disabled={page === pageNumber(idx)}
                >
                  {pageNumber(idx)}
                </button>
              ))}
              <button>...</button>
              <button
                onClick={() => {
                  paginate(pages);
                  goTopage(pages);
                }}
              >
                {pages}
              </button>
            </>
          );
        } else {
          let amoutLeft = pages - page + 5;
          pagination = (
            <>
              <button
                onClick={() => {
                  paginate(1);
                  goTopage(1);
                }}
              >
                1
              </button>
              <button>...</button>
              <button
                onClick={() => {
                  paginate(startValue);
                  goTopage(startValue);
                }}
              >
                {startValue}
              </button>
              {[...Array(amoutLeft)].map((_, idx) => (
                <button
                  className={pageNumber(idx) === page ? "active" : ""}
                  key={pageNumber(idx)}
                  style={pages < pageNumber(idx) ? { display: "none" } : {}}
                  onClick={() => {
                    paginate(pageNumber(idx));
                    goTopage(pageNumber(idx));
                  }}
                  disabled={page === pageNumber(idx)}
                >
                  {pageNumber(idx)}
                </button>
              ))}
            </>
          );
        }
      }
    }
    return pagination;
  };
  
  export default MiddlePagination;