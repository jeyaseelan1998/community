import React from "react";
import MovieCard from "../moive-card/MovieCard";

// import { movies } from "../../data/mock_data";
import "./MovieCardList.css";

const MovieCardList = ({ movies }) => {
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
