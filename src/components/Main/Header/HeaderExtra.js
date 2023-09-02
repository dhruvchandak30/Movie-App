import React, { useState } from "react";
import DownArrow from "../../../images/Main-Page/DownArrow.png";
import AccountImg from "../../../images/Main-Page/AccountImg.png";
import classes from "./HeaderExtra.module.css";
import { useNavigate } from "react-router-dom";

const HeaderExtra = () => {
  const [showModal, setShowModal] = useState(false);

  const handleAccountButtonClick = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  };

  const navigate = useNavigate();

  const SignOutHandler = () => {
    localStorage.removeItem("Email");
    navigate("/");
  };
  const EmailId = localStorage.getItem("Email");

  return (
    <div className={classes.HeaderExtra}>
      <div className={classes.MediaSignOut}>
        <li onClick={SignOutHandler} className={classes.SignOut}>
          Sign Out
        </li>
        <hr></hr>
      </div>
      <div className={classes.Account}>
        <button onClick={handleAccountButtonClick}>
          <div>
            <img
              src={AccountImg}
              alt="AccountImg"
              className={classes.AccountImg}
            />
          </div>
        </button>
        {showModal && (
          <div className={classes.Modal}>
            <li className={classes.AccountInfo}>{EmailId}</li>
            <br></br>
            <li>Manage Profiles</li>
            <li>Tranfer Profile</li>
            <li>Account</li>
            <li>Help Centre</li>
            <hr></hr>
            <li onClick={SignOutHandler} className={classes.SignnOut}>
              Sign Out
            </li>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderExtra;
