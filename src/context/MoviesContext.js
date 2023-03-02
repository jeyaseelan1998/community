import React, { createContext, useEffect, useState } from "react";
import { READ, DELETE, CREATE, UPDATE } from "../api/mockapi";

export const MoviesContext = createContext();

const ENDPOINT = "movies";

const MoviesContextProvider = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetchMovies = async () => {
      const moviesList = await READ(ENDPOINT);
      setMovies(moviesList);
      setIsLoading(false);
    };
    fetchMovies();
    return () => false;
  }, []);

  const addMovieHandler = async (newMovie) => {
    const addedMovie = await CREATE(ENDPOINT, newMovie);
    setMovies((state) => [...state, addedMovie]);
  };

  const deletingHandler = (id) => {
    DELETE(ENDPOINT, id);
    const filtered = movies.filter((movie) => movie.id !== id);
    setMovies(filtered);
  };

  const updateMovieHandler = (movie) => {
    UPDATE(ENDPOINT, movie);

    let moviesList = [...movies];
    let idx = moviesList.findIndex((element) => element.id === movie.id);
    moviesList[idx] = movie;
    setMovies(moviesList);
  };

  const value = {
    movies,
    deletingHandler,
    addMovieHandler,
    isLoading,
    updateMovieHandler,
  };

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
