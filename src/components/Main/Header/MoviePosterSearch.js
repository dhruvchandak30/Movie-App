import React, { useState } from 'react';
import './App.css'; // Make sure to import your CSS file

function MoviePosterSearch() {
  const [film, setFilm] = useState('');
  const [poster, setPoster] = useState(null);

  const handleInputChange = (event) => {
    setFilm(event.target.value);
  };

  const searchPoster = () => {
    if (film === '') {
      // Handle empty input
      alert('Please enter a movie title.');
      return;
    }

    // API key and base URL
    const apiKey = '15d2ea6d0dc1d476efbca3eba2b9bbfb';
    const baseUrl = 'https://api.themoviedb.org/3';

    // Perform the movie search
    fetch(`${baseUrl}/search/movie?api_key=${apiKey}&query=${film}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          // Display the movie poster
          const firstResult = data.results[0];
          setPoster(
            <div>
              <p>Your search found: <strong>{firstResult.title}</strong></p>
              <img
                src={`http://image.tmdb.org/t/p/w500/${firstResult.poster_path}`}
                alt={firstResult.title}
                className="img-responsive"
              />
            </div>
          );
        } else {
          // Handle no results
          alert('No results found for your search.');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className="container">
      <div className="search">
        <h1>Movie Poster Search</h1>
        <div id="fetch">
          <input
            type="text"
            placeholder="enter movie title here"
            id="term"
            value={film}
            onChange={handleInputChange}
          />
          <button id="search" onClick={searchPoster}>
            Find
          </button>
        </div>
        <div id="poster">{poster}</div>
      </div>
    </div>
  );
}

export default MoviePosterSearch;
