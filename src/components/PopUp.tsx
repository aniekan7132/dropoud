import React from "react";
import classes from "./PopUp.module.css";
import editIcon from "../assets/edit-outline.svg";
import shareIcon from "../assets/share.svg";
import deleteIcon from "../assets/delete.svg";

const PopUp = () => {
  return (
    <div className={classes["popup__background"]}>
      <div className={classes["popup__title-icon_div"]}>
        <img src={editIcon} alt="Edit-icon" />
        <p>Edit title and description</p>
      </div>
      <div className={classes["popup__title-icon_div"]}>
        <img src={shareIcon} alt="Share-icon" />
        <p>Get shareable link</p>
      </div>
      <div className={classes["popup__title-icon_div"]}>
        <img src={deleteIcon} alt="Delete-icon" />
        <p>Delete forever</p>
      </div>
    </div>
  );
};

export default PopUp;
