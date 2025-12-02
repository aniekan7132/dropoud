import React from "react";
import TopSearchBar from "./TopSearchBar";
import SideNavbar from "./SideNavbar";
import classes from "../pages/home/Home.module.css";

const UnderConstruction = () => {
  return (
    <div className={classes.home}>
      <SideNavbar />
      <main className={classes["main__pane"]}>
        <TopSearchBar />
        <div className={classes["main__container"]}>
          <h1>This feature still under development</h1>
        </div>
      </main>
    </div>
  );
};

export default UnderConstruction;
