import React, { useContext } from "react";

import MovieCard from "../moive-card/MovieCard";
import Spinner from "../spinner/Spinner";
import EmptyMsg from "../emptyMsg/EmptyMsg";
import { MoviesContext } from "../../context/MoviesContext";

import "./MovieCardList.css";

const MovieCardList = () => {
  const { movies, isLoading } = useContext(MoviesContext);

  if (isLoading) {
    return <Spinner />;
  }

  if (!movies.length) {
    return <EmptyMsg />;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieCardList;
