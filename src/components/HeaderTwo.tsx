import React from 'react'
import classes from "./HeaderTwo.module.css";

const HeaderTwo = ({text}: {text: string}) => {
  return (
    <>
      <h2 className={classes["text-bg"]}>{text}</h2>
    </>
  );
}

export default HeaderTwo;