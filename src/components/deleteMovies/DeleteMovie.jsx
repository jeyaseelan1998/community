import React, { useContext } from "react";

import { MoviesContext } from "../../context/MoviesContext";
import EmptyMsg from "../emptyMsg/EmptyMsg";
import Spinner from "../spinner/Spinner";
import BootstrapTable from "../table/BootstrapTable";

import "./DeleteMovies.css";

const DeleteMovie = () => {
  const { movies, isLoading } = useContext(MoviesContext);

  if (isLoading) {
    return <Spinner />;
  }

  if (!movies.length) {
    return <EmptyMsg />;
  }

  return (
    <div className="deleteMoviesContainer">
      <BootstrapTable />
    </div>
  );
};

export default DeleteMovie;
