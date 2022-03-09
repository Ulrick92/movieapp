// React Router
import {Link} from 'react-router-dom';
// Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// Model
import { MovieModel } from "../../models";
// Swiper components
import SwiperCore, { Pagination, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
// modules styles
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {
  slides: MovieModel[]
}

// install Swiper components
SwiperCore.use([Pagination, A11y]);

const Slider = ({ slides }:Props) => {

  const slidesLoop = slides.map(({ id, backdrop_path, title, overview, release_date, vote_average }) => (
    <SwiperSlide key={id}>
        <div>
            <div className="slider-home-slide">
            <img
                src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                alt={title}
            />
            <div className="slide-caption">
                <div className="slide-caption-title">
                    <h3>{title}</h3>
                </div>
                <div className="slide-caption-desc">
                    <p>{overview}</p>
                </div>
                <div className="slide-caption-info">
                    <div>
                        <strong>Date de sortie :</strong> {release_date}
                    </div>
                </div>
                <Link
                to={{
                    pathname: `/movie/${id}`,
                }}
                >
                    <button className="slide-caption-button">Détails</button>
                </Link>{" "}
                <span>
                    Note : <strong>{vote_average}</strong> / 10
                </span>
            </div>
            </div>
        </div>
    </SwiperSlide>
  ))

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
       {slidesLoop}
      </Swiper>
    </>
  );
};

export default Slider;
