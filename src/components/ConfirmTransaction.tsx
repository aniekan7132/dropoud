import React from "react";
import classes from "./ConfirmTransaction.module.css";
import HeaderTwo from "./HeaderTwo";
import HeaderFour from "./HeaderFour";
import Input from "./Input";
import Button from "./ButtonComponent";
import arrowBack from "../assets/arrow-back.svg";

const ConfirmTransaction = () => {
  return (
    <>
      <div className={classes['confirm__transaction-overall_container']}>
        <div className={classes["withdraw__money"]}>
          <div>
            <img className={classes["arrow__back"]} src={arrowBack} alt="Arrow-back" />
          </div>
          <HeaderTwo text="Withdraw Money" />
        </div>
        <div className={classes["confirm__transaction-div"]}>
          <div className={classes["confirm__transaction-header_container"]}>
            <div className={classes["confirm__transaction-header"]}>
              <HeaderTwo text="Confirm Transaction" />
              <HeaderFour text="Withdrawal Amount" />
            </div>
            <p className={classes["confirm__transaction-highlighted-bal"]}>
              ₦65,000.85
            </p>
          </div>

          <div className={classes["confirm__transaction-details_container"]}>
            <div className={classes["confirm__transaction"]}>
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
                <p className={`${classes["confirm__transaction-name"]} ${classes.pending}`}>Pending</p>
              </div>
            </div>
          </div>

          <div>
            <Input
              placeholder="Enter your password"
              className={classes["confirm__transaction-input"]}
            />
          </div>

          <div>
            <Button
              size="bigsm"
              className={classes["confirm__transaction-button"]}
            >
              Proceed
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmTransaction;
