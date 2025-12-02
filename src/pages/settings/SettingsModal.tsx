import React from "react";
import Button from "../../components/ButtonComponent";
import bankLogo from "../../assets/bank-logo.svg";
import classes from "./SettingsModal.module.css";
import SettingsButton from "../../components/SettingsButton";

interface SettingsModalProps {
  modalHeader?: string;
  onClick: () => void;
  displayEl: boolean;
  cancel?: () => void;
  loading: boolean;
}

const SettingsModal = ({
  modalHeader,
  displayEl,
  cancel,
  loading,
  onClick,
}: SettingsModalProps) => {
  return (
      <div className={classes["delete__account-div"]}>
        <p>{modalHeader}</p>
        <div
          className={
            displayEl
              ? `${classes["dont__display"]}`
              : `${classes["delete__account-details"]}`
          }
        >
          <img src={bankLogo} alt="Bank-icon" />
          <div className={classes["delete__account-text_div"]}>
            <div className={classes["delete__account-texts"]}>
              <p>Account Number</p>
              <p>0048379221</p>
            </div>
            <div className={classes["delete__account-texts"]}>
              <p>Account Name</p>
              <p>Ehrim Emmanuel Otioh</p>
            </div>
          </div>
        </div>
        <div
          className={
            !displayEl
              ? `${classes["dont__display"]}`
              : `${classes["delete__account-paragraph"]}`
          }
        >
          <p>
            Are you sure you want to delete your account, understand that this
            will not be reversed after it has been deleted
          </p>
        </div>
        <div
          className={
            !displayEl
              ? `${classes["dont__display"]}`
              : `${classes["confirm__delet-buttons"]}`
          }
        >
          {/* <SettingsButton buttonText="Delete" /> */}
          <button className={classes["confirm__btn"]} onClick={cancel}>
            Delete
          </button>
          <SettingsButton buttonText="No" onClick={cancel} />
        </div>
        <Button
          size="bigsm"
          className={
            displayEl
              ? `${classes["dont__display"]}`
              : `${classes["remove__bank-button"]}`
          }
          color="tertiary"
          onClick={onClick}
        >
          {loading ? "Deleting..." : "Remove Bank"}
        </Button>
      </div>
  );
};

export default SettingsModal;
