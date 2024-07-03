import React from 'react'
import classes from './Profile.module.css';
import followersPictureOne from "../assets/followers-picture1.svg";

const Profile = () => {
  return (
    <>
      <div className={classes["overview__name-school_image"]}>
        <img
          className={classes["overview__followers-picture"]}
          src={followersPictureOne}
          alt="Followers-image"
        />
        <div className={classes["overview__followers-name_school--wrapper"]}>
          <p className={classes["overview__followers-name"]}>Carlos Martin</p>
          <p className={classes["overview__followers-school"]}>
            University of Calabar
          </p>
        </div>
      </div>
    </>
  );
}

export default Profile