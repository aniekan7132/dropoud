import React from 'react'
import Input from './Input';
import Button from './ButtonComponent';
import classes from "./PopUpInput.module.css"

const PopUpInput = () => {
  return (
    <>
      <div className={classes["details__container"]}>
        <div className={classes["title__div"]}>
          <label htmlFor="title" className={classes.label}>
            Title (required)
          </label>
          <Input id="title" type="text" className={classes["title__input"]} />
        </div>
        <div className={classes["description__div"]}>
          <label htmlFor="description" className={classes.label}>
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            cols={50}
            className={classes["text__area-input"]}
          />
        </div>
        <div className={classes["button__div"]}>
          <button className={classes["button__cancel"]}>Cancel</button>
          <button className={`${classes["button__cancel"]} ${classes["button__save"]}`}>Save</button>
        </div>
      </div>
    </>
  );
}

export default PopUpInput;