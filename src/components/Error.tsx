import React from 'react'
import errorIcon from "../assets/errorIcon.svg";
import classes from "./Error.module.css";

type ErrorMsgProp = {
  errorMsg?: null | string;
};

const Error = ({ errorMsg }: ErrorMsgProp) => {
  return (
    <div className={classes["error__container"]}>
      <div>
        <img src={errorIcon} alt="Error-icon" />
        <p className={classes["error__text"]}>
          {errorMsg}
        </p>
      </div>
    </div>
  );
};

export default Error;