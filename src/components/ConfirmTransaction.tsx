import React, { useState } from "react";
import classes from "./ConfirmTransaction.module.css";
import HeaderTwo from "./HeaderTwo";
import HeaderFour from "./HeaderFour";
import Input from "./Input";
import Button from "./ButtonComponent";
import Error from "./Error";
import arrowBack from "../assets/arrow-back.svg";

interface Props {
  full_name: string;
  withdrawalInput: number;
  errorMessage: string;
  value: string;
  bank: string;
  errorState: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ConfirmTransaction = ({
  full_name,
  withdrawalInput,
  value,
  bank,
  errorMessage,
  errorState,
  onClick,
  onChange,
}: Props) => {

  return (
    <>
      <div className={classes["confirm__transaction-overall_container"]}>
        {/* <div className={classes["withdraw__money"]}>
          <div>
            <img
              className={classes["arrow__back"]}
              src={arrowBack}
              alt="Arrow-back"
            />
          </div>
          <HeaderTwo text="Withdraw Money" />
        </div> */}
        <div className={classes["confirm__transaction-div"]}>
          <div className={classes["confirm__transaction-header_container"]}>
            <div className={classes["confirm__transaction-header"]}>
              <HeaderTwo text="Confirm Transaction" />
              <HeaderFour text="Withdrawal Amount" />
            </div>
            <p className={classes["confirm__transaction-highlighted-bal"]}>
              {withdrawalInput}
            </p>
          </div>

          <div className={classes["confirm__transaction-details_container"]}>
            <div className={classes["confirm__transaction"]}>
              <div className={classes["confirm__transaction-details"]}>
                <p className={classes["confirm__transaction-to"]}>To</p>
                <p className={classes["confirm__transaction-name"]}>
                  {full_name}
                </p>
              </div>
              <div className={classes["confirm__transaction-details"]}>
                <p className={classes["confirm__transaction-to"]}>Bank</p>
                <p className={classes["confirm__transaction-name"]}>
                  {bank}
                </p>
              </div>
              <div className={classes["confirm__transaction-details"]}>
                <p className={classes["confirm__transaction-to"]}>Status</p>
                <p
                  className={`${classes["confirm__transaction-name"]} ${classes.pending}`}
                >
                  Pending
                </p>
              </div>
            </div>
          </div>

          <div>
            <Input
              placeholder="Enter your password"
              // className={classes["confirm__transaction-input"]}
              style={{ width: "445px" }}
              value={value}
              onChange={onChange}
              type="password"
            />
          </div>

          <div>
            <Button
              size="bigsm"
              className={classes["confirm__transaction-button"]}
              onClick={onClick}
            >
              Proceed
            </Button>
          </div>
        </div>
      </div>
      {errorState && <div className={classes["error__div"]}>
        <Error errorMsg={errorMessage} />
      </div>}
    </>
  );
};

export default ConfirmTransaction;
