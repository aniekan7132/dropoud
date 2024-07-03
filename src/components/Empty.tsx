import React from "react";
import GridFirstRow from "./GridFirstRow";
import HeaderThree from "./HeaderThree";
import Button from "./ButtonComponent";
import classes from "./Empty.module.css";

const Empty = () => {
  return (
    <>
      <GridFirstRow />
      <GridFirstRow />
      <GridFirstRow />
      <div className={classes["overview__video-section"]}>
        <HeaderThree />
        <p className={classes["upload__video"]}>
          Do you want to view metrics on your recent video? Upload and publish a
          video to begin
        </p>
        <div className={classes["button__empty"]}>
          <Button
            color="primary"
            size="smlg"
            type="submit"
          >
            Upload Now
          </Button>
        </div>
      </div>
      {/* <div className={classes["overview__followers-container"]}>
        <div className={classes["no__active-follower"]}>
          <p>No Active Follower</p>
        </div>
        <Button
          className={classes["button__follower"]}
          color="primary"
          size="bigsm"
          type="submit"
        >
          View All
        </Button>
      </div> */}
    </>
  );
};

export default Empty;
