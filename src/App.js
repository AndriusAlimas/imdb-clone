import "./App.css";
import MovieList from "./components/MovieList/MovieList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>IMDb Clone</h1>
      </header>
      <main>
        <MovieList />
      </main>
    </div>
  );
}

export default App;
