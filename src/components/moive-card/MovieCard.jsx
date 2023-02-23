import React from "react";
import Lottie from "react-lottie";

import * as hdMovie from "../../asserts/lottie_files/hd-movie.json";

import Modal from "../modal/Modal";

import "./MovieCard.css";

const MovieCard = ({
  movie: { id, title, seedrLink, trailer, imgURL, isHd },
}) => {
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
      <div className="movie-card text-center bg-white shadow p-4 mb-3 d-flex flex-row justify-content-center align-items-center">
        <div>
          <img src={imgURL} alt="title" className="movie-image w-100" />
          <h1 className="movie-title m-2">{title}</h1>
          <div className="d-flex flex-row justify-content-center align-items-center mt-3">
            <Modal
              seedrLink={seedrLink}
              title={title}
              trailer={trailer}
              idx={id}
            />

            <div className="ml-3">
              {isHd ? (
                <div className="shadow">
                  <Lottie options={defaultOptions} height={30} width={50} />
                </div>
              ) : (
                <p
                  className="dvdscr bg-warning"
                  onClick={() => console.log(title, "movie")}
                >
                  DVDScr
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
