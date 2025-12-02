import React from 'react'
import classes from "./HeaderFive.module.css"

const HeaderFive = ({text}: {text: string}) => {
  return (
    <>
      <h5 className={classes["heading__five"]}>{text}</h5>
    </>
  );
}

export default HeaderFive