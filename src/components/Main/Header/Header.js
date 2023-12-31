import HeaderExtra from "./HeaderExtra";
import classes from "./Header.module.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../images/home-page/NetflixLogo.png";
const Header = () => {
  const [showHeader, setShowHeader] = useState(true);

  const navigate = useNavigate();

  const SearchHandler = () => {
    console.log("Clicked Search");
    navigate("/search");
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const showShowsHandler = () => {
    const ShowsSection = document.getElementById("ShowSeries");
    if (ShowsSection) {
      const offset = 250;
      const topPosition =
        ShowsSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: topPosition + offset,
        behavior: "smooth",
      });
    }
  };

  const showMoviesHandler = () => {
    const MoviesSection = document.getElementById("ShowMovies");
    if (MoviesSection) {
      const offset = -250;
      const topPosition =
        MoviesSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: topPosition + offset,
        behavior: "smooth",
      });
    }
  };
  const showSeriesHandler = () => {
    const seriesSection = document.getElementById("ShowSeries");
    if (seriesSection) {
      const offset = -250;
      const topPosition =
        seriesSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: topPosition + offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`${classes.Header} ${
        showHeader ? "" : `${classes.BlackBackground} ${classes.Separation}`
      }`}
    >
      <div>
      </div>
      <div>
        <ul>
        <img src={logo} alt="Netflix Logo" className={classes.Headerlogo} />
          <li onClick={scrollTop}>Home</li>
          <li onClick={showShowsHandler}>TV Shows</li>
          <li onClick={showMoviesHandler}>Movies</li>
          <li onClick={showSeriesHandler}>Series</li>
          <li onClick={SearchHandler}>Search</li>
        </ul>
        <hr className="Separation"></hr>
      </div>
    </nav>
  );
};

export default Header;
