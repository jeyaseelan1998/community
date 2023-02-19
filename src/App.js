import { useEffect, useState } from "react";
import NavBar from "./components/navbar/NavBar";
import MovieCardList from "./components/movies-card-list/MovieCardList";

import "./App.css";
import { getMovies } from "./api/mockapi";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesList = await getMovies("movies");
      setMovies(moviesList);
    };
    fetchMovies();
    return () => false;
  }, []);

  return (
    <div className="app-container">
      <NavBar />
      {movies && <MovieCardList movies={movies} />}
    </div>
  );
}

export default App;
