import React from "react";
import { useParams } from "react-router-dom";
import MainModal from "../components/Main/MainComp/MainModal";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Movie = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem("Email");
    console.log(id);
    console.log(typeof id);
    if (id === null) {
      navigate("/");
    }
  }, [navigate]);
  const { id } = useParams();

  return <MainModal id={parseInt(id)} />;
};

export default Movie;
