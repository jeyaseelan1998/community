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
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 bordered">
      <div className="movie-card">
        <img src={imgURL} alt="title" className="movie-image" />
        <h1 className="movie-title">{title}</h1>
        <a href={seedrLink}>
          <button className="btn btn-warning">DOWNLOAD</button>
        </a>
        {isHd && (
          <div className="hd-icon-container">
            <Lottie options={defaultOptions} height={45} width={50} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
