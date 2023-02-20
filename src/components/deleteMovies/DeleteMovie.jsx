import React, { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import EmptyMsg from "../emptyMsg/EmptyMsg";
import Spinner from "../spinner/Spinner";

import "./DeleteMovies.css";

const DeleteMovie = () => {
  const { movies, isLoading, deletingHandler } = useContext(MoviesContext);

  const remove = (id) => {
    const password = prompt("Enter Confirmation Password");
    if (password === "9698") {
      deletingHandler(id);
    } else {
      alert("You cannot Delete Movies without password");
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (!movies.length) {
    return <EmptyMsg />;
  }

  return (
    <div className="deleteMoviesContainer">
      {movies.map((movie) => {
        return (
          <div
            key={movie.id}
            className="  row d-flex flex-row align-items-center delete-movie-row"
          >
            <div className="col-12 mb-3">
              <h1 className="title">{movie.title}</h1>
            </div>
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <button className="btn btn-info disabled">Update</button>
            </div>
            <div className="col-12 col-md-6">
              <button
                className="btn btn-danger"
                onClick={() => remove(movie.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DeleteMovie;
