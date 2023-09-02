import React, { useState } from "react";
import classes from "./Email.module.css";
import { useNavigate } from "react-router-dom";

async function sendEmail(enteredEmail) {
  const response = await fetch(
    "https://netflixemail-ab39c-default-rtdb.firebaseio.com/email.json"
  );
  const data = await response.json();

  if (response.ok) {
    const emailExists = Object.values(data).includes(enteredEmail);
    if (emailExists) {
      return true;
    } else {
      // eslint-disable-next-line
      const response = await fetch(
        "https://netflixemail-ab39c-default-rtdb.firebaseio.com/email.json",
        {
          method: "POST",
          body: JSON.stringify(enteredEmail),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return false;
    }
  }
  return false;
}

const Email = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);
  const [animation, setAnimation] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const navigate = useNavigate();

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    if (enteredEmail.trim() === "" || !enteredEmail.includes("@")) {
      setEnteredEmailIsValid(false);
      return;
    }

    setAnimation(true);
    const EmailExists = await sendEmail(enteredEmail);

    if (EmailExists) {
      setEmailExists(true);
      setAnimation(false);
    } else {
      localStorage.setItem("Email", enteredEmail);
      setTimeout(() => {
        navigate("/main");
      }, 1000);
    }
  };

  return (
    <>
      <form onSubmit={formSubmitHandler} className={classes.form}>
        <input
          type="email"
          id="email"
          placeholder="Email"
          onChange={emailChangeHandler}
        ></input>
        {emailExists ? (
          <p>Email ID Already Exists, Sign In Instead</p>
        ) : (
          <>{animation && <p>Signing in...</p>}</>
        )}
        <label htmlFor="submit" onClick={formSubmitHandler}>
          TRY 30 DAYS FREE
        </label>

        {!enteredEmailIsValid && <p>Please Enter a Valid Email Address</p>}
      </form>
    </>
  );
};

export default Email;
