import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>{/*{code here}*/}
  <h1>Movies Page</h1>
  {movies.map((movie)=>{
    return (
    <div key={movie.title}>
      {movie.title}
      <br></br>
      {movie.time} minutes
      <ul>
        {movie.genres.map((genre)=>{
          return <li key={genre}>{genre}</li>
        })}
      </ul>
    </div>
    )

  })}
  </div>;
}

export default Movies;
