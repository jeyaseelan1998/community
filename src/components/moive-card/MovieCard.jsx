import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie: { id, title, seedrLink, imgURL } }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="movie-card">
        <img src={imgURL} alt="title" className="movie-image" />
        <h1 className="movie-title">{title}</h1>
        <a href={seedrLink}>
          <button className="btn btn-warning">DOWNLOAD</button>
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
