import React from "react";
import errorIcon from "../assets/errorIcon.svg";
import classes from "./Error.module.css";

interface Props {
  errorMsg?: string | null;
};

const Error = ({ errorMsg }: Props) => {
  return (
    <div className={classes["error__container"]}>
      <div className={classes["error__container-sub"]}>
        <img src={errorIcon} alt="Error-icon" />
        <p className={classes["error__text"]}>{errorMsg}</p>
      </div>
    </div>
  );
};

export default Error;
