import React from "react";
import Series from "./Series";
import Movies from "./Movies";
import classes from "./Series.module.css";
import AwardWinning from "./AwardWinning";
import Comedy from "./Comedy";
import Horror from "./Horror";
import Action from "./Action";

const Carousel = () => {
  return (
    <div className={classes.Carousel}>
      <Series />
      <Movies />
      <AwardWinning />
      <Comedy />
      <Horror />
      <Action />
    </div>
  );
};
export default Carousel;
