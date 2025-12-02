import React from "react";
import ReactDOM from "react-dom";
import HeaderSeven from "./HeaderSeven";
import Input from "./Input";
import classes from "./DeleteModal.module.css";

interface Props {
  deleteHandler: (id: number | null) => void;
  deleteText: string;
  onCancel: () => void;
  notificationId: number | null;
  handleRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
}

const DeleteModal = ({
  deleteHandler,
  deleteText,
  onCancel,
  notificationId,
  isChecked,
  handleRadioChange,
}: Props) => {
  const deleteModal = document.getElementById("delete") as HTMLElement;

  return ReactDOM.createPortal(
    <div className={classes["delete__modal-background"]}>
      <div className={classes["delete__modal-container"]}>
        <div>
          <HeaderSeven text={deleteText} />
        </div>

        <div className={classes["delete__modal-text"]}>
          <Input
            type="radio"
            checked={isChecked}
            className={classes["delete__modal-radio_input"]}
            onChange={handleRadioChange}
          />
          <HeaderSeven text="I understand that deleting is permanent and can't be undone" />
        </div>

        <div className={classes["button__div"]}>
          <button className={classes["button__cancel"]} onClick={onCancel}>
            Cancel
          </button>
          <button
            // disabled={!isChecked}
            className={
              isChecked
                ? `${classes["button__cancel"]}`
                : `${classes["button__save"]} ${classes["button__cancel"]}`
            }
            onClick={() => deleteHandler(notificationId)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>,
    deleteModal
  );
};

export default DeleteModal;
