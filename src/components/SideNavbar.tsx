import React from "react";
import { Link } from "react-router-dom";
import classes from "./SideNavbar.module.css";

import dropoudLogo2 from "../assets/dropoud-logo2.svg";
import fluentHome from "../assets/fluent-home.svg"
import fluentVideo from "../assets/fluent-video.svg";
import wallet from "../assets/wallet.svg";
import notification from "../assets/notification.svg";
import message from "../assets/message.svg";
import comments from "../assets/comments.svg";
import followers from "../assets/followers.svg";
import setting from "../assets/setting.svg";
import logout from "../assets/logout.svg"; 

const SideNavbar = () => {
  return (
    <>
      <nav className={classes["side__nav-bar"]}>
        <img
          className={classes["navbar__logo"]}
          src={dropoudLogo2}
          alt="Navigation-logo"
        />

        <div className={classes["nav__links-container"]}>
          <div className={classes["nav__links"]}>
            <img
              className={classes["nav__links-img"]}
              src={fluentHome}
              alt="Home-logo"
            />
            <Link className={classes["nav__link-item"]} to="/home">
              Home
            </Link>
          </div>
          <div className={classes["nav__links"]}>
            <img
              className={classes["nav__links-img"]}
              src={fluentVideo}
              alt="Content-logo"
            />
            <Link className={classes["nav__link-item"]} to="/content">
              Content
            </Link>
          </div>
          <div className={classes["nav__links"]}>
            <img
              className={classes["nav__links-img"]}
              src={wallet}
              alt="Wallet-logo"
            />
            <Link className={classes["nav__link-item"]} to="/wallet">
              Wallet
            </Link>
          </div>

          <div className={classes["border__bottom"]}></div>

          <div
            className={`${classes["nav__links"]} ${classes["nav__links-2"]}`}
          >
            <img
              className={classes["nav__links-img"]}
              src={notification}
              alt="Home-logo"
            />
            <Link className={classes["nav__link-item"]} to="/notification">
              Notification
            </Link>
          </div>
          <div className={classes["nav__links"]}>
            <img
              className={classes["nav__links-img"]}
              src={message}
              alt="Content-logo"
            />
            <Link className={classes["nav__link-item"]} to="">
              Inbox
            </Link>
          </div>
          <div className={classes["nav__links"]}>
            <img
              className={classes["nav__links-img"]}
              src={comments}
              alt="Wallet-logo"
            />
            <Link className={classes["nav__link-item"]} to="">
              Comment
            </Link>
          </div>
          <div className={classes["nav__links"]}>
            <img
              className={classes["nav__links-img"]}
              src={followers}
              alt="Wallet-logo"
            />
            <Link className={classes["nav__link-item"]} to="">
              Follower
            </Link>
          </div>

          <div className={classes["border__bottom"]}></div>

          <div className={classes["nav__links-3"]}>
            <div className={classes["nav__links"]}>
              <img
                className={classes["nav__links-img"]}
                src={setting}
                alt="Wallet-logo"
              />
              <Link className={classes["nav__link-item"]} to="">
                Setting
              </Link>
            </div>
            <div className={classes["nav__links"]}>
              <img
                className={classes["nav__links-img"]}
                src={logout}
                alt="Wallet-logo"
              />
              <Link className={classes["nav__link-item"]} to="">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideNavbar;
