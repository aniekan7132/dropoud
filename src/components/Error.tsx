import React from 'react'
import errorIcon from "../assets/errorIcon.svg";
import classes from "./Error.module.css";

const Error = () => {
  return (
    <div className={classes["error__container"]}>
      <div>
        <img src={errorIcon} alt="Error-icon" />
        <p className={classes["error__text"]}>
          This code does not match. Please check your code and try again
        </p>
      </div>
    </div>
  );
}

export default Error;