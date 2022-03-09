// Components
import { Slider, MoviesList, LoadingPage } from "../component";
// Custom Hooks
import { useMoviesHome } from "../hooks";

const Home = () => {
  const { loader, slides, popularMovies } = useMoviesHome();

  if (loader) return <LoadingPage/>;

  return (
    <>
      <section>
        <h2 className="tile-section">Les Meilleurs films aux cinéma</h2>
        <div className="slider-home">
          <Slider slides={slides} />
        </div>
      </section>
      <section>
        <MoviesList
          movies={popularMovies}
          title={"Films populaires"}
          slice={18}
        />
      </section>
    </>
  );
};

export default Home;
