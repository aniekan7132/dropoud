import React from "react";
import UserProfile from "./UserProfile";
import classes from "./ChatContent.module.css";
import Messages from "./Messages";

const ChatContent = () => {
  return (
    <div className={classes["chat__content"]}>
      <UserProfile />
      <Messages />
    </div>
  );
};

export default ChatContent;
