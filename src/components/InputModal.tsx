import React from "react";
import ReactDOM from "react-dom";
import classes from "./InputModal.module.css";
import search from "../assets/search.svg";
import Input from "./Input";
import Profile from "./Profile";
import Viewers from "./Viewers";
import HeaderThree from "./HeaderThree";

interface SearchModal {
  onClick(): void;
}

const InputModal = ({ onClick }: SearchModal) => {
  const inputModal = document.getElementById("input") as HTMLElement;

  const preventModalClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <div className={classes["input__modal-background"]} onClick={onClick}>
      <div
        className={classes["input__modal-container"]}
        onClick={(e) => preventModalClick(e)}
      >
        <div className={classes["input__search-container"]}>
          <img
            src={search}
            alt="Search-logo"
            className={classes["search__logo"]}
          />
          <Input
            placeholder="Search..."
            className={classes["top__bar-input"]}
            style={{ width: "690px" }}
          />
        </div>

        {/* <div className={classes["input__modal-icon"]}>
          <img src={search} alt="Search-icon" />
          <p>No activity yet</p>
        </div> */}
        <HeaderThree  text=""/>
        <div className={classes["input__viewers"]}>
          <div className={classes["input__viewers-container"]}>
            <Viewers />
            <Viewers />
          </div>
          <div className={classes["input__viewers-container"]}>
            <Viewers />
            <Viewers />
          </div>
        </div>
      </div>
    </div>,
    inputModal
  );
};

export default InputModal;
{
  /* 
<InputModal />
 <div className={classes["input__search-icon_container"]}>
            <img src={search} alt="Search-icon" />
            
          </div>
        </div>, input */
}
