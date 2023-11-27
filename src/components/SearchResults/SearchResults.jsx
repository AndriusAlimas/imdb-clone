import React from "react";
import "./SearchResults.css";
import { SearchResultsContainer } from "./SearchResultsContainer.styles";

const SearchResults = ({ results, isVisible }) => {
  return (
    <SearchResultsContainer isVisible={isVisible}>
      {results.map((movie, index) => (
        <div key={index} className="search-result-item">
          <img src={movie.image} alt={movie.title} className="movie-poster" />
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
          </div>
        </div>
      ))}
    </SearchResultsContainer>
  );
};

export default SearchResults;
