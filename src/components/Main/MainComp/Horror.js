import React from "react";
import Data from "../Data";
import classes from "./Series.module.css";
import { Link } from "react-router-dom";

const Horror = () => {
  return (
    <div className={classes.DataList}>
      <h1>Horror Movies</h1>
      <div className={classes.Series}>
        {Data.map((item) => {
          if (item.genre.includes("Horror")) {
            return (
              <Link
                key={item.id}
                to={`/movie/${item.id}`}
                className="SeriesMovies"
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

export default Horror;
