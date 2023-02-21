import React from "react";
import "./MovieCard.css";

import Lottie from "react-lottie";
import * as hdMovie from "../../asserts/lottie_files/hd-movie.json";

const MovieCard = ({ movie: { id, title, seedrLink, imgURL, isHd } }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: hdMovie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="movie-card  p-2 p-sm-3">
        <img src={imgURL} alt="title" className="movie-image" />
        <h1 className="movie-title">{title}</h1>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <a href={seedrLink}>
            <button className="btn btn-secondary">See More</button>
          </a>
          <div className="ml-2 ">
            {isHd ? (
              <Lottie options={defaultOptions} height={30} width={50} />
            ) : (
              <p className="m-0 bg-warning dvdscr">DVDScr</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
