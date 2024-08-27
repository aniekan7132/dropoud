import React from "react";
import classes from "./SuccessUploadScreen.module.css";
import succesful from "../assets/sucessful.svg";
import { useNavigate } from "react-router-dom";

const SucessUploadScreen = () => {
  // const progressBar = document.getElementById("progress") as HTMLElement;
  const navigate = useNavigate();

  const handleOverlayClick = () => {
    navigate("/content");
  };

  return (
    <>
      <div
        className={classes["progress__bar-background"]}
        onClick={handleOverlayClick}
      >
        <div className={classes["progress__bar-container"]}>
          {/* IF SUCCESSFUL, SHOW SUCCESFUL ICON  */}
          <div className={classes["progress__bar-successful_div"]}>
            <div className={classes["progress__bar-successful_icon"]}>
              <img src={succesful} alt="Successful--icon" />
            </div>
            <p className={classes["progress__bar-successful_text"]}>
              You have successfully Uploaded your video
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SucessUploadScreen;
