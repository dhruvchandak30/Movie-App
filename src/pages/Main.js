import React from "react";
import MainPage from "../components/Main/MainPage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem("Email");
    console.log(id);
    console.log(typeof id);
    if (id === null) {
      navigate("/");
    }
  }, [navigate]);
  return <MainPage />;
};
export default Main;
