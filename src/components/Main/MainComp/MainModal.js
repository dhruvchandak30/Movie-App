import React, { useEffect } from "react";
import Data from "../Data";
import classes from "./MainModal.module.css";
import { useNavigate } from "react-router-dom";
import back from "../../../images/Main-Page/BackButton.jpg";

const MainModal = ({ id }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const movie = Data.find((item) => item.id === id);

  if (!movie) {
    return null;
  }

  return (
    <div className={classes.MainModal}>
      <div>
        <button onClick={() => navigate(-1)} className={classes.HomeLink}>
          <img
            src={back}
            alt="BackButton"
            className={classes.BackButtonImage}
          ></img>
        </button>
      </div>
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
