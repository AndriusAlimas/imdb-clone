import React, { useState, useCallback } from "react";
import { debounce } from "lodash";
import { searchMovies } from "./api";

import Header from "./components/Header/Header";
import SearchResults from "./components/SearchResults/SearchResults";
import MovieList from "./components/MovieList/MovieList";
import HomePage from "./components/pages/HomePage/HomePage";

import AppContainer from "./AppContainer.styles";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const handleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  const handleSearch = useCallback(async (search) => {
    if (search) {
      const results = await searchMovies(search);
      setSearchResults(results);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, []);

  const debouncedSearch = useCallback(
    debounce((searchTerm) => {
      handleSearch(searchTerm);
    }, 500),
    []
  );
  const handleInputChange = (searchTerm) => {
    if (searchTerm === "") {
      setSearchResults([]);
      setShowResults(false);
    } else {
      debouncedSearch(searchTerm);
    }
  };

  return (
    <AppContainer>
      <Header
        isAuthenticated={isAuthenticated}
        handleAuth={handleAuth}
        onSearch={handleInputChange}
      />
      {showResults && searchResults.length > 0 && (
        <SearchResults results={searchResults} isVisible={showResults} />
      )}
      <HomePage />
      <main>
        <MovieList />
      </main>
    </AppContainer>
  );
}

export default App;
