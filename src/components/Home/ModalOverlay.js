import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

async function sendEmail(enteredEmail) {
  const response = await fetch(
    "https://netflixemail-ab39c-default-rtdb.firebaseio.com/email.json"
  );
  const data = await response.json();

  if (data) {
    const emailExists = Object.values(data).includes(enteredEmail);
    return emailExists;
  }
  return false;
}

const ModalOverlay = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);
  const [animation, setAnimation] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const navigate = useNavigate();

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    setEnteredEmailIsValid(true);
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    if (enteredEmail.trim() === "" || !enteredEmail.includes("@")) {
      setEnteredEmailIsValid(false);
      return;
    }

    setAnimation(true);
    const emailExists = await sendEmail(enteredEmail);

    if (emailExists) {
      localStorage.setItem("Email", enteredEmail);
      setTimeout(() => {
        navigate("/main");
      }, 1000);
    } else {
      setEmailExists(true);
      setAnimation(false);
    }
  };

  return (
    <Fragment>
      <div className={classes.modal}>
        <form onSubmit={formSubmitHandler} className={classes.form}>
          <h1>Sign In</h1>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            placeholder="Email"
          />
          {emailExists && (
            <p>Email does not exist. Create your Membership first.</p>
          )}

          {animation ? (
            <p>Signing in...</p>
          ) : (
            <button type="submit">Sign In</button>
          )}

          {!enteredEmailIsValid && <p>Please enter a valid email address</p>}
        </form>
        <button onClick={props.onClose}>Close</button>
      </div>
    </Fragment>
  );
};

export default ModalOverlay;
