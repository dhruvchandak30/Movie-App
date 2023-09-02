import React from "react";
import classes from "./Content.module.css";
import Email from "./Email";
const HomeContent = () => {
  return (
    <div className={classes.Home}>
      <h1>Unlimited Movies,TV shows, and more.</h1>
      <h3>Watch anywhere, Cancel anytime</h3>
      <p>Ready to watch? Enter your Email ID to create your membership.</p>
      <Email />
      <p>Only new members are eligible for this offer.</p>
    </div>
  );
};
export default HomeContent;
