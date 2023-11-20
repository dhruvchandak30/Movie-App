import React from "react";
import Series from "./Series";
import Movies from "./Movies";
import classes from "./Series.module.css";
import AwardWinning from "./AwardWinning";
import Comedy from "./Comedy";
import Horror from "./Horror";
import Action from "./Action";
import Romance from "./Romance";
import Old from "./Old";
import Adventure from "./Adventure";
import BioGraphy from "./BioGraphy";
import Drama from "./Drama";

const Carousel = () => {
  return (
    <div className={classes.Carousel}>
      <Series />
      <Movies />
      <AwardWinning />
      <Comedy />
      <Horror />
      <Action />
      <Romance />
      <Old />
      <Drama />
      <Adventure />
      <BioGraphy />
    </div>
  );
};
export default Carousel;
