import React from "react";
import classes from './HeaderSix.module.css';

const HeaderSix = ({text}: {text: string}) => {
  return (
    <>
      <h6 className={classes["header__six"]}>{text}</h6>
    </>
  );
};

export default HeaderSix;
