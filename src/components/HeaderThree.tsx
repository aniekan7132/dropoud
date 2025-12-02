import React from 'react'
import classes from "./HeaderThree.module.css";

const HeaderThree = ({text}: {text: string}) => {
  return (
    <>
      <h3 className={classes["overview__header"]}>{text}</h3>
    </>
  );
}

export default HeaderThree