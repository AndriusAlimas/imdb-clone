import React, { useState, useCallback } from "react";
import Header from "./components/Header/Header";
import SearchResults from "./components/SearchResults/SearchResults";
import MovieList from "./components/MovieList/MovieList";
import HomePage from "./components/pages/HomePage/HomePage";
import { searchMovies } from "./api";
import { debounce } from "lodash";

import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  const handleSearch = useCallback(async (search) => {
    if (!search) {
      setSearchResults([]);
      return;
    }
    const results = await searchMovies(search);
    setSearchResults(results);
  }, []);

  const debouncedSearch = useCallback(
    debounce((searchTerm) => {
      handleSearch(searchTerm);
    }, 500),
    []
  );

  return (
    <div className="App">
      <Header
        isAuthenticated={isAuthenticated}
        handleAuth={handleAuth}
        onSearch={debouncedSearch}
      />
      {searchResults.length > 0 && <SearchResults results={searchResults} />}
      <HomePage />
      <main>
        <MovieList />
      </main>
    </div>
  );
}

export default App;
