import { Route, Routes } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import MovieCardList from "./components/movies-card-list/MovieCardList";
import AddMovie from "./components/addMovie/AddMovie";
import DeleteMovie from "./components/deleteMovies/DeleteMovie";
import ChatRoom from "./components/chatroom/ChatRoom";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<MovieCardList />} />
          <Route path="addmovie" element={<AddMovie />} />
          <Route path="deletemovie" element={<DeleteMovie />} />
          <Route path="chat" element={<ChatRoom />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
