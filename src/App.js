import { useState } from "react";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";

import "./App.css";
import HomePage from "./components/pages/HomePage/HomePage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <div className="App">
      <Header isAuthenticated={isAuthenticated} handleAuth={handleAuth} />
      <HomePage />
      <main>
        <MovieList />
      </main>
    </div>
  );
}

export default App;
