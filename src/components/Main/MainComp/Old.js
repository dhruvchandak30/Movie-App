import React from "react";
import Data from "../Data";
import classes from "./Series.module.css";
import { Link } from "react-router-dom";
const Old = () => {
  return (
    <div className={classes.DataList}>
      <h1>Old is Gold</h1>
      <div className={classes.Series}>
        {Data.map((item) => {
          if (item.year<2000) {
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
export default Old;
