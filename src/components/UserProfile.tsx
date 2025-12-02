import React from 'react'
import HeaderFour from './HeaderFour'
import classes from "./UserProfile.module.css";
import userProfilePic from "../assets/user-profile-picture.svg";

const UserProfile = () => {
  return (
    <div className={classes["user__profile-div"]}>
      <div className={classes["user__profile-pic_div"]}>
        <img
          className={classes["user__profile-picture"]}
          src={userProfilePic}
          alt="user-Profile-picture"
        />
      </div>
      <div className={classes["user__profile-title"]}>
        <HeaderFour text="Carlos Martin" />
        <p className={classes["user__profile-school"]}>University Of Calabar</p>
      </div>
    </div>
  );
}

export default UserProfile