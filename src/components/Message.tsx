import React from "react";
import Input from "./Input";
import classes from "./Message.module.css";
import horizontalOption from "../assets/horizontal-option.svg";
import search from "../assets/search.svg";
import attahFile from "../assets/attach-online.svg";
import send from "../assets/send.svg";

const Message = () => {
  return (
    <>
      <div className={classes["message__container"]}>
        <div className={classes["message__content"]}>
          <div className={`${classes["message__div"]} ${classes["owner"]}`}>
            <p className={classes["message"]}>Just check the inbox now</p>
            <button>
              <img
                className="message__option-button"
                src={horizontalOption}
                alt="Option-button"
              />
            </button>
          </div>

          <div>
            {/* <p className={classes["message__error"]}>Message failed to send</p> */}
            <p className={`${classes["message__date"]} ${classes["owner"]}`}>
              11:48 pm seen
            </p>
          </div>

          <div className={classes["chat__picture-div"]}>
            <div>
              <img className={classes["message__pic"]} src="https://images.pexels.com/photos/25568965/pexels-photo-25568965/free-photo-of-a-woman-in-a-leopard-print-dress-and-cowboy-hat.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            </div>
            <div className={classes["chat__pic"]}>
              <p>rrrr</p>
              <p>gggggg</p>
            </div>
          </div>
        </div>

        <div className={classes["message__input-div"]}>
          <div className={classes["chat__bar"]}>
            <Input
              placeholder="Start a new message"
              className={classes["message__input"]}
            />
            <Input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
              <img
                src={attahFile}
                className={classes["message__file"]}
                alt="Attach-a-file"
              />
            </label>
            <button className={classes["message__send-button"]}>
              <img
                src={send}
                className={classes["message__send-icon"]}
                alt="Send-icon"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
