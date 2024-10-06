import React from "react";
import classes from "./ChatList.module.css";
// import SearchBar from "./SearchBar";
import HeaderSix from "./HeaderSix"
import search from "../assets/search.svg";
import Input from "./Input";
import image from '../assets/followers-picture1.svg'

const ChatList = () => {
  return (
    <div className={classes["main__chatlist"]}>
      <div className={classes["chat__bar"]}>
        <button className={classes["chatbar__button-logo"]}>
          <img src={search} alt="Search-icon" />
        </button>
        <Input
          placeholder="Search for Direct Message"
          className={classes["chatbar__input"]}
        />
      </div>

      <div className={classes["chatlist__container"]}>
        <div className={classes["chatlist__picture"]}>
          <img src={image} alt="Uploaded-picture" />
        </div>

        <div className={classes["chatlist__text-div"]}>
          <div className={classes["chatlist__text"]}>
            <div className={classes["chatlist__header"]}>
              <HeaderSix text="Carol Danvers" />
              <p className={classes["chat__time"]}>
                <span>10m</span> <span>ago </span>
              </p>
            </div>

            <div className={classes["chat__message-div"]}>
              <p className={classes["chat__message"]}>
                Hello
              </p>
              <div className={classes["chat__notification-background"]}>
                <p className={classes["chat__notification-text"]}>2</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes["chatlist__container"]}>
        <div className={classes["chatlist__picture"]}>
          <img src={image} alt="Uploaded-picture" />
        </div>
        <div className={classes["chatlist__text-div"]}>
          <div className={classes["chatlist__text"]}>
            <div className={classes["chatlist__header"]}>
              <HeaderSix text="Carol Danvers" />
              <p className={classes["chat__time"]}>
                <span>10m</span> <span>ago </span>
              </p>
            </div>

            <div className={classes["chat__message-div"]}>
              <p className={classes["chat__message"]}>
                Sir please upload more course
              </p>
              <div className={classes["chat__notification-background"]}>
                <p className={classes["chat__notification-text"]}>2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
