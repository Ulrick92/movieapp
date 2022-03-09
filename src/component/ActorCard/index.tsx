// Models
import { Actor } from "../../models";
// React Router
import {Link} from 'react-router-dom'

type Props = {
  details: Actor
}

const ActorCard = ({
  details: { original_name, profile_path, character, id },
}:Props) => {
  return (
    <div className="actor-card">
      <div className="profile">
        <img
          src={`https://image.tmdb.org/t/p/w138_and_h175_face/${profile_path}`}
          alt={original_name}
        />
        <span className="full-name">{original_name}</span>
      </div>
      <div>
        <span className="role">{character}</span>
      </div>
    </div>
  );
};

export default ActorCard;
