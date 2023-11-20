import classes from "./Home.module.css";
import React from "react";
import logo from "../../images/home-page/NetflixLogo.png";
import HomeContent from "./HomeContent";
import SignIn from "./SignIn";
import { useState } from "react";
const Home = () => {
  const [showHome, setShowHome] = useState(true);
  const HomeContentDisplayHandler = () => {
    setShowHome(false);
  };
  const HideHomeContentHandler=()=>{
    setShowHome(true);
  }
  return (
    <div className={classes.Home}>
      <nav>
        <img src={logo} alt="Netflix Logo" className={classes.Loginlogo} />
        {showHome && <HomeContent />}
        <SignIn onShow={HomeContentDisplayHandler} onClose={HideHomeContentHandler} />
      </nav>
    </div>
  );
};
export default Home;
