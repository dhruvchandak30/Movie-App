import React from "react";
import Data from "../Data";
import classes from "./Series.module.css";
import { Link } from "react-router-dom";
const Movies = () => {
  return (
    <div className={classes.DataList} id="ShowMovies">
      <h1>Exciting Movies</h1>
      <div className={classes.Series}>
        {Data.map((item) => {
          if (parseInt(item.episodes) === 1) {
            return (
              <Link
                key={item.id}
                className="SeriesMovies"
                to={`/movie/${item.id}`}
              >
                <img src={item.img} alt={item.movie}></img>
              </Link>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
export default Movies;
