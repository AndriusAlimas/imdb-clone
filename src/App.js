import { useState } from "react";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";

import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <div className="App">
      <Header isAuthenticated={isAuthenticated} handleAuth={handleAuth} />
      <main>
        <MovieList />
      </main>
    </div>
  );
}

export default App;
