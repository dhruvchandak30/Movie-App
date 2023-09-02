import React from "react";
import Data from "../Data";
import classes from "./MainModal.module.css";
import { Link } from "react-router-dom";

const MainModal = ({ id }) => {
  const movie = Data.find((item) => item.id === id);

  if (!movie) {
    return null;
  }

  return (
    <div className={classes.MainModal}>
      <Link to="/main" className={classes.HomeLink}>
        Go Back
      </Link>
      <div className={classes.MainContenttContent}>
        <div className={classes.image}>
          <img src={movie.img} alt={movie.movie} />
        </div>
        <div className={classes.MainContentt}>
          <h1>{movie.movie}</h1>
          <p>No. of Episodes : {movie.episodes}</p>
          <p>Genre : {movie.genre.join(", ")}</p>
          <p>Cast : {movie.cast.join(", ")}</p>
          <p>Description : {movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MainModal;
