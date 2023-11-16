import React from "react";

import "./MovieList.css";

import { movies } from "../../DummyData/moviesDummyData";
const MovieList = () => {
  return (
    <div>
      <h2>Movie List</h2>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
