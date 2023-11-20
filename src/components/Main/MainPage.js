import React from "react";
import Header from "./Header/Header";
import MainComp from "./MainComp/MainComp";
import Footer from "../Footer/Footer";
import classes from "./MainPage.module.css";
const MainPage = () => {
  return (
    <div className={classes.MainPage}>
      <Header />
      <MainComp />
      <hr></hr>
      <Footer />
    </div>
  );
};
export default MainPage;
