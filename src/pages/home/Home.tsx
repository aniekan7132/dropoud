import React from "react";
import Profile from "../../components/Profile";
import dropoudLogo2 from "../../assets/dropoud-logo2.svg";
import fluentHome from "../../assets/fluent-home.svg";
import fluentVideo from "../../assets/fluent-video.svg";
import wallet from "../../assets/wallet.svg";
import notification from "../../assets/notification.svg";
import message from "../../assets/message.svg";
import comments from "../../assets/comments.svg";
import followers from "../../assets/followers.svg";
import setting from "../../assets/setting.svg";
import logout from "../../assets/logout.svg";
import search from "../../assets/search.svg";
import Input from "../../components/Input";
import upload from "../../assets/upload.svg";
import verifiedIcon from "../../assets/verified-icon.svg";
import profileImage from "../../assets/profile-image.svg";
import arrowUp from "../../assets/arrow-up.svg";
import arrowDown from "../../assets/arrow-down.svg";
import sideView from "../../assets/video-box.svg";
import followersPictureOne from "../../assets/followers-picture1.svg";
import followersPictureTwo from "../../assets/followers-picture2.svg";
import followersPictureThree from "../../assets/followers-picture3.svg";

import classes from "./Home.module.css";
import { Link } from "react-router-dom";
import Button from "../../components/ButtonComponent";
import Empty from "../../components/Empty";

const Home = () => {
  return (
    <div className={classes.home}>
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
            <Link className={classes["nav__link-item"]} to="sign-up">
              Home
            </Link>
          </div>
          <div className={classes["nav__links"]}>
            <img
              className={classes["nav__links-img"]}
              src={fluentVideo}
              alt="Content-logo"
            />
            <Link className={classes["nav__link-item"]} to="">
              Content
            </Link>
          </div>
          <div className={classes["nav__links"]}>
            <img
              className={classes["nav__links-img"]}
              src={wallet}
              alt="Wallet-logo"
            />
            <Link className={classes["nav__link-item"]} to="">
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
            <Link className={classes["nav__link-item"]} to="">
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

      <main className={classes["main__container-overall"]}>
        <div className={classes["top__navbar"]}>
          <div className={classes["search__bar"]}>
            <img
              src={search}
              alt="Search-logo"
              className={classes["search__logo"]}
            />
            <Input
              placeholder="Search..."
              className={classes["top__bar-input"]}
            />
          </div>

          <div className={classes["top__right-nav"]}>
            <div className={classes["top__right-nav_button"]}>
              <img
                className={classes["button__logo"]}
                src={upload}
                alt="Upload-logo"
              />
              <Button color="secondary" size="sm" type="submit">
                Upload
              </Button>
            </div>

            <div className={classes["profile__container"]}>
              <div className={classes["profile__picture-container"]}>
                <img
                  className={classes["profile__picture"]}
                  src={profileImage}
                  alt="Profile-picture"
                />
                <img
                  className={classes["verified-icon"]}
                  src={verifiedIcon}
                  alt="Verified-icon"
                />
              </div>
              <div className={classes["profile__title-container"]}>
                <p className={classes["profile__name"]}>James Tom</p>
                <p className={classes["profile__title"]}>University lecturer</p>
              </div>
            </div>
          </div>
        </div>

        <div className={classes["main__container"]}>
          <h2 className={classes["text-bg"]}>Overview</h2>

          <div className={classes["overview__container"]}>
            <Empty />
            {/* { <div className={classes["overview__container-top"]}> } */}
            {/* <div className={classes["sub__overview-container-sub"]}>
              <h3 className={classes["overview__header"]}>Total Followers</h3>
              <p className={classes["overview__score"]}>0</p>
              <div className={classes["main__arrow-container"]}>
                <div className={classes["sub__arrow-container"]}>
                  <img className={classes.arrow} src={arrowUp} alt="Arrow-up" />
                </div>
                <p className={classes["percentage"]}>
                  + 00.00% <span>than last week</span>
                </p>
              </div>
            </div>


            <div className={classes["sub__overview-container-sub"]}>
              <h3 className={classes["overview__header"]}>Total View</h3>
              <p className={classes["overview__score"]}>0</p>
              <div className={classes["main__arrow-container"]}>
                <div className={classes["sub__arrow-container"]}>
                  <img className={classes.arrow} src={arrowUp} alt="Arrow-up" />
                </div>
                <p className={classes["percentage"]}>
                  + 00.00% <span>than last week</span>
                </p>
              </div>
            </div>

            <div className={classes["sub__overview-container-sub"]}>
              <h3 className={classes["overview__header"]}>Total Comments</h3>
              <p className={classes["overview__score"]}>0</p>
              <div className={classes["main__arrow-container"]}>
                <div
                  className={`
                    ${classes["sub__arrow-container"]} ${classes["sub__arrow-container_red"]}
                  `}
                >
                  <img
                    className={classes.arrow}
                    src={arrowDown}
                    alt="Arrow-down"
                  />
                </div>
                <p className={classes["percentage"]}>
                  + 00.00% <span>than last week</span>
                </p>
              </div>
            </div>  */}

            {/* <div className={classes["overview__video-section"]}>
              <h3 className={classes["overview__header"]}>
                Latest Video You Upload
              </h3>
              <img
                src={sideView}
                alt="Image-of-video"
                className={classes["overview__video-image"]}
              />
              <div className={classes["overview__video-title_section"]}>
                <div>
                  <h4 className={classes["overview__video-title"]}>
                    Creases Patterns
                  </h4>
                  {/* <div>
                    <img src="" alt="" />
                    <p>PHY 111</p>
                  </div>}
                </div>
                <div className={classes["overview__views-comments"]}>
                  <p className={classes["overview__video-views"]}>Views (10)</p>
                  <p className={classes["overview__video-comment"]}>
                    Comments (20)
                  </p>
                </div>
              </div>
            </div> */}
            {/* 
            <div className={classes["overview__followers-container"]}>
              <h3
                className={`${classes["overview__header"]} ${classes["overview__header-padding"]}`}
              >
                Followers
              </h3>
              <div className={classes["overview__followers"]}>
                <div className={classes["overview__followers-details"]}>
                  <div className={classes["overview__name-school_container"]}>
                    <div
                      className={
                        classes["overview__name-school_container--sub"]
                      }
                    >
                      <div className={classes["overview__name-school_image"]}>
                        <img
                          className={classes["overview__followers-picture"]}
                          src={followersPictureOne}
                          alt="Followers-image"
                        />
                        <div
                          className={
                            classes["overview__followers-name_school--wrapper"]
                          }
                        >
                          <p className={classes["overview__followers-name"]}>
                            Carlos Martin
                          </p>
                          <p className={classes["overview__followers-school"]}>
                            University of calabar
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className={classes["overview__followed"]}>
                      Followed you
                    </p>
                  </div>

                  <div className={classes["overview__name-school_container"]}>
                    <div
                      className={
                        classes["overview__name-school_container--sub"]
                      }
                    >
                      <div className={classes["overview__name-school_image"]}>
                        <img
                          className={classes["overview__followers-picture"]}
                          src={followersPictureTwo}
                          alt="Followers-image"
                        />
                        <div
                          className={
                            classes["overview__followers-name_school--wrapper"]
                          }
                        >
                          <p className={classes["overview__followers-name"]}>
                            Barbara Gordon
                          </p>
                          <p className={classes["overview__followers-school"]}>
                            Imo sate university
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className={classes["overview__followed"]}>
                      Followed you
                    </p>
                  </div>
                  <div className={classes["overview__name-school_container"]}>
                    <div
                      className={
                        classes["overview__name-school_container--sub"]
                      }
                    >
                      <div className={classes["overview__name-school_image"]}>
                        <img
                          className={classes["overview__followers-picture"]}
                          src={followersPictureThree}
                          alt="Followers-image"
                        />
                        <div
                          className={
                            classes["overview__followers-name_school--wrapper"]
                          }
                        >
                          <p className={classes["overview__followers-name"]}>
                            Wanda Maximoff
                          </p>
                          <p className={classes["overview__followers-school"]}>
                            University of technology owerri
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className={classes["overview__followed"]}>
                      Followed you
                    </p>
                  </div>
                </div>
              </div>
              <Button
                className={classes["button__follower"]}
                color="primary"
                size="bigsm"
                type="submit"
              >
                View All
              </Button>
            </div> */}
            {/* </div> */}

            <div
              className={`${classes["overview__views-container"]} ${classes["grid__row-span_2"]} ${classes["grid__row-span"]}`}
            >
              <h3 className={classes["overview__header"]}>Views</h3>

              <div>
                <p>No Views at the moment </p>
              </div>
              {/* 
              <div className={classes["overview__name-school_container"]}>
                <div
                  className={classes["overview__name-school_container--sub"]}
                >
                  <div className={classes["overview__name-school_image"]}>
                    <img
                      className={classes["overview__followers-picture"]}
                      src={followersPictureTwo}
                      alt="Followers-image"
                    />
                    <div
                      className={
                        classes["overview__followers-name_school--wrapper"]
                      }
                    >
                      <p className={classes["overview__followers-name"]}>
                        Barbara Gordon
                      </p>
                      <p className={classes["overview__followers-school"]}>
                        Imo sate university
                      </p>
                    </div>
                  </div>
                </div>
                <p className={classes["overview__followed"]}>Just Viewed</p>
              </div>

              <div className={classes["overview__name-school_container"]}>
                <div
                  className={classes["overview__name-school_container--sub"]}
                >
                  <div className={classes["overview__name-school_image"]}>
                    <img
                      className={classes["overview__followers-picture"]}
                      src={followersPictureTwo}
                      alt="Followers-image"
                    />
                    <div
                      className={
                        classes["overview__followers-name_school--wrapper"]
                      }
                    >
                      <p className={classes["overview__followers-name"]}>
                        Barbara Gordon
                      </p>
                      <p className={classes["overview__followers-school"]}>
                        Imo sate university
                      </p>
                    </div>
                  </div>
                </div>
                <p className={classes["overview__followed"]}>Just Viewed</p>
              </div>
              <div className={classes["overview__name-school_container"]}>
                <div
                  className={classes["overview__name-school_container--sub"]}
                >
                  <div className={classes["overview__name-school_image"]}>
                    <img
                      className={classes["overview__followers-picture"]}
                      src={followersPictureTwo}
                      alt="Followers-image"
                    />
                    <div
                      className={
                        classes["overview__followers-name_school--wrapper"]
                      }
                    >
                      <p className={classes["overview__followers-name"]}>
                        Barbara Gordon
                      </p>
                      <p className={classes["overview__followers-school"]}>
                        Imo sate university
                      </p>
                    </div>
                  </div>
                </div>
                <p className={classes["overview__followed"]}>Just Viewed</p>
              </div>
              <div className={classes["overview__name-school_container"]}>
                <div
                  className={classes["overview__name-school_container--sub"]}
                >
                  <div className={classes["overview__name-school_image"]}>
                    <img
                      className={classes["overview__followers-picture"]}
                      src={followersPictureTwo}
                      alt="Followers-image"
                    />
                    <div
                      className={
                        classes["overview__followers-name_school--wrapper"]
                      }
                    >
                      <p className={classes["overview__followers-name"]}>
                        Barbara Gordon
                      </p>
                      <p className={classes["overview__followers-school"]}>
                        Imo sate university
                      </p>
                    </div>
                  </div>
                </div>
                <p className={classes["overview__followed"]}>Just Viewed</p>
              </div>
              <div className={classes["overview__name-school_container"]}>
                <div
                  className={classes["overview__name-school_container--sub"]}
                >
                  <div className={classes["overview__name-school_image"]}>
                    <img
                      className={classes["overview__followers-picture"]}
                      src={followersPictureTwo}
                      alt="Followers-image"
                    />
                    <div
                      className={
                        classes["overview__followers-name_school--wrapper"]
                      }
                    >
                      <p className={classes["overview__followers-name"]}>
                        Barbara Gordon
                      </p>
                      <p className={classes["overview__followers-school"]}>
                        Imo sate university
                      </p>
                    </div>
                  </div>
                </div>
                <p className={classes["overview__followed"]}>Just Viewed</p>
              </div>
              <div className={classes["overview__name-school_container"]}>
                <div
                  className={classes["overview__name-school_container--sub"]}
                >
                  <div className={classes["overview__name-school_image"]}>
                    <img
                      className={classes["overview__followers-picture"]}
                      src={followersPictureTwo}
                      alt="Followers-image"
                    />
                    <div
                      className={
                        classes["overview__followers-name_school--wrapper"]
                      }
                    >
                      <p className={classes["overview__followers-name"]}>
                        Barbara Gordon
                      </p>
                      <p className={classes["overview__followers-school"]}>
                        Imo sate university
                      </p>
                    </div>
                  </div>
                </div>
                <p className={classes["overview__followed"]}>Just Viewed</p>
              </div>
              <div className={classes["overview__name-school_container"]}>
                <div
                  className={classes["overview__name-school_container--sub"]}
                >
                  <div className={classes["overview__name-school_image"]}>
                    <img
                      className={classes["overview__followers-picture"]}
                      src={followersPictureTwo}
                      alt="Followers-image"
                    />
                    <div
                      className={
                        classes["overview__followers-name_school--wrapper"]
                      }
                    >
                      <p className={classes["overview__followers-name"]}>
                        Barbara Gordon
                      </p>
                      <p className={classes["overview__followers-school"]}>
                        Imo sate university
                      </p>
                    </div>
                  </div>
                </div>
                <p className={classes["overview__followed"]}>Just Viewed</p>
              </div>
              <div className={classes["overview__name-school_container"]}>
                <div
                  className={classes["overview__name-school_container--sub"]}
                >
                  <div className={classes["overview__name-school_image"]}>
                    <img
                      className={classes["overview__followers-picture"]}
                      src={followersPictureTwo}
                      alt="Followers-image"
                    />
                    <div
                      className={
                        classes["overview__followers-name_school--wrapper"]
                      }
                    >
                      <p className={classes["overview__followers-name"]}>
                        Barbara Gordon
                      </p>
                      <p className={classes["overview__followers-school"]}>
                        Imo sate university
                      </p>
                    </div>
                  </div>
                </div>
                <p className={classes["overview__followed"]}>Just Viewed</p>
              </div> */}
            </div>

            <div className={classes["grid__col-span_2"]}>
              <div className={classes["overview__comments-container"]}>
                <div className={classes["overview__comments-header_view"]}>
                  <h3 className={classes["overview__header"]}>Comments</h3>
                  <Link to="">View all</Link>
                </div>

                <div className={classes["overview__comments"]}>
                  <div className={classes["no__views"]}>
                    <p>No Views at the moment </p>
                  </div>

                  {/* <div className={classes["overview__comments-sub_container"]}>
                    <div
                      className={
                        classes["overview__comments-sub_container--profile"]
                      }
                    >
                      <Profile />
                      <div className={classes["overview__comments-reply_cont"]}>
                        <p className={classes["overview__comment"]}>
                          This is amazing, Thank you
                        </p>
                        <p className={classes["overview__comments-reply"]}>
                          Reply <span>1 reply</span>
                        </p>
                      </div>
                    </div>
                    <div
                      className={
                        classes["overview__comments-reply_right--cont"]
                      }
                    >
                      <p className={classes["overview__comment-reply_days"]}>
                        2days ago
                      </p>
                      <img
                        className={classes["overview__comments-picture"]}
                        src={sideView}
                        alt="Comment-picture"
                      />
                      <div
                        className={
                          classes["overview__comments-course_code-cont"]
                        }
                      >
                        <h4>Creases Patterns</h4>
                        <div
                          className={
                            classes["overview__comments-school_logo--cont"]
                          }
                        >
                          <img
                            className={
                              classes["overvieww__comment-school_logo"]
                            }
                            src={followersPictureOne}
                            alt="Comments-school-logo"
                          />
                          <p className={classes["overview__video-code"]}>
                            PHY 111
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {}
                  <div className={classes["overview__comments-sub_container"]}>
                    <div
                      className={
                        classes["overview__comments-sub_container--profile"]
                      }
                    >
                      <Profile />
                      <div className={classes["overview__comments-reply_cont"]}>
                        <p className={classes["overview__comment"]}>
                          This is amazing, Thank you
                        </p>
                        <p className={classes["overview__comments-reply"]}>
                          Reply <span>1 reply</span>
                        </p>
                      </div>
                    </div>
                    <div
                      className={
                        classes["overview__comments-reply_right--cont"]
                      }
                    >
                      <p className={classes["overview__comment-reply_days"]}>
                        2days ago
                      </p>
                      <img
                        className={classes["overview__comments-picture"]}
                        src={sideView}
                        alt="Comment-picture"
                      />
                      <div
                        className={
                          classes["overview__comments-course_code-cont"]
                        }
                      >
                        <h4>Creases Patterns</h4>
                        <div
                          className={
                            classes["overview__comments-school_logo--cont"]
                          }
                        >
                          <img
                            className={
                              classes["overvieww__comment-school_logo"]
                            }
                            src={followersPictureOne}
                            alt="Comments-school-logo"
                          />
                          <p className={classes["overview__video-code"]}>
                            PHY 111
                          </p>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
