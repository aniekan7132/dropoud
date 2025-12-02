import React from 'react'
import { Link } from 'react-router-dom';
import failed from "../assets/failed.svg";
import classes from "./SuccessUploadScreen.module.css";

const FailedUploadScreen = () => {
  return (
    <div className={classes["progress__bar-background"]}>
      <div className={classes["progress__bar-container"]}>
        <div className={classes["progress__bar-successful_div"]}>
          <div className={classes["progress__bar-successful_icon"]}>
            <img src={failed} alt="Failed--icon" />
          </div>
          <p className={classes["progress__bar-successful_text"]}>
            An error occurred during the upload of your video
          </p>
          <Link to="/content" className={classes["try__again"]}>Try Again</Link>
        </div>
      </div>
    </div>
  );
}

export default FailedUploadScreen;