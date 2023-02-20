import React, { createContext, useEffect, useState } from "react";
import { getMovies, deleteMovie, addMovie } from "../api/mockapi";

export const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetchMovies = async () => {
      const moviesList = await getMovies("movies");
      setMovies(moviesList);
      setIsLoading(false);
    };
    fetchMovies();
    return () => false;
  }, []);

  const addMovieHandler = async (newMovie) => {
    const addedMovie = await addMovie("movies", newMovie);
    setMovies((state) => [...state, addedMovie]);
  };

  const deletingHandler = (id) => {
    deleteMovie("movies", id);
    const filtered = movies.filter((movie) => movie.id !== id);
    setMovies(filtered);
  };

  const value = {
    movies,
    deletingHandler,
    addMovieHandler,
    isLoading,
  };

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
