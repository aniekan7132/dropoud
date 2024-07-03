import React from "react";
import Input from "./Input";
import Button from "./ButtonComponent";
import classes from "./TopSearchBar.module.css";

import search from "../assets/search.svg";
import upload from "../assets/upload.svg";
import profileImage from "../assets/profile-image.svg";
import verifiedIcon from "../assets/verified-icon.svg";

const TopSearchBar = () => {
  return (
    <>
      {" "}
      <>
        <div className={classes["top__navbar"]}>
          <div className={classes["search__bar"]}>
            <img
              src={search}
              alt="Search-logo"
              className={classes["search__logo"]}
            />
            <Input
              placeholder="Search..."
              className={classes["top__bar-input"]}
              // onClick={() => setInputModal(true)}
            />
          </div>

          <div className={classes["top__right-nav"]}>
            <div className={classes["top__right-nav_button"]}>
              <img
                className={classes["button__logo"]}
                src={upload}
                alt="Upload-logo"
              />
              <Button color="secondary" size="sm" type="submit">
                Upload
              </Button>
            </div>

            <div className={classes["profile__container"]}>
              <div className={classes["profile__picture-container"]}>
                <img
                  className={classes["profile__picture"]}
                  src={profileImage}
                  alt="Profile-picture"
                />
                <img
                  className={classes["verified-icon"]}
                  src={verifiedIcon}
                  alt="Verified-icon"
                />
              </div>
              <div className={classes["profile__title-container"]}>
                <p className={classes["profile__name"]}>James Tom</p>
                <p className={classes["profile__title"]}>University lecturer</p>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default TopSearchBar;
