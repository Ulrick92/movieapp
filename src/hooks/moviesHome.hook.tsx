// Models
import { MovieModel } from "../models";
// React Hooks
import { useState, useEffect } from "react";
// Helpers
import { getData} from "../helpers";


const useMoviesHome = () => {
  const [slides, setSlides] = useState<MovieModel[]>([]);
  const [popularMovies, setPopularMovies] = useState<MovieModel[]>([]);
  const [loader, setLoader] = useState(true);

  const moviesHome = async () => {
    const [nowplaying, populate] = await getData<[MovieModel[],MovieModel[]]>("/movies_home");
    setSlides(nowplaying);
    setPopularMovies(populate);
    setLoader(false);
  };

  useEffect(() => {
    moviesHome();
  }, []);

  return {
    slides,
    popularMovies,
    loader,
  };
};

export default useMoviesHome;
