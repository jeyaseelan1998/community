import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { MoviesContext } from "../../context/MoviesContext";

import "./AddMovie.css";

const defaultMovieDetails = {
  title: "",
  imgURL: "",
  seedrLink: "",
  isHd: false,
};

const AddMovie = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const title = !state ? "Add Movie" : "Modify Movie";

  const [movie, setMovie] = useState(defaultMovieDetails);
  const { addMovieHandler, updateMovieHandler } = useContext(MoviesContext);

  useEffect(() => {
    setMovie(state || defaultMovieDetails);
  }, [state]);

  const onChangeHandler = (event) => {
    let { name, value } = event.target;

    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setMovie((oldState) => ({ ...oldState, [name]: value }));
  };

  const submitMovie = (e) => {
    e.preventDefault();

    //Password validation
    const password = prompt("Confirmation Password is being Required");
    if (password === "9698") {
      if (state) {
        updateMovieHandler(movie);
      } else {
        addMovieHandler(movie);
      }
      setMovie(defaultMovieDetails);
      setTimeout(() => navigate("/"), 1500);
    } else if (password) {
      alert("Your Password is Incorrect");
    }
  };

  const resetHandler = () => {
    setMovie((oldMovie) => ({ ...oldMovie, ...defaultMovieDetails }));
  };

  return (
    <form className="movie-form" onSubmit={submitMovie}>
      <h1 className="mb-3 text-center add-movie-heading">{title}</h1>
      <hr />
      <div className="mb-3 mt-4">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Movie Name
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Avatar 2"
          onChange={onChangeHandler}
          name="title"
          value={movie.title}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Movie Poster
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Movie poster url"
          onChange={onChangeHandler}
          name="imgURL"
          value={movie.imgURL}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Seedr Link
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Seedr Link"
          onChange={onChangeHandler}
          name="seedrLink"
          value={movie.seedrLink}
          required
        />
      </div>

      <div className="mb-4 d-flex">
        <label htmlFor="flexSwitchCheckChecked" className="form-label m-auto">
          Is it HD Movie?
        </label>

        <div className="form-check form-switch mr-auto">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            onChange={onChangeHandler}
            name="isHd"
            checked={movie.isHd}
          />
        </div>
      </div>

      <div className="text-center">
        <button className="btn btn-primary shadow" type="submit">
          {title}
        </button>
        <button
          type="button"
          className="btn btn-light ml-5 shadow"
          onClick={resetHandler}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default AddMovie;
