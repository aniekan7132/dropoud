import React from "react";
import ReactDOM from "react-dom";
import classes from "./ProgressBar.module.css" 
import succesful from "../assets/sucessful.svg";
import failed from "../assets/failed.svg";

const ProgressBar = () => {
  const progressBar = document.getElementById("progress") as HTMLElement;

  return (
    <>
      <div className={classes["progress__bar-background"]}>
        <div className={classes["progress__bar-container"]}>
          {/* <div className={classes["progress__bar-div"]}>
            <p>Uploading.......</p>
            <div className={classes["progress__bar-uploading"]}>
             <div className={classes["progress__bar-moving"]}></div>
            </div>
            <p>20/100%</p>
          </div> */}

          {/* IF SUCCESSFUL, SHOW SUCCESFUL ICON  */}
          {/* <div className={classes["progress__bar-successful_div"]}>
            <div className={classes["progress__bar-successful_icon"]}>
              <img src={succesful} alt="Successful--icon" />
            </div>
            <p className={classes["progress__bar-successful_text"]}>
              You have successfully Uploaded your video
            </p>
          </div> */}

          {/* IF NOT SUCESSFUL, SHOW FAILED ICON */}
          <div className={classes["progress__bar-successful_div"]}>
            <div className={classes["progress__bar-successful_icon"]}>
              <img src={failed} alt="Failed--icon" />
            </div>
            <p className={classes["progress__bar-successful_text"]}>
              An error occurred during the upload of your video
            </p>
            <p className={classes["try__again"]}>Try Again</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
