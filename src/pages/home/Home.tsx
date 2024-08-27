import React, { useEffect, useState } from "react";
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
import schoolLogo from "../../assets/school-logo.svg";

import classes from "./Home.module.css";
import { Link } from "react-router-dom";
import Button from "../../components/ButtonComponent";
import Empty from "../../components/Empty";
import GridFirstRow from "../../components/GridFirstRow";
import HeaderThree from "../../components/HeaderThree";
import InputModal from "../../components/InputModal";
import SideNavbar from "../../components/SideNavbar";
import TopSearchBar from "../../components/TopSearchBar";
import axios from "../../axios/axios";
import { Dashboard } from "../../types";
import { baseUrl } from "../../utilities/baseUrl";

const Home = () => {
  const [inputModal, setInputModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [dashboardData, setDashboardData] = useState<Dashboard | null>(null);

  const temBaseurl = "https://dropoud-api.onrender.com";
  const DASHBOARD_URL = "/api/v1/users/my/dashboard";
  const localBaseUrl = "http://192.168.0.102:7070";

  const followersData = dashboardData?.followers?.data?.map(
    (follower, index) => {
      return (
        <div key={index} className={classes["overview__followers"]}>
          <div className={classes["overview__followers-details"]}>
            <div className={classes["overview__name-school_container"]}>
              <div className={classes["overview__name-school_container--sub"]}>
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
                      {follower.fullname}
                    </p>
                    <p className={classes["overview__followers-school"]}>
                      {follower?.campus?.charAt(0).toUpperCase() +
                        follower?.campus?.slice(1)}
                    </p>
                  </div>
                </div>
              </div>
              <p className={classes["overview__followed"]}>Followed you</p>
            </div>
          </div>
        </div>
      );
    }
  );

  const viewsData = dashboardData?.views?.data.map((view, index) => {
    return (
      <div className={classes["overview__followers-details"]}>
        <div className={classes["overview__name-school_container"]}>
          <div className={classes["overview__name-school_container--sub"]}>
            <div className={classes["overview__name-school_image"]}>
              <img
                className={classes["overview__followers-picture"]}
                src={followersPictureOne}
                alt="Followers-image"
              />
              <div
                className={classes["overview__followers-name_school--wrapper"]}
              >
                <p className={classes["overview__followers-name"]}>
                  {view.fullname}
                </p>
                <p className={classes["overview__followers-school"]}>
                  {view.campus.charAt(0).toUpperCase() +
                    view.campus.slice(1)}
                </p>
              </div>
            </div>
          </div>
          <p className={classes["overview__followed"]}>Followed you</p>
        </div>
      </div>
    );
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = () => {
    axios
      .get(`${localBaseUrl}${DASHBOARD_URL}`, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((response) => {
        console.log(response);
        setDashboardData(response.data?.data);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(
          error.response ? error.response?.data?.message : error?.message
        );
      });
  };

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
              {/* <GridFirstRow />
              <GridFirstRow />
              <GridFirstRow /> */}
              {/* <div className={classes["overview__container-top"]}> */}
              <div className={classes["sub__overview-container-sub"]}>
                <h3 className={classes["overview__header"]}>Total Followers</h3>
                <p className={classes["overview__score"]}>
                  {dashboardData?.followers?.totalFollowers}
                </p>
                <div className={classes["main__arrow-container"]}>
                  <div
                    className={
                      dashboardData?.followers?.increased
                        ? `${classes["arrow__container-increased"]}`
                        : `${classes["arrow__container-decreased"]}`
                    }
                  >
                    <img
                      className={classes.arrow}
                      src={
                        dashboardData?.followers?.increased
                          ? arrowUp
                          : arrowDown
                      }
                      alt="Arrow-up"
                    />
                  </div>
                  <p
                    className={
                      dashboardData?.followers?.increased
                        ? `${classes["percentage__increased"]}`
                        : `${classes["percentage__decreased"]}`
                    }
                  >
                    + {dashboardData?.followers?.percentage}{" "}
                    <span className={classes["percentage__span"]}>
                      than last login
                    </span>
                  </p>
                </div>
              </div>

              <div className={classes["sub__overview-container-sub"]}>
                <h3 className={classes["overview__header"]}>Total View</h3>
                <p className={classes["overview__score"]}>
                  {dashboardData?.views?.totalViews}
                </p>
                <div className={classes["main__arrow-container"]}>
                  <div
                    className={
                      dashboardData?.views?.increased
                        ? `${classes["arrow__container-increased"]}`
                        : `${classes["arrow__container-decreased"]}`
                    }
                  >
                    <img
                      className={classes.arrow}
                      src={
                        dashboardData?.views?.increased ? arrowUp : arrowDown
                      }
                      alt="Arrow-up"
                    />
                  </div>
                  <p
                    className={
                      dashboardData?.views?.increased
                        ? `${classes["percentage__increased"]}`
                        : `${classes["percentage__decreased"]}`
                    }
                  >
                    + {dashboardData?.views?.percentage}{" "}
                    <span className={classes["percentage__span"]}>
                      than last login
                    </span>
                  </p>
                </div>
              </div>

              <div className={classes["sub__overview-container-sub"]}>
                <h3 className={classes["overview__header"]}>Total Comments</h3>
                <p className={classes["overview__score"]}>
                  {dashboardData?.comments?.totalComments}
                </p>
                <div className={classes["main__arrow-container"]}>
                  <div
                    className={
                      dashboardData?.comments?.increased
                        ? `${classes["arrow__container-increased"]}`
                        : `${classes["arrow__container-decreased"]}`
                    }
                  >
                    <img
                      className={classes.arrow}
                      src={
                        dashboardData?.comments?.increased ? arrowUp : arrowDown
                      }
                      alt="Arrow-down"
                    />
                  </div>
                  <p
                    className={
                      dashboardData?.comments?.increased
                        ? `${classes["percentage__increased"]}`
                        : `${classes["percentage__decreased"]}`
                    }
                  >
                    + {dashboardData?.comments?.percentage}{" "}
                    <span className={classes["percentage__span"]}>
                      than last login
                    </span>
                  </p>
                </div>
              </div>

              <div className={classes["overview__video-section"]}>
                <HeaderThree text="Latest Video You Upload" />

                {dashboardData?.video ? (
                  <>
                    <div>
                      <img
                        src={sideView}
                        alt="Image-of-video"
                        className={classes["overview__video-image"]}
                      />
                    </div>
                    <div className={classes["overview__video-title_section"]}>
                      <div>
                        <h4 className={classes["overview__video-title"]}>
                          {dashboardData?.video?.topic}
                        </h4>
                        <div className={classes["school__logo-div"]}>
                          <img
                            className={classes["university__logo"]}
                            src={schoolLogo}
                            alt="University-Logo"
                          />
                          <p>{dashboardData?.video?.course}</p>
                        </div>
                      </div>
                      <div className={classes["overview__views-comments"]}>
                        <p className={classes["overview__video-views"]}>
                          Views ({dashboardData?.video?.view_count})
                        </p>
                        <p className={classes["overview__video-comment"]}>
                          Comments ({dashboardData?.video?.comment_count})
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <p className={classes[""]}>
                      Do you want to view metrics on your recent video? Upload
                      and publish a video to begin
                    </p>
                    <div className={classes["button__empty"]}>
                      <Button color="primary" size="smlg" type="submit">
                        Upload Now
                      </Button>
                    </div>
                  </>
                )}
              </div>

              <div className={classes["overview__followers-container"]}>
                {dashboardData?.followers.data.length === 0 ? (
                  <div className={classes["no__active-follower"]}>
                    <p>No Active Follower</p>
                  </div>
                ) : (
                  <>
                    <div className={classes["overview__header-padding"]}>
                      <HeaderThree text="Followers" />
                    </div>

                    {followersData}
                  </>
                )}

                <Button
                  className={classes["button__follower"]}
                  color="primary"
                  size="bigsm"
                  type="submit"
                >
                  View All
                </Button>
              </div>

              <div
                className={`${classes["overview__views-container"]} ${classes["grid__row-span_2"]} ${classes["grid__row-span"]}`}
              >
                <HeaderThree text="Views" />
                {dashboardData?.views.data.length === 0 ? (
                  <div>
                    <p>No Views at the moment </p>
                  </div>
                ) : (
                  viewsData
                )}
                {/*<div>
                  <p>No Views at the moment </p>
                </div> */}

                {/* <div className={classes["overview__name-school_container"]}>
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
                </div>*/}
              </div>

              <div className={classes["grid__col-span_2"]}>
                <div className={classes["overview__comments-container"]}>
                  {/* <div className={classes["overview__comments-header_view"]}>
                    <h3 className={classes["overview__header"]}>Comments</h3>
                    <Link to="">View all</Link>
                  </div> */}

                  <div className={classes["overview__comments"]}>
                    {/* <div className={classes["no__views"]}>
                      <p>No Comments Found</p>
                    </div> */}

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
          {/* </div> */}
        </main>
      </div>
    </>
  );
};

export default Home;

{
  /* <div className={classes["overview__header-padding"]}>
                  <HeaderThree text="Followers" />
                </div>

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
                              classes[
                                "overview__followers-name_school--wrapper"
                              ]
                            }
                          >
                            <p className={classes["overview__followers-name"]}>
                              Carlos Martin
                            </p>
                            <p
                              className={classes["overview__followers-school"]}
                            >
                              University of calabar
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className={classes["overview__followed"]}>
                        Followed you
                      </p>
                    </div>
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
                </div> */
}
