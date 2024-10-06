import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import classes from "./SideNavbar.module.css";

import dropoudLogo2 from "../assets/dropoud-logo2.svg";
import fluentHome from "../assets/fluent-home.svg";
import fluentVideo from "../assets/fluent-video.svg";
import wallet from "../assets/wallet.svg";
import notification from "../assets/notification.svg";
import message from "../assets/message.svg";
import comments from "../assets/comments.svg";
import followers from "../assets/followers.svg";
import setting from "../assets/setting.svg";
import logout from "../assets/logout.svg";

const SideNavbar = () => {
  const activeLink = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? `${classes["nav__links"]} ${classes.active}`
      : `${classes["nav__links"]}`;

  return (
    <>
      <nav className={classes["side__nav-bar"]}>
        <img
          className={classes["navbar__logo"]}
          src={dropoudLogo2}
          alt="Navigation-logo"
        />

        <div className={classes["nav__links-container"]}>
          <NavLink to="/dashboard" className={activeLink}>
            <img
              className={classes["nav__links-img"]}
              src={fluentHome}
              alt="Home-logo"
            />
            <p className={classes["nav__link-item"]}>Home</p>
          </NavLink>
          <NavLink to="/content" className={activeLink}>
            <img
              className={classes["nav__links-img"]}
              src={fluentVideo}
              alt="Content-logo"
            />
            <p className={classes["nav__link-item"]}>Content</p>
          </NavLink>
          <NavLink to="/wallet" className={activeLink}>
            <img
              className={classes["nav__links-img"]}
              src={wallet}
              alt="Wallet-logo"
            />
            <p className={classes["nav__link-item"]}>Wallet</p>
          </NavLink>

          <div
            className={`${classes["border__bottom"]} ${classes["border__bottom-2"]}`}
          ></div>

          <NavLink
            to="/notification"
            className={activeLink}
          >
            <img
              className={classes["nav__links-img"]}
              src={notification}
              alt="Home-logo"
            />
            <p className={classes["nav__link-item"]}>Notification</p>
          </NavLink>
          <NavLink to="/inbox" className={activeLink}>
            <img
              className={classes["nav__links-img"]}
              src={message}
              alt="Content-logo"
            />
            <p className={classes["nav__link-item"]}>Inbox</p>
          </NavLink>
          <NavLink to="/comment" className={activeLink}>
            <img
              className={classes["nav__links-img"]}
              src={comments}
              alt="Wallet-logo"
            />
            <p className={classes["nav__link-item"]}>Comment</p>
          </NavLink>
          <NavLink to="/comments" className={activeLink}>
            <img
              className={classes["nav__links-img"]}
              src={followers}
              alt="Wallet-logo"
            />
            <p className={classes["nav__link-item"]}>Follower</p>
          </NavLink>

          <div className={classes["border__bottom"]}></div>

          <div className={classes["nav__links-3"]}>
            <NavLink to="settings" className={activeLink}>
              <img
                className={classes["nav__links-img"]}
                src={setting}
                alt="Wallet-logo"
              />
              <p className={classes["nav__link-item"]}>Setting</p>
            </NavLink>

            <NavLink to="/sign-in" className={activeLink}>
              <img
                className={classes["nav__links-img"]}
                src={logout}
                alt="Wallet-logo"
              />
              <p className={classes["nav__link-item"]}>Logout</p>
            </NavLink>
          </div>
        </div>
      </nav>

      <div className={classes["mobile_side__nav-bar"]}>
        <div className={classes["mobile_nav__links-container"]}>
          <div className={classes["mobile_nav__links"]}>
            <Link to="/dashboard">
              <img
                className={classes["mobile_nav__links-img"]}
                src={fluentHome}
                alt="Home-logo"
              />
            </Link>
            <Link className={classes["mobile_nav__link-item"]} to="/dashboard">
              Home
            </Link>
          </div>
          <div className={classes["mobile_nav__links"]}>
            <Link to="/content">
              <img
                className={classes["mobile_nav__links-img"]}
                src={fluentVideo}
                alt="Content-logo"
              />
            </Link>
            <Link className={classes["mobile_nav__link-item"]} to="/content">
              Content
            </Link>
          </div>
          <div className={classes["mobile_nav__links"]}>
            <Link to="/wallet">
              <img
                className={classes["mobile_nav__links-img"]}
                src={wallet}
                alt="Wallet-logo"
              />
            </Link>
            <Link className={classes["mobile_nav__link-item"]} to="/wallet">
              Wallet
            </Link>
          </div>

          <div className={classes["mobile_nav__links"]}>
            <Link to="/notification">
              <img
                className={classes["mobile_nav__links-img"]}
                src={notification}
                height={"24px"}
                alt="Wallet-logo"
              />
            </Link>
            <Link
              className={classes["mobile_nav__link-item"]}
              to="/notification"
            >
              Notification
            </Link>
          </div>

          <div className={classes["mobile_nav__links"]}>
            <img
              className={classes["mobile_nav__links-img"]}
              src={message}
              alt="Content-logo"
            />
            <Link className={classes["mobile_nav__link-item"]} to="">
              More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNavbar;
