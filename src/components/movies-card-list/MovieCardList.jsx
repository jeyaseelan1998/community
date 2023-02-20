import React, { useContext } from "react";

import MovieCard from "../moive-card/MovieCard";
import Spinner from "../spinner/Spinner";
import { MoviesContext } from "../../context/MoviesContext";

import "./MovieCardList.css";

const MovieCardList = () => {
  const { movies } = useContext(MoviesContext);

  if (!movies.length) {
    return <Spinner />;
  }

  return (
    <div className="movies-card-list-container">
      <div className="row">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieCardList;
