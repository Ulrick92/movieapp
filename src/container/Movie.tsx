// React Router
import { useParams } from "react-router-dom";
// Color Thief
import { Palette } from "color-thief-react";
// Hooks
import { useMovieDetails } from "../hooks";
// Components
import { Casting, LoadingPage } from "../component";
// Containers
import { PaginationContent } from ".";
// Helpers
import { hexToRgba } from "../helpers";

type MovieParams = {
  id:string
}

const Movie = () => {
  const { id } = useParams<MovieParams>();
  const {
    movie: {
      release_date,
      vote_average,
      backdrop_path,
      genres,
      original_title,
      overview,
      poster_path,
    },
    actors,
    loader,
  } = useMovieDetails(id);

  const imgSrc = `https://image.tmdb.org/t/p/w185${poster_path}`;
  const LoadingImg = () => <div>Loading...</div>;

  if (loader) return <LoadingPage/>;

  return (
    <>
      <Palette src={imgSrc} crossOrigin="anonymous" format="hex" colorCount={4}>
        {({ data, loading }) => {
          if (loading) return <LoadingImg />;
          return (
            // "??"" Nullish coalescing operator
            <div style={{ backgroundColor: hexToRgba(data?.[0] ?? "", 0.5) }}> 
              <img src={imgSrc} alt={original_title} />
            </div>
          );
        }}
      </Palette>
      {actors.length > 0 && (
        <Casting actors={actors} slice={14} />
      )}
      <PaginationContent request={`/similar/${id}`} title={"Film simlaires"} />
    </>
  );
};

export default Movie;
