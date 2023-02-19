import { useContext, useEffect, useState } from "react";
import NavBar from "./components/navbar/NavBar";
import MovieCardList from "./components/movies-card-list/MovieCardList";

import "./App.css";
import { getMovies } from "./api/mockapi";
import AddMovie from "./components/addMovie/AddMovie";
import { Route, Routes } from "react-router-dom";
import DeleteMovie from "./components/deleteMovies/DeleteMovie";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<MovieCardList />} />
          <Route path="addmovie" element={<AddMovie />} />
          <Route path="deletemovie" element={<DeleteMovie />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
