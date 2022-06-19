import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies page</h1>
      {movies.map((movie) => (
        <div key={movie.title}>
          <h2>{movie.title}</h2>
          <p>Runtime: {movie.time}</p>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Movies;
