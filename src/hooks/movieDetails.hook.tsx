// Models
import { MovieModel, Actor } from "../models";
// React Hooks
import { useEffect, useState } from "react";
// Helpers
import { getData } from "../helpers";

const useMovieDetails = (id:string) => {
  const [movie, setMovie] = useState<MovieModel>({});
  const [actors, setActors] = useState<Actor[]>([]);
  const [loader, setLoader] = useState(true);

  const movieDetails = async () => {
    const [details, casting] = await getData<[MovieModel, Actor[]]>(`/details/${id}`);
    setMovie(details);
    setActors(casting);
    setLoader(false);
  };

  useEffect(() => {
    movieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return {
    movie,
    actors,
    loader,
  };
};

export default useMovieDetails;
