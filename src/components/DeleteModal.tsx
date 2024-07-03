import React from "react";
import ReactDOM from "react-dom";
import HeaderSeven from "./HeaderSeven";
import Input from "./Input";
import classes from "./DeleteModal.module.css";

const DeleteModal = () => {
  const deleteModal = document.getElementById("delete") as HTMLElement;

  return ReactDOM.createPortal(
    <div className={classes["delete__modal-background"]}>
      <div className={classes["delete__modal-container"]}>
        <div>
          <HeaderSeven text="Permanently delete this video?" />
        </div>

        <div className={classes["delete__modal-text"]}>
         <Input type="radio" className={classes["delete__modal-radio_input"]} />
          <HeaderSeven text="I understand that deleting is permanent and can't be undone" />
        </div>

        <div className={classes["button__div"]}>
          <button className={classes["button__cancel"]}>Cancel</button>
          <button
            className={`${classes["button__cancel"]} ${classes["button__save"]}`}
          >
            Delete
          </button>
        </div>
      </div>
    </div>,
    deleteModal
  );
};

export default DeleteModal;
