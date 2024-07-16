import React from "react";
import classes from "./ChatBody.module.css";
import ChatList from "./ChatList";
import UserProfile from "./UserProfile";
import ChatContent from "./ChatContent";

const ChatBody = () => {
  return (
    <div className={classes["main__chatbody"]}>
      <ChatList />
      <div>
        <ChatContent />
      </div>
    </div>
  );
};

export default ChatBody;
