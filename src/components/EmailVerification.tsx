import React, { useRef } from "react";
import Input from "./Input";
import classes from "./EmailVerification.module.css";

const EmailVerification = () => {
  const ref = useRef();

  const handeChange = (e: React.ChangeEvent<HTMLInputElement>) => {}

  return (
    <div className={classes["overall__container"]}>
      <div className={classes["otp__container"]}>
        <h5>Enter the 4 digit code</h5>
        <p className={classes["otp__text-bg"]}>
          We've sent a verification code to Erimemmanuel@gmail.ccom Please check
          your email, including the spam folder
        </p>

        <div className={classes["input__container"]}>
          <form>
            <input type="text" className={classes["otp__input"]} maxLength={1} autoFocus/>
            <input type="text" className={classes["otp__input"]} maxLength={1}/>
            <input type="text" className={classes["otp__input"]} maxLength={1}/>
            <input type="text" className={classes["otp__input"]} maxLength={1}/>
          </form>

          <div className={classes["container__sm-text"]}>
            <p className={classes["otp__text-sm"]}>
              This code will expire in 20 minutes
            </p>
            <p className={classes["otp__text-sm"]}>
              Didnt't recieve a code, <span>send code</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
