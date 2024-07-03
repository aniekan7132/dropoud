import React from "react";
import HeaderFive from "./HeaderFive";
import cancelIcon from "../assets/cancel.svg";
import classes from "./ModalDetails.module.css";
import Input from "./Input";
import thumbnail from "../assets/thumbnail.svg";
import copyIcon from "../assets/copy.svg";
import sideView from "../assets/video-box.svg"
import Button from "./ButtonComponent";

const ModalDetails = () => {
  return (
    <>
      {" "}
      <div className={classes["upload__videos-background"]}>
        <div className={classes["upload__videos-container"]}>
          <div className={classes["upload__heading"]}>
            <HeaderFive text="Details" />
            <img
              src={cancelIcon}
              className={classes["cancel__icon"]}
              alt="Cancel"
            />
          </div>

          <div className={classes["title__description-div"]}>
            <div className={classes["details__container"]}>
              <div className={classes["title__div"]}>
                <label htmlFor="title" className={classes.label}>
                  Title (required)
                </label>
                <Input
                  id="title"
                  type="text"
                  className={classes["title__input"]}
                />
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
            </div>
            <div className={classes["videobox__div"]}>
              <img src={sideView} alt="video-box" />
              <div className={classes["links__container"]}>
                <p>Video link</p>
                <div className={classes["link__div"]}>
                  <p>https://youtu.be/Jv2E8c-G7r8</p>
                  <img src={copyIcon} alt="Copy-icon" />
                </div>
              </div>
            </div>
          </div>

          <div className={classes["thumbnail__div"]}>
            <div className={classes["course__code-div"]}>
              <label htmlFor="course-code">Course code</label>
              <Input
                id="course-code"
                placeholder="Course code"
                className={classes["course__code-input"]}
              />
            </div>

            <div className={classes["select__thumbnail-div"]}>
              <p>Select Thumbnail</p>
              {/* <HeaderFive text="Select Thumbnail" /> */}
              <div className={classes["select__thumbnail"]}>
                <img src={thumbnail} alt="Thumbnail" />
                <img src={thumbnail} alt="Thumbnail" />
                <img src={thumbnail} alt="Thumbnail" />
              </div>
            </div>
          </div>
          <div className={classes["upload__div"]}>
            <Button
              className={classes["upload"]}
              color="primary"
              size="bigsm"
              type="submit"
            >
              Upload
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDetails;
