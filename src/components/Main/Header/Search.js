import React, { useState } from "react";
import classes from "./Search.module.css";
import { Link } from "react-router-dom";
function MoviePosterSearch() {
  const [film, setFilm] = useState("");
  const [movieDetails, setMovieDetails] = useState(null);
  const handleInputChange = (event) => {
    setFilm(event.target.value);
  };

  const searchPoster = () => {
    if (film === "") {
      alert("Please enter a movie title.");
      return;
    }

    const apiKey = "665b1fb7c3697a49e8d4ed8c838c009d";
    const baseUrl = "https://api.themoviedb.org/3";

    fetch(`${baseUrl}/search/movie?api_key=${apiKey}&query=${film}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          const firstResult = data.results[0];

          const movieId = firstResult.id;
          fetch(`${baseUrl}/movie/${movieId}?api_key=${apiKey}`)
            .then((response) => response.json())
            .then((details) => {
              setMovieDetails(details);
            })
            .catch((error) => {
              console.error("Error fetching movie details:", error);
            });
        } else {
          alert("No results found for your search.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <div className={classes.SearchComponent}>
      <div>
        <Link to="/main" className={classes.HomeLink}>
          Go Back
        </Link>
      </div>
      <div className={classes.SearchComponent}>
        <div id="fetch" className={classes.SearchComponent}>
          <input
            type="text"
            placeholder="Enter movie title here"
            id="term"
            value={film}
            onChange={handleInputChange}
          />
          <button id="search" onClick={searchPoster}>
            Search
          </button>
        </div>
        <div id="poster">
          {movieDetails && (
            <div className={classes.MovieResults}>
              <p>
                Your search found: <strong>{film}</strong>
              </p>
              <img
                src={`http://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                alt={film}
                className={classes.ResultMovieImage}
              />
              <p>Overview: {movieDetails.overview}</p>
              <p>Release Date: {movieDetails.release_date}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MoviePosterSearch;
