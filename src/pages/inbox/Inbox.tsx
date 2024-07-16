import React from 'react'
import SideNavbar from '../../components/SideNavbar';
import classes from "./Inbox.module.css";
import TopSearchBar from '../../components/TopSearchBar';
import HeaderTwo from '../../components/HeaderTwo';
import ChatBody from '../../components/ChatBody';


const Inbox = () => {
  return (
    <div className={classes.home}>
      <SideNavbar />
      <main className={classes["main__pane"]}>
        <TopSearchBar />
        <div className={classes["main__container"]}>
          <HeaderTwo text="Messages" />
          <div className={classes["main__chatbody"]}>
            <ChatBody />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Inbox;