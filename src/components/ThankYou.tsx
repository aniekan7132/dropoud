import React from "react";
import Button from "./ButtonComponent";
import classes from "./ThankYou.module.css";

const ThankYou = () => {
  return (
    <div className={classes["main__container"]}>
      <div className={classes["sub__container"]}>
        <h5>Thanks for verifying your email address</h5>
        <p>
          Your email address Erimemmanuel@gmail.com has been verified. in the
          future , you need to use this email address when logging in to Dropoud
        </p>
        <Button size="md" type="button">Continue</Button>
      </div>
    </div>
  );
};

export default ThankYou;
