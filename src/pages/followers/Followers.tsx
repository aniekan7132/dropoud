import React, { useEffect, useState } from "react";
import SideNavbar from "../../components/SideNavbar";
import TopSearchBar from "../../components/TopSearchBar";
import HeaderTwo from "../../components/HeaderTwo";
import Input from "../../components/Input";
import axios from "../../axios/axios";
import classes from "./Followers.module.css";
// import followersPictureOne from "../../assets/followers-picture1.svg";
import HeaderThree from "../../components/HeaderThree";
import search from "../../assets/search.svg";
import { Following } from "../../types";

const Followers = () => {
  const [followers, setFollowers] = useState<Following[]>([]);
  const [searchedFollower, setSearchFollower] = useState<string>("");

  const filteredFollower = followers?.filter((name) =>
    name?.full_name?.toLowerCase().includes(searchedFollower?.toLowerCase())
  );

  useEffect(() => {
    followersHandler();
  }, []);

  function followersHandler() {
    axios
      .get(`/api/v1/followers/mine`, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
        setFollowers(response?.data?.data);
      })
      .catch((error) => {
        // setCampusError(true);
        console.log(error);
        // setErrorMessage(
        //   error?.response ? error.response.data.message : "Network error"
        // );
      });
  }

  return (
    <div className={classes.notice}>
      <SideNavbar />
      <main className={classes["notice__pane"]}>
        <TopSearchBar />
        <div className={classes["notice__container"]}>
          <HeaderTwo text="Your followers" />
          <div className={classes["notice__card"]}>
            <div className={classes["chat__bar"]}>
              <button className={classes["chatbar__button-logo"]}>
                <img src={search} alt="Search-icon" />
              </button>
              <Input
                placeholder="Search"
                className={classes["chatbar__input"]}
                value={searchedFollower}
                onChange={(e) => setSearchFollower(e.target.value)}
              />
            </div>
            <div className={classes["followers__details"]}>
              {followers.length === 0 && (
                <div className={classes["no__followers-yet"]}>
                  <HeaderThree text="Looking for followers?" />
                  <p>
                    When someone follows this account, they’ll show up here.
                  </p>
                </div>
              )}
              {searchedFollower && filteredFollower?.length === 0 ? (
                <p>No results found</p>
              ) : (
                (searchedFollower ? filteredFollower : followers).map(
                  (follower, i) => (
                    <div
                      key={i}
                      className={classes["overview__name-school_container"]}
                    >
                      <div
                        className={
                          classes["overview__name-school_container--sub"]
                        }
                      >
                        <div className={classes["overview__name-school_image"]}>
                          <img
                            className={classes["overview__followers-picture"]}
                            src={follower?.image}
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
                              {follower?.full_name}
                            </p>
                            <p
                              className={classes["overview__followers-school"]}
                            >
                              {follower?.campus?.charAt(0).toUpperCase() +
                                follower?.campus?.slice(1)}
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className={classes["overview__followed"]}>Following</p>
                    </div>
                  )
                )
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Followers;
