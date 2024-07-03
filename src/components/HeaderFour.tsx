import React from "react";
import classes from "./HeaderFour.module.css";

const HeaderFour = ({ text }: { text: string }) => {
  return (
    <>
      <h4 className={classes["heading__four"]}>{text}</h4>
    </>
  );
};

export default HeaderFour;
