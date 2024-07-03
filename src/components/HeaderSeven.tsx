import React from "react";
import classes from "./HeaderSeven.module.css";

const HeaderSeven = ({ text }: { text: string }) => {
  return (
    <>
      <h6 className={classes["header__seven"]}>{text}</h6>
    </>
  );
};

export default HeaderSeven;
