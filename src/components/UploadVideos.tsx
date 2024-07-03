import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import classes from "./UploadVideos.module.css";
import HeaderFive from "./HeaderFive";
import cancelIcon from "../assets/cancel.svg";
import upload from "../assets/upload.svg";
import Button from "./ButtonComponent";

interface UploadModal {
  onClick?: void;
}

const UploadVideos = ({ onClick }: UploadModal) => {
  const uploadModal = document.getElementById("upload") as HTMLElement;

  return ReactDOM.createPortal(
    <>
      <div className={classes["upload__videos-background"]}>
        <div className={classes["upload__videos-container"]}>
          <div className={classes["upload__heading"]}>
            <HeaderFive text="Upload Videos" />
            <img
              src={cancelIcon}
              className={classes["cancel__icon"]}
              alt="Cancel"
            />
          </div>

          <div className={classes["upload__select-files"]}>
            <div className={classes["upload__select-files_sub--cont"]}>
              <div className={classes["upload__icon-background"]}>
                <img
                  src={upload}
                  className={classes["upload__icon"]}
                  alt="Upload"
                />
              </div>
              <div className={classes["upload__select-files_text"]}>
                <p>Drag and drop video files to upload</p>
                <p>Up to 200MB</p>
              </div>
              <div className={classes["upload__select-files_button"]}>
                <Button color="primary" size="smlg" type="submit">
                  Select Files
                </Button>
                <Link to="">Check guidlines</Link>
              </div>
            </div>
          </div>

          <div className={classes["upload__file-format__cont"]}>
            <p>Supported file formats</p>
            <div className={classes["upload__file-format"]}>
                <p>MP4</p>
                <p>AVL</p>
                <p>FLV</p>
                <p>MKV</p>
                <p>MOV</p>
                <p>MPEG</p>
                <p>MPG</p>
                <p>TS</p>
                <p>VOB</p>
                <p>WMV</p>
            </div>
          </div>
        </div>
      </div>
    </>,
    uploadModal
  );
};

export default UploadVideos;
