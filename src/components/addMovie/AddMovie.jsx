import React, { useContext, useRef, useState } from "react";

import { MoviesContext } from "../../context/MoviesContext";

import "./AddMovie.css";

const AddMovie = () => {
  const { addMovieHandler } = useContext(MoviesContext);

  const [isHd, setIsHd] = useState(false);

  const titleRef = useRef();
  const imgURLRef = useRef();
  const seedrLinkRef = useRef();

  const submitMovie = (e) => {
    e.preventDefault();
    const newMovie = {
      title: titleRef.current.value,
      imgURL: imgURLRef.current.value,
      seedrLink: seedrLinkRef.current.value,
      isHd,
    };

    //Password validation
    const password = prompt("Enter Confirmation Password");
    if (password === "9698") {
      addMovieHandler(newMovie);
      titleRef.current.value = "";
      imgURLRef.current.value = "";
      seedrLinkRef.current.value = "";
      if (isHd) setIsHd(false);
    } else {
      alert("You cannot Add Movies without password");
    }
  };

  return (
    <form className="movie-form" onSubmit={submitMovie}>
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
          ref={imgURLRef}
          // id="validationCustom05"
          required
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
          required
        />
      </div>

      <div className="mb-4 d-flex">
        <label htmlFor="flexSwitchCheckChecked" className="form-label m-auto">
          HD Movie
        </label>

        <div className="form-check form-switch mr-auto">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            checked={isHd}
            onChange={(e) => setIsHd(e.target.checked)}
          />
        </div>
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
