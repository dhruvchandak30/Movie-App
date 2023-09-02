import React from "react";
import classes from "./Modal.module.css";
import ModalOverlay from "./ModalOverlay";

const Modal = (props) => {
  return (
    <div className={classes.Modal}>
      <ModalOverlay onClose={props.closeModal} />
    </div>
  );
};

export default Modal;
