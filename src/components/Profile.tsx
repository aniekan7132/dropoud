import React from 'react'
import classes from './Profile.module.css';
import {  DashboardComments } from '../types';

const Profile = ({comment}:{comment:DashboardComments}) => {
  return (
    <>
      <div className={classes["overview__name-school_image"]}>
        <img
          className={classes["overview__followers-picture"]}
          src={comment.user_image}
          alt="Followers-image"
        />
        <div className={classes["overview__followers-name_school--wrapper"]}>
          <p className={classes["overview__followers-name"]}>{comment.user_name}</p>
          <p className={classes["overview__followers-school"]}>
           {comment.lecture.course}
          </p>
        </div>
      </div>
    </>
  );
}

export default Profile