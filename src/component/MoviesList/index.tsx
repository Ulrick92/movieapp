// Models
import { MovieModel } from "../../models";
// Components
import { MovieCard } from "..";

type Props = {
    movies: MovieModel[],
    title?: String,
    slice?: number
  }
  
  const MoviesList = ({ movies, title, slice }:Props) => {
      const movieLoop = movies.map((m) => (
        <li className="flip-box" key={m.id}>
          <MovieCard details={m} />
        </li>
      ));

    return (
      <>
        <h2 className="tile-section">{title}</h2>
        <div className="container-films">
          <ul>{slice ? movieLoop.slice(0, slice) : movieLoop}</ul>
        </div>
      </>
    );
  };
  
  export default MoviesList;
  