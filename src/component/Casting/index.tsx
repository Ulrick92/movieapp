// Models
import {  Actor } from "../../models";
// Components
import { ActorCard } from "..";

type Props = {
    actors: Actor[],
    slice?: number
  }
  
  const Casting = ({ actors, slice }:Props) => {
      const actorLoop = actors.map((a) => (
        <li key={a.id}>
          <ActorCard details={a} />
        </li>
      ));

    return (
      <>
        <h2 className="tile-section">Casting</h2>
        <div className="container-films">
          <ul>{slice ? actorLoop.slice(0, slice) : actorLoop}</ul>
        </div>
      </>
    );
  };
  
  export default Casting;
  