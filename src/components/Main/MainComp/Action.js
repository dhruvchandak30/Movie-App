import React from "react";
import Data from "../Data";
import classes from "./Series.module.css";
import { Link } from "react-router-dom";
const Action = () => {
  return (
    <div className={classes.DataList}>
      <h1>Action & Crime</h1>
      <div className={classes.Series}>
        {Data.map((item) => {
          if (item.genre.includes("Action") || item.genre.includes("Crime")) {
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
export default Action;
