import React from "react";
import ReactDOM from "react-dom";
import classes from "./WithdrawalSuccessful.module.css";
import HeaderThree from "./HeaderThree";
import HeaderFour from "./HeaderFour";
import iconSuccessful from "../assets/icon-successful.svg";
import Button from "./ButtonComponent";

const WithdrawalSuccessful = () => {
  const withdrawalSuccessfulModal = document.getElementById(
    "successful-withdrawal"
  ) as HTMLElement;

  return ReactDOM.createPortal(
    <>
      <div className={classes["modal__background"]}></div>
      <div className={classes["withdrawal__successful-container"]}>
        <div>
          <img
            className={classes["withdrawal__icon"]}
            src={iconSuccessful}
            alt=""
          />
        </div>

        <div className={classes["withdrawal__successful-div"]}>
          <div className={classes["withdrawal__successful-header"]}>
            <HeaderThree text="Withdrawal Successful" />
            <HeaderFour text="A transaction receipt has been sent to your email address" />
          </div>
          <div className={classes["withdrawal__successful-details"]}>
            <div className={classes["confirm__transaction-details"]}>
              <p className={classes["confirm__transaction-to"]}>Amount</p>
              <p className={classes["confirm__transaction-name"]}>₦65,000.85</p>
            </div>
            <div className={classes["confirm__transaction-details"]}>
              <p className={classes["confirm__transaction-to"]}>To</p>
              <p className={classes["confirm__transaction-name"]}>
                Ehrim Emmanuel Otioh
              </p>
            </div>
            <div className={classes["confirm__transaction-details"]}>
              <p className={classes["confirm__transaction-to"]}>Bank</p>
              <p className={classes["confirm__transaction-name"]}>
                Stanbic Bank
              </p>
            </div>
            <div className={classes["confirm__transaction-details"]}>
              <p className={classes["confirm__transaction-to"]}>Status</p>
              <p className={classes["confirm__transaction-name"]}>Successful</p>
            </div>
            <div className={classes["confirm__transaction-details"]}>
              <p className={classes["confirm__transaction-to"]}>
                Estimated Time
              </p>
              <p className={classes["confirm__transaction-name"]}>5 minutes</p>
            </div>
          </div>

          <div>
            <Button
              className={classes["withdrawal__succesful-button"]}
              size="bigsm"
            >
              Back To Home
            </Button>
          </div>
        </div>
      </div>
    </>,
    withdrawalSuccessfulModal
  );
};

export default WithdrawalSuccessful;
