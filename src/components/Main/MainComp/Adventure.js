import React from "react";
import Data from "../Data";
import classes from "./Series.module.css";
import { Link } from "react-router-dom";
const Adventure = () => {
  return (
    <div className={classes.DataList}>
      <h1>Adventure Movies</h1>
      <div className={classes.Series}>
        {Data.map((item) => {
          if (item.genre.includes("Adventure")) {
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
export default Adventure;
