import React from "react";
import Input from "./Input";
import Button from "./ButtonComponent";
import classes from "./TopSearchBar.module.css";
import logo from "../assets/dropoud-logo.svg";
import search from "../assets/search.svg";
import upload from "../assets/upload.svg";
import verifiedIcon from "../assets/verified-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { setUploadModal } from "../features/generalSlice";

const TopSearchBar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const hanldeUploadToggle = () => {
    dispatch(setUploadModal(true));
  };

  return (
    <>
      {" "}
      <>
        <div className={classes["top__navbar"]}>
          <div className={classes["search__bar"]}>
            <button className={classes["search__logo"]}>
              <img src={search} alt="Search-logo" />
            </button>
            <Input
              placeholder="Search..."
              className={classes["top__bar-input"]}
            />
          </div>

          <div className={classes["top__right-nav"]}>
            <div className={classes["top__right-nav_button"]}>
              <img
                className={classes["button__logo"]}
                src={upload}
                alt="Upload-logo"
              />
              <Button
                color="secondary"
                size="sm"
                type="submit"
                onClick={hanldeUploadToggle}
              >
                Upload
              </Button>
            </div>

            <div className={classes["profile__container"]}>
              <div className={classes["profile__picture-container"]}>
                <img
                  className={classes["profile__picture"]}
                  src={user?.image}
                  alt="Profile-picture"
                />
                <img
                  className={classes["verified-icon"]}
                  src={verifiedIcon}
                  alt="Verified-icon"
                />
              </div>
              <div className={classes["profile__title-container"]}>
                <p className={classes["profile__name"]}>
                  {user && user?.first_name + " " + user?.surname}
                </p>
                <p className={classes["profile__title"]}>{user?.institution}</p>
              </div>
            </div>
          </div>
        </div>

        <div className={classes["mobile_top__navbar"]}>
          <img className="logo" width={"100px"} src={logo} alt="page-logo" />

          <div className={classes["right"]}>
            <button className={classes["mobile_search__logo"]}>
              <img src={search} alt="Search-logo" />
            </button>
            <button
              className={classes["mobile_button_upload"]}
              onClick={hanldeUploadToggle}
            >
              <img
                className={classes["mobile_button__logo"]}
                src={upload}
                alt="Upload-logo"
              />
            </button>

            <div className={classes["mobile_profile__picture-container"]}>
              <img
                className={classes["mobile_profile__picture"]}
                src={user?.image}
                alt="Profile-picture"
              />
              <img
                className={classes["mobile_verified-icon"]}
                src={verifiedIcon}
                alt="Verified-icon"
              />
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default TopSearchBar;
