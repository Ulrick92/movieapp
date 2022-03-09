// Models
import { MovieModel } from "../../models";
// React Router
import { Link, useHistory } from "react-router-dom";

type Props = {
  details: MovieModel
}

const MovieCard = ({ details: { title, poster_path, id } }:Props) => {
  const history = useHistory();

  const refresh = () => {
    history.push(`/movie/${id}`);
    window.location.reload();
  };

  return (
    <div className="flip-box-inner">
      <div className="flip-box-front">
        <img
          src={`https://image.tmdb.org/t/p/w185${poster_path}`}
          alt={title}
        />
      </div>
      <div className="flip-box-back">
        <div>
          <p>{title}</p>
          <Link
            className="more"
            to={{
              pathname: `/movie/${id}`,
            }}
            onClick={refresh}
          >
            <span>Voir</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
