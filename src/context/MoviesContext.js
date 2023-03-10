import React, { createContext, useEffect, useState } from "react";
import { READ, DELETE, CREATE, UPDATE } from "../api/mockapi";

export const MoviesContext = createContext();

const ENDPOINT = "movies";

const MoviesContextProvider = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

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
    setIsProcessing(true);
    const addedMovie = await CREATE(ENDPOINT, newMovie);
    setMovies((state) => {
      setIsProcessing(false);
      return [...state, addedMovie];
    });
  };

  const deletingHandler = (id) => {
    setIsProcessing(true);
    DELETE(ENDPOINT, id);
    const filtered = movies.filter((movie) => movie.id !== id);
    setMovies(() => {
      setIsProcessing(false);
      return filtered
    });
  };

  const updateMovieHandler = async (movieObj) => {
    setIsProcessing(true);
    const updatedMovie = await UPDATE(ENDPOINT, movieObj);

    let moviesList = [...movies];
    let idx = moviesList.findIndex((element) => element.id === updatedMovie.id);
    moviesList[idx] = updatedMovie;
    setMovies(() => {
      setIsProcessing(false);
      return moviesList;
    });
  };

  const value = {
    movies,
    isLoading,
    isProcessing,
    deletingHandler,
    addMovieHandler,
    updateMovieHandler,
  };

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
