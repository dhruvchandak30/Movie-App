import React, { useEffect } from "react";
import Search from "../components/Main/Header/Search";
import classes from "../components/Main/Header/Search.module.css";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem("Email");
    console.log(id);
    console.log(typeof id);
    if (id === null) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className={classes.SearchPage}>
      <Search />
    </div>
  );
};

export default SearchPage;
