import React from "react";
import Data from "../Data";
import classes from "./Series.module.css";
import { Link } from "react-router-dom";
const Drama = () => {
  return (
    <div className={classes.DataList}>
      <h1>Drama Movies</h1>
      <div className={classes.Series}>
        {Data.map((item) => {
          if (item.genre.includes("Drama")) {
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
export default Drama;
