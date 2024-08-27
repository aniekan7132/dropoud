import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import classes from "./UploadVideos.module.css";
import HeaderFive from "./HeaderFive";
import cancelIcon from "../assets/cancel.svg";
import upload from "../assets/upload.svg";
import Button from "./ButtonComponent";
import Input from "./Input";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { selectFile, setFile } from "../features/generalSlice";

interface UploadModal {
  onClick?: void;
}

interface InitialState {
  openModal: boolean;
}

interface Props {
  setFilePicked: (picked: boolean) => void;
  closeModal: () => void;
  setFile: (file: File) => void;
}

const UploadVideos = ({ setFilePicked, closeModal, setFile }: Props) => {
  const navigate = useNavigate();

  const uploadModal = document.getElementById("upload") as HTMLElement;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      setFilePicked(true);
    }
  };

  return (
    // <Modal>
    <div className={classes["upload__videos-background"]}>
      <div className={classes["upload__videos-container"]}>
        <div className={classes["upload__heading"]}>
          <div>
            <p className={classes["upload__heading-text"]}>Upload Videos</p>
          </div>
          <img
            src={cancelIcon}
            onClick={closeModal}
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
              <input
                type="file"
                style={{ display: "none" }}
                id="file"
                onChange={handleFileChange}
              />
              <label htmlFor="file" className={classes["select__files"]}>
                Select Files
              </label>
              <Link to="">Check guidlines</Link>
            </div>
          </div>
        </div>

        <div className={classes["upload__file-format__cont"]}>
          <p>Supported file formats</p>
          <div className={classes["upload__file-format"]}>
            <div className={classes["file__format-top"]}>
              <span>MP4</span>
              <span>AVL</span>
              <span>FLV</span>
              <span>MKV</span>
              <span>MOV</span>
              <span>MPEG</span>
            </div>
            <div className={classes["file__format-below"]}>
              <span>MPG</span>
              <span>TS</span>
              <span>VOB</span>
              <span>WMV</span>
            </div>
          </div>
          <div style={{height:'200px'}}>
            
          </div>
        </div>
      </div>
    </div>
    // </Modal>
  );
};

export default UploadVideos;
