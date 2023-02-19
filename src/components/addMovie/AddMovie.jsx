import React, { useContext, useRef } from "react";

import { MoviesContext } from "../../context/MoviesContext";

import "./AddMovie.css";

const AddMovie = () => {
  const { addMovieHandler } = useContext(MoviesContext);

  const titleRef = useRef();
  const imgURLRef = useRef();
  const seedrLinkRef = useRef();

  const submitMovie = (e) => {
    e.preventDefault();
    const newMovie = {
      title: titleRef.current.value,
      imgURL: imgURLRef.current.value,
      seedrLink: seedrLinkRef.current.value,
    };

    //Password validation
    const password = prompt();
    if (password === "9698") {
      addMovieHandler(newMovie);
      titleRef.current.value = "";
      imgURLRef.current.value = "";
      seedrLinkRef.current.value = "";
    } else {
      alert("You cannot Add Movies without password");
    }
  };

  return (
    <form className="movie-form " onSubmit={submitMovie}>
      <h1 className="mb-3 text-center">Add Movie</h1>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Movie Name
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Avatar 2"
          ref={titleRef}
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
          ref={imgURLRef}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Seedr Url
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Seedr Link"
          ref={seedrLinkRef}
        />
      </div>
      <div className="text-center">
        <button className="btn btn-primary" type="submit">
          Add Movie
        </button>
      </div>
    </form>
  );
};

export default AddMovie;
