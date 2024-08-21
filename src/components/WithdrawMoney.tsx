import React from "react";
import HeaderTwo from "./HeaderTwo";
import HeaderThree from "./HeaderThree";
import Input from "./Input";
import Button from "./ButtonComponent";
import arrowBack from "../assets/arrow-back.svg";
import classes from "./WithdrawMoney.module.css";

const WithdrawMoney = () => {
  return (
    <>
      <div className={classes["withdraw__money-overall_container"]}>
        <div className={classes["withdraw__money"]}>
          <div>
            <img className={classes["arrow__back"]} src={arrowBack} alt="" />
          </div>
          <HeaderTwo text="Withdraw Money" />
        </div>

        <div className={classes["withdraw__money_input-container"]}>
          <div>
            <label
              htmlFor=""
              className={classes["withdraw__money-input_label"]}
            >
              Enter amount to withdraw
            </label>
          </div>
          <form action="">
            <Input className={classes["withdraw__money-input"]} />

            <div className={classes["withdraw__money-balance"]}>
              <p>Amount balance: ₦65,000.85</p>
            </div>

            <Button size="bigsm" className={classes["withdraw__money-button"]}>
              Proceed
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default WithdrawMoney;
