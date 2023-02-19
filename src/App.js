import NavBar from "./components/navbar/NavBar";
import MovieCardList from "./components/movies-card-list/MovieCardList";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <MovieCardList />
    </div>
  );
}

export default App;
