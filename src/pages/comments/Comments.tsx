import React, { useState, useEffect } from "react";
import SideNavbar from "../../components/SideNavbar";
import TopSearchBar from "../../components/TopSearchBar";
import HeaderTwo from "../../components/HeaderTwo";
import Input from "../../components/Input";
// import Profile from "../../assets/profile.svg";
import followersPictureOne from "../../assets/followers-picture1.svg";
import classes from "./Comments.module.css";
import modalClasses from "../../components/ModalDetails.module.css";
import btnClasses from "../../components/DeleteModal.module.css";
import axios from "../../axios/axios";
import { Comments } from "../../types";

const UserComments = () => {
  const [comments, setComments] = useState<Comments[]>([]);
  const [inputReply, setInputReply] = useState("");
  const [activeReply, setActiveReply] = useState<number | null>(null);
  const [activeColor, setActiveColor] = useState<boolean>(false);

  const toggleReply = (index: number) => {
    if (activeReply === index) {
      return setActiveReply(null);
    }

    setActiveReply(index);
  };

  const handleReplyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputReply(e.target.value);
    setActiveColor(true);
  };

  useEffect(() => {
    commentsHandler();
  }, []);

  const commentUrl = "/api/v1/comments/mine";

  function commentsHandler() {
    axios
      .get(`${commentUrl}`, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
        setComments(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleReply = (commentId: number) => {
    axios
      .post(
        `/api/v1/comments/reply`,
        {
          comment_id: `${commentId}`,
          comment: inputReply,
        },
        {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log(response);
        axios
          .get(`${commentUrl}`, {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          })
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
        setInputReply("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={classes.comments}>
      <SideNavbar />
      <main className={classes["comments__pane"]}>
        <TopSearchBar />
        <div className={classes["comments__container"]}>
          <HeaderTwo text="Comment" />
          <div className={classes["comments__card"]}>
            {comments.map((comment, i) => {
              const convertDate = (currentDate: string): string => {
                const today = new Date();
                const apiDate = new Date(currentDate);

                const timeDiff = today.getTime() - Number(apiDate);
                const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

                if (daysDiff === 0) return "Today";
                if (daysDiff === 1) return "Yesterday";
                if (daysDiff < 7) return `${daysDiff} day(s) ago`;
                if (daysDiff < 30)
                  return `${Math.floor(daysDiff / 7)} week(s) ago`;
                if (daysDiff < 365)
                  return `${Math.floor(daysDiff / 30)} month(s) ago`;
                if (daysDiff >= 365)
                  return `${Math.floor(daysDiff / 365)} years(s) ago`;
                return `Invalid date format`;
              };

              return (
                <div key={i} className={classes["comments__details"]}>
                  <div className={classes["comments__details-sub_div"]}>
                    <div className={classes["comments_img-div"]}>
                      <img
                        className={classes["comments__reply-display_pic"]}
                        src={comment.image}
                        alt="display-shot"
                      />
                    </div>
                    <div className={classes["comments__profile-div"]}>
                      <div className={classes["comments__profile-sub_div"]}>
                        <div className={classes["comments__wrapper"]}>
                          <div className={classes["comments__wrapper-title"]}>
                            <p className={classes["comments__profile-text"]}>
                              {comment?.fullname}
                            </p>
                            <p className={classes["comments__profile-text-2"]}>
                              {comment?.campus}
                            </p>
                          </div>
                          <div
                            className={classes["comments__wrapper-comments"]}
                          >
                            <p
                              className={`${classes["comments__profile-text-2"]} ${classes["color__secondary"]}`}
                            >
                              {comment.comment}
                            </p>
                            <div>
                              <p
                                className={classes["comments__profile-text"]}
                                onClick={() => toggleReply(i)}
                              >
                                Reply{" "}
                                <span>{comment.replies.length} reply</span>
                              </p>
                              {activeReply === i && (
                                <div className={classes["reply__container"]}>
                                  <div
                                    className={`${modalClasses["title__div"]} ${classes["width__title-div"]}`}
                                  >
                                    <label
                                      htmlFor="topic"
                                      className={modalClasses.label}
                                    >
                                      Reply
                                    </label>
                                    <Input
                                      id="topic"
                                      type="text"
                                      className={modalClasses["title__input"]}
                                      value={inputReply}
                                      placeholder="Add a reply......"
                                      onChange={handleReplyChange}
                                    />
                                  </div>
                                  <div className={btnClasses["button__div"]}>
                                    <button
                                      className={`${btnClasses["button__cancel"]}`}
                                      onClick={() => setActiveReply(null)}
                                    >
                                      Cancel
                                    </button>
                                    <button
                                      className={
                                        activeColor
                                          ? `${btnClasses["button__cancel"]}`
                                          : `${btnClasses["button__cancel"]} ${btnClasses["button__save"]} `
                                      }
                                      onClick={() => {
                                        handleReply(comment.comment_id);
                                      }}
                                    >
                                      Reply
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div
                          className={`${classes["comments__profile-text-3"]} ${classes["width__for-date"]}`}
                        >
                          {convertDate(comment.date)}
                        </div>
                      </div>
                      {comment.replies.length !== 0
                        ? comment.replies.map((individualReply) => {
                            return (
                              <div className={classes["comments__reply-div"]}>
                                <div>
                                  <img
                                    className={
                                      classes["comments__reply-display_pic"]
                                    }
                                    src={followersPictureOne}
                                    alt="display-shot"
                                  />
                                </div>
                                <div
                                  className={
                                    classes["comments__wrapper_overall-2"]
                                  }
                                >
                                  <div
                                    className={classes["comments__wrapper-2"]}
                                  >
                                    <p
                                      className={
                                        classes["comments__reply-name"]
                                      }
                                    >
                                      {individualReply.user_name}
                                    </p>
                                    <p
                                      className={`${classes["comments__profile-text-2"]} ${classes["color__secondary"]}`}
                                    >
                                      {individualReply.comment}
                                    </p>
                                  </div>
                                  <p
                                    className={`${classes["comments__profile-text-3"]} ${classes["comments__reply-date"]}`}
                                  >
                                    {convertDate(individualReply.date)}
                                  </p>
                                </div>
                              </div>
                            );
                          })
                        : ""}
                    </div>
                  </div>
                  <div className={classes["comment__right-container"]}>
                    <div className={classes["comment__content-div"]}>
                      <img
                        className={classes["comment__content-img"]}
                        src={comment.lecture_thumbnail}
                        alt="content-display-shot"
                      />
                    </div>
                    <div className={classes["comment__content-details"]}>
                      <p
                        className={`${classes["comments__profile-text-2"]} ${classes["color__secondary"]}`}
                      >
                        {comment.topic}
                      </p>
                      <div className={classes["container__right-logo_div"]}>
                        <div>
                          <img
                            className={classes["comment__content-logo"]}
                            src={comment.campus_logo}
                            alt=""
                          />
                        </div>
                        <p
                          className={`${classes["comments__profile-text-2"]} ${classes["color__tertiary"]}`}
                        >
                          {comment.course}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div className={classes["comments__details"]}>
              <div className={classes["comments__details-sub_div"]}>
                <div className={classes["comments_img-div"]}>
                  <img
                    className={classes["comments__reply-display_pic"]}
                    src={followersPictureOne}
                    alt="display-shot"
                  />
                </div>
                <div className={classes["comments__profile-div"]}>
                  <div className={classes["comments__profile-sub_div"]}>
                    <div className={classes["comments__wrapper"]}>
                      <div className={classes["comments__wrapper-title"]}>
                        <p className={classes["comments__profile-text"]}>
                          Carlos Martins
                        </p>
                        <p className={classes["comments__profile-text-2"]}>
                          University of Calabar
                        </p>
                      </div>
                      <div className={classes["comments__wrapper-comments"]}>
                        <p
                          className={`${classes["comments__profile-text-2"]} ${classes["color__secondary"]}`}
                        >
                          This is amazing, thank you
                        </p>
                        <div>
                          <p
                            className={classes["comments__profile-text"]}
                            onClick={() => setReply(true)}
                          >
                            Reply <span>1 reply</span>
                          </p>
                          {reply && (
                            <div className={classes["reply__container"]}>
                              <div
                                style={{ width: "390px" }}
                                className={modalClasses["title__div"]}
                              >
                                <label
                                  htmlFor="topic"
                                  className={modalClasses.label}
                                >
                                  Reply
                                </label>
                                <Input
                                  id="topic"
                                  type="text"
                                  className={modalClasses["title__input"]}
                                  value=""
                                  placeholder="Add a reply......"
                                  // onChange={handleValueChange}
                                />
                              </div>
                              <div className={btnClasses["button__div"]}>
                                <button
                                  className={`${btnClasses["button__cancel"]}`}
                                  onClick={() => setReply(false)}
                                >
                                  Cancel
                                </button>
                                <button
                                  className={`${btnClasses["button__cancel"]} ${btnClasses["button__save"]}`}
                                >
                                  Reply
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className={classes["comments__profile-text-3"]}>
                      2days ago
                    </div>
                  </div>
                  <div className={classes["comments__reply-div"]}>
                    <div>
                      <img
                        className={classes["comments__reply-display_pic"]}
                        src={followersPictureOne}
                        alt="display-shot"
                      />
                    </div>
                    <div className={classes["comments__wrapper_overall-2"]}>
                      <div className={classes["comments__wrapper-2"]}>
                        <p className={classes["comments__reply-name"]}>
                          James Tomoooooooooojjjjj
                        </p>
                        <p
                          className={`${classes["comments__profile-text-2"]} ${classes["color__secondary"]}`}
                        >
                          You are welcome
                        </p>
                      </div>
                      <p
                        className={`${classes["comments__profile-text-3"]} ${classes["comments__reply-date"]}`}
                      >
                        3days ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes["comment__right-container"]}>
                <div className={classes["comment__content-div"]}>
                  <img
                    className={classes["comment__content-img"]}
                    src={videoBox}
                    alt="content-display-shot"
                  />
                </div>
                <div className={classes["comment__content-details"]}>
                  <p
                    className={`${classes["comments__profile-text-2"]} ${classes["color__secondary"]}`}
                  >
                    Creases Patterns
                  </p>
                  <div className={classes["container__right-logo_div"]}>
                    <div>
                      <img
                        className={classes["comment__content-logo"]}
                        src={schoolLogo}
                        alt=""
                      />
                    </div>
                    <p
                      className={`${classes["comments__profile-text-2"]} ${classes["color__tertiary"]}`}
                    >
                      PHY 111
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserComments;
