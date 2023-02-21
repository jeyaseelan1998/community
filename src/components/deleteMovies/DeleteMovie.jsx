import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { MoviesContext } from "../../context/MoviesContext";
import EmptyMsg from "../emptyMsg/EmptyMsg";
import Spinner from "../spinner/Spinner";

import "./DeleteMovies.css";

const DeleteMovie = () => {
  const { movies, isLoading, deletingHandler } = useContext(MoviesContext);

  const navigation = useNavigate();

  const remove = (id) => {
    const password = prompt("Confirmation Password is being Required");
    if (password === "9698") {
      deletingHandler(id);
    } else if (password) {
      alert("Your password is Incorrect");
    }
  };

  const modifyHandler = (movie) => {
    navigation("/addmovie", { state: movie });
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (!movies.length) {
    return <EmptyMsg />;
  }

  return (
    <div className="deleteMoviesContainer">
      <h1 className="movie-title text-center mt-3 mb-3">
        Modify / Delete Movies
      </h1>
      {movies.map((movie) => {
        return (
          <div
            key={movie.id}
            className="  row d-flex flex-row align-items-center delete-movie-row"
          >
            <div className="col-12 mb-1">
              <h1 className="title">{movie.title}</h1>
            </div>
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <button
                className="btn btn-info shadow"
                onClick={() => modifyHandler(movie)}
              >
                Modify
              </button>
            </div>
            <div className="col-12 col-md-6">
              <button
                className="btn btn-danger shadow"
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
