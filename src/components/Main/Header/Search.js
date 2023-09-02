import React, { useState } from "react";
import Data from "../Data";
import classes from "./Search.module.css";
import { Link } from "react-router-dom";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const InputChangeHandler = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    if (newValue.trim() === "") {
      setSearchResults([]);
    } else {
      const filteredResults = Data.filter((item) => {
        const lowerCasedInput = newValue.toLowerCase();
        const lowerCasedMovie = item.movie.toLowerCase();
        const lowerCasedCast = item.cast.map((c) => c.toLowerCase());
        const lowerCasedGenre = item.genre.map((g) => g.toLowerCase());

        return (
          lowerCasedMovie.startsWith(lowerCasedInput) ||
          lowerCasedCast.some((c) => c.startsWith(lowerCasedInput)) ||
          lowerCasedGenre.some((g) => g.startsWith(lowerCasedInput))
        );
      });

      setSearchResults(filteredResults);
    }
  };

  return (
    <div className={classes.SearchComponent}>
      <div>
        <Link to="/main" className={classes.HomeLink}>
          Go Back
        </Link>
      </div>
      <div>
        <input
          placeholder="Search for Movies, Series, Cast, Genre"
          onChange={InputChangeHandler}
          value={inputValue}
        />
        <ul className={classes.SearchResults}>
          {searchResults.map((item) => (
            <Link
              key={item.id}
              className={classes.SearchResultItem}
              to={`/movie/${item.id}`}
            >
              <img src={item.img} alt={item.movie}></img>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
