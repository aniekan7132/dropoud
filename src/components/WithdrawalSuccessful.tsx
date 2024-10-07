import React from "react";
// import ReactDOM from "react-dom";
import classes from "./WithdrawalSuccessful.module.css";
import HeaderThree from "./HeaderThree";
import HeaderFour from "./HeaderFour";
import iconSuccessful from "../assets/icon-successful.svg";
import Button from "./ButtonComponent";
import { useNavigate } from "react-router-dom";

interface sessionStorageValues {
  amount: number;
  account_name: string;
  account_number: number;
  bank: string;
  response: string;
}

const withdrawalValue = sessionStorage.getItem("withdrawal-data");
const jsonValue = JSON.parse(withdrawalValue!) as sessionStorageValues;

const WithdrawalSuccessful = () => {
  const navigate = useNavigate();

  const handleNavigation = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
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
            <HeaderFour text={jsonValue?.response} />
          </div>
          <div className={classes["withdrawal__successful-details"]}>
            <div className={classes["confirm__transaction-details"]}>
              <p className={classes["confirm__transaction-to"]}>Amount</p>
              <p className={classes["confirm__transaction-name"]}>
                ₦{jsonValue?.amount}
              </p>
            </div>
            <div className={classes["confirm__transaction-details"]}>
              <p className={classes["confirm__transaction-to"]}>To</p>
              <p className={classes["confirm__transaction-name"]}>
                {jsonValue?.account_name}
              </p>
            </div>
            <div className={classes["confirm__transaction-details"]}>
              <p className={classes["confirm__transaction-to"]}>Bank</p>
              <p className={classes["confirm__transaction-name"]}>
                {jsonValue?.bank}
              </p>
            </div>
            <div className={classes["confirm__transaction-details"]}>
              <p className={classes["confirm__transaction-to"]}>Status</p>
              <p
                className={`${classes["confirm__transaction-name"]} 
                ${classes["transaction__successful"]}`}
              >
                Successful
              </p>
            </div>
            <div className={classes["confirm__transaction-details"]}>
              <p className={classes["confirm__transaction-to"]}>
                Estimated Time
              </p>
              <p className={classes["confirm__transaction-name"]}>30 seconds</p>
            </div>
          </div>

          <div>
            <Button
              className={classes["withdrawal__succesful-button"]}
              size="bigsm"
              onClick={handleNavigation}
            >
              Back To Home
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithdrawalSuccessful;
