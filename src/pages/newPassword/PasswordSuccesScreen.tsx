import React from "react";
import classes from "./Newpassword.module.css";
import { Link } from "react-router-dom";

const PasswordSuccessScreen = () => {
  return (
    <div className={classes["new__password-notication_cont"]}>
      <div>
        <h3 className={classes["new__password-text"]}>
          You have successfully changed your password
        </h3>
        <Link to="/dashboard" className={classes["new__password-link"]}>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PasswordSuccessScreen;
