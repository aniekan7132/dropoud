import React from "react";
import { Link } from "react-router-dom";
import failed from "../assets/failed.svg";
import classes from "./SuccessUploadScreen.module.css";

const BankFailedScreen = () => {
  return (
    <div className={classes["progress__bar-background"]}>
      <div className={classes["progress__bar-container"]}>
        <div className={classes["progress__bar-successful_div"]}>
          <div className={classes["progress__bar-successful_icon"]}>
            <img src={failed} alt="Failed--icon" />
          </div>
          <p className={classes["progress__bar-successful_text"]}>
            An error occurred while adding your bank
          </p>
          <Link to="/settings" className={classes["try__again"]}>
            Try Again
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BankFailedScreen;
