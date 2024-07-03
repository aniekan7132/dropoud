import React, { useState } from "react";
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
import GridFirstRow from "../../components/GridFirstRow";
import HeaderThree from "../../components/HeaderThree";
import InputModal from "../../components/InputModal";
import SideNavbar from "../../components/SideNavbar";
import TopSearchBar from "../../components/TopSearchBar";

const Home = () => {
  const [inputModal, setInputModal] = useState(false);

  return (
    <>
      {inputModal && <InputModal onClick={() => setInputModal(false)} />}
      <div className={classes.home}>
        <SideNavbar />
        <main className={classes["main__pane"]}>
          <TopSearchBar />
          <div className={classes["main__container"]}>
            <h2
              className={`${classes["text-bg"]} ${classes["text__bg-margin"]}`}
            >
              Overview
            </h2>

            <div className={classes["overview__container"]}>
              <GridFirstRow />
              <GridFirstRow />
              <GridFirstRow />
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

              <div className={classes["overview__video-section"]}>
                <HeaderThree />
                <p className={classes[""]}>
                  Do you want to view metrics on your recent video? Upload and
                  publish a video to begin
                </p>
                <div className={classes["button__empty"]}>
                  <Button color="primary" size="smlg" type="submit">
                    Upload Now
                  </Button>
                </div>
                {/*<h3 className={classes["overview__header"]}>
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
              </div>*/}
              </div>

              <div className={classes["overview__followers-container"]}>
                <div className={classes["no__active-follower"]}>
                  <p>No Active Follower</p>
                </div>
                {/*<h3
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
              </div>*/}
                <Button
                  className={classes["button__follower"]}
                  color="primary"
                  size="bigsm"
                  type="submit"
                >
                  View All
                </Button>
              </div>
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
                      <p>No Comments Found</p>
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
    </>
  );
};

export default Home;
