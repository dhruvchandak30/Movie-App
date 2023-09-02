import React, { useState } from "react";
import classes from "./SignIn.module.css";
import Modal from "./Modal";

const SignIn = (props) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const signInHandler = () => {
    setModalIsVisible(true);
    props.onShow();
  };

  const closeModal = () => {
    setModalIsVisible(false);
    props.onClose();
  };

  return (
    <div className={classes.SignInButton}>
      <h2 onClick={signInHandler} className={classes.SignInContent}>SignIn</h2>
      {modalIsVisible && <Modal closeModal={closeModal} />}
    </div>
    
  );
};

export default SignIn;
