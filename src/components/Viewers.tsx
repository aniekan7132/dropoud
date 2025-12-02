import React from 'react'
import classes from "./Viewers.module.css";
import followersPictureOne from "../assets/followers-picture1.svg"

const Viewers = () => {
  return (
    <div>
      {" "}
      <div className={classes["viewers__name-school_container"]}>
        <div className={classes["overview__name-school_container--sub"]}>
          <div className={classes["overview__name-school_image"]}>
            <img
              className={classes["overview__followers-picture"]}
              src={followersPictureOne}
              alt="Followers-image"
            />
            <div
              className={classes["overview__followers-name_school--wrapper"]}
            >
              <p className={classes["overview__followers-name"]}>
                Carlos Martin
              </p>
              <p className={classes["overview__followers-school"]}>
                University of calabar
              </p>
            </div>
          </div>
        </div>
        <p className={classes["overview__followed"]}>Following</p>
      </div>
    </div>
  );
}

export default Viewers