import React, { useState } from "react";
import HeaderSeven from "./HeaderSeven";
import Input from "./Input";
import classes from "./DeleteModal.module.css";

interface Props {
  onCancel: () => void;
  lecture: string;
}

const DeleteLecture = ({ onCancel }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  // const deleteHandler = () => {
  //   if (isChecked) {
  //     axios
  //       .delete(`/api/v1/lectures/${lecture}`, {
  //         headers: {
  //           Authorization: "Bearer " + sessionStorage.getItem("token"),
  //         },
  //       })
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // };

  return (
    <div className={classes["delete__modal-background"]}>
      <div className={classes["delete__modal-container"]}>
        <div>
          <HeaderSeven text="Permanently delete this video?" />
        </div>

        <div className={classes["delete__modal-text"]}>
          <Input
            type="radio"
            onChange={handleRadioChange}
            className={classes["delete__modal-radio_input"]}
          />
          <HeaderSeven text="I understand that deleting is permanent and can't be undone" />
        </div>

        <div className={classes["button__div"]}>
          <button className={classes["button__cancel"]} onClick={onCancel}>
            Cancel
          </button>
          <button
            className={
              isChecked
                ? `${classes["button__cancel"]}`
                : `${classes["button__save"]} ${classes["button__cancel"]}`
            }
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteLecture;
