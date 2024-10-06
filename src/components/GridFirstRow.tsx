import React from "react";
import classes from "./GridFirstRow.module.css";
import arrowUp from "../assets/arrow-up.svg";
import { Dashboard } from "../types";

interface Props {
  dashboardData: Dashboard
}

const GridFirstRow = ({dashboardData}: Props) => {
  console.log(dashboardData)
  return (
    <>
      <div className={classes["sub__overview-container-sub"]}>
        <h3 className={classes["overview__header"]}>Total Followers</h3>
        <p className={classes["overview__score"]}>0</p>
        <div className={classes["main__arrow-container"]}>
          <div className={classes["sub__arrow-container"]}>
            <img className={classes.arrow} src={arrowUp} alt="Arrow-up" />
          </div>
          <p className={classes["percentage"]}>
            + 00.00% <span>than last week</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default GridFirstRow;
