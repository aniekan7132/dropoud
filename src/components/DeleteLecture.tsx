import React, { useState } from "react";
import HeaderSeven from "./HeaderSeven";
import Input from "./Input";
import classes from "./DeleteModal.module.css";

import { Lecture } from "../types";
import axios from "../axios/axios";
import { reload } from "../pages/settings/Settings";

interface Props {
  onCancel: () => void;
  onDeleted: () => void;
  lecture: Lecture;
} 

const DeleteLecture = ({ onCancel, lecture, onDeleted}: Props) => {
  const [active, setactive] = useState(false);

  const deleteHandler = () => {
    axios
      .delete(`/api/v1/lectures/${lecture.lid}`, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((response) => {
        alert(response.data?.message);
        onDeleted();
      })
      .catch((err) => {
        alert(err.response.data.message);
      })
      .finally(() => {
        onCancel();
        reload();
      });
  };

  return (
    <div className={classes["delete__modal-background"]}>
      <div className={classes["delete__modal-container"]}>
        <div>
          <HeaderSeven text="Permanently delete this video?" />
          {/* Verify You Are Human Please verify that you are a human to continue. */}
        </div>

        <div className={classes["delete__modal-text"]}>
          <Input
            type="radio"
            onClick={() => setactive(!active)}
            className={classes["delete__modal-radio_input"]}
          />

          <HeaderSeven text="I understand that deleting is permanent and can't be undone" />
        </div>

        <div className={classes["button__div"]}>
          <button className={classes["button__cancel"]} onClick={onCancel}>
            Cancel
          </button>
          <button
            disabled={!active}
            className={`${classes["button__cancel"]} ${
              !active && classes["button__save"]
            }`}
            onClick={deleteHandler}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteLecture;
