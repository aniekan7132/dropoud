import React, { useEffect, useRef, useState } from "react";
import { Lecture } from "../../types";
import classes from "./Content.module.css";
import modalClasses from "../../components/ModalDetails.module.css";
import HeaderSix from "../../components/HeaderSix";
import schoolLogo from "../../assets/school-logo.svg";
import edit from "../../assets/bitcoin-icons_edit-outline.svg";
import deleteIcon from "../../assets/fluent_delete-48-regular.svg";
import share from "../../assets/mynaui_share.svg";
import HeaderSeven from "../../components/HeaderSeven";
import Input from "../../components/Input";
import InfoCard from "./InfoCard";
import axios from "../../axios/axios";
import DeleteLecture from "../../components/DeleteLecture";

interface Props {
  lecture: Lecture;
}

function ContentCard({ lecture }: Props) {
  const [dropping, setdropping] = useState(false);
  const [editing, setediting] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lectureSelected, setLectureSelected] = useState<Lecture>(lecture);
  const [deleting, setDeleting] = useState(false);

  const divRef = useRef(null);

  const mobileDivRef = useRef(null);

  const onOutsideClick = () => {
    setdropping(false);
  };

  useEffect(() => {
    //@ts-ignore
    function handleClickOutside(event) {
        //@ts-ignore
      if (divRef.current && !divRef.current.contains(event.target)) {
        onOutsideClick();
      }
        //@ts-ignore
      if (mobileDivRef.current && !mobileDivRef.current.contains(event.target)) {
        onOutsideClick();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onOutsideClick]);




  const handleValueChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    // const { id, value } = e.target;

    setLectureSelected({ ...lectureSelected, [e.target.id]: e.target.value });
    setError(false);
  };

  const handleUpdateLecture = (newLecture: Lecture) => {
    setLoading(true);
    axios
      .put(`/api/v1/lectures`, newLecture, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
        setediting(false);
      })
      .catch((error) => {
        console.log(error);
        alert(error.response?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className={classes["existing__user-container"]}>
        <div className={classes["existing__user-content_div"]}>
          <div>
            <img
              className={classes["existing__user-content_thumbnail"]}
              src={lecture.thumbnail}
              alt="Video-content-box"
            />
          </div>

          {deleting && <DeleteLecture onCancel={() => setDeleting(false)} />}
          <div className={classes["existing__user-title"]}>
            <HeaderSix text={lecture.topic} />
            <div>
              <div className={classes["existing__user-logo"]}>
                <img src={schoolLogo} alt="School-logo" />
                <HeaderSeven text={lecture.course} />
              </div>
              <div
                className={classes["light_btn"]}
                onClick={() => setdropping(true)}
              >
                <p className={classes["dots"]}>...</p>
              </div>
            </div>
          </div>
        </div>

        <div className={classes["existing__user-date_views-comment"]}>
          <div className={classes["existing__user-date"]}>
            <HeaderSeven text={lecture.date.substring(0, 15)} />
            <HeaderSeven text={lecture.status} />
          </div>

          <div className={classes["existing__user-views"]}>
            <HeaderSeven text={`${lecture.view_count}`} />
          </div>

          <div className={classes["existing__user-comments"]}>
            <HeaderSeven text={`${lecture.comment_count}`} />
          </div>
        </div>
        
      </div>

      <div className={classes["mobile_existing__user-container"]}>
        <div className={classes["mobile_existing__user-content_div"]}>
          <div className={classes["mobile_existing__user-holder"]}>
            <img
              className={classes["mobile_existing__user-content_thumbnail"]}
              src={lecture.thumbnail}
              alt="Video-content-box"
            />
          </div>

          {deleting && <DeleteLecture onCancel={() => setDeleting(false)} />}
          <div className={classes["mobile_existing__user-title"]}>
            <HeaderSix text={lecture.topic} />
            <div>
              <div className={classes["mobile_existing__user-logo"]}>
                <img src={schoolLogo} alt="School-logo" />
                <HeaderSeven text={lecture.course} />
              </div>
              
            </div>

        <div className={classes["mobile_existing__user-date_views-comment"]}>
          <div className={classes["mobile_existing__user-date"]}>
            <HeaderSeven text={lecture.date.substring(0, 15)} />
           
          </div>

          
        </div>
        <div  className={classes["mobile_existing__user-count"]}>
        <div className={classes["mobile_existing__user-views"]}>
            <HeaderSeven text={`${lecture.view_count} Views`} />
          </div>

          <div className={classes["mobile_existing__user-comments"]}>
            <HeaderSeven text={`${lecture.comment_count} Comments`} />
          </div>
        </div>
        <div
                className={classes["mobile_light_btn"]}
                onClick={() => setdropping(true)}
              >
                <p className={classes["mobile_dots"]}>...</p>
              </div>
          </div>
        </div>

             </div>


{
  <>
   {dropping && (
    <div ref={divRef}>
    <div className={classes["drop_mneus"]} >
      
            <div
              className={classes["drop_mneus_item"]}
              onClick={() => {
                setLectureSelected(lecture);
                setediting(true);
              }}
            >
              <img src={edit} />
              <span>Edit content</span>
            </div>
            <div className={classes["drop_mneus_item"]}>
              <img src={share} />
              <span>Get shareable link</span>
            </div>
            <div
              className={classes["drop_mneus_item"]}
              onClick={() => setDeleting(true)}
            >
              <img src={deleteIcon} />
              <span>Delete forever</span>
            </div>
          </div>


          <div className={classes["mobile_drop_mneus"]}>
       
            <div
              className={classes["mobile_drop_mneus_item"]}
              onClick={() => {
                setLectureSelected(lecture);
                setediting(true);
              }}
            >
              <img src={edit} />
              <span>Edit content</span>
            </div>
            <div className={classes["mobile_drop_mneus_item"]}>
              <img src={share} />
              <span>Get shareable link</span>
            </div>
            <div
              className={classes["mobile_drop_mneus_item"]}
              onClick={() => setDeleting(true)}
            >
              <img src={deleteIcon} />
              <span>Delete forever</span>
            </div>
          </div>
          </div>
        )}

        {editing && (
          <>
         <div className={classes["drop_mneus"]}>
            <div className={modalClasses["details__container"]}>
              <div
                className={modalClasses["title__div"]}
                style={{
                  border: error ? `1px solid #FF5656` : "1px solid #b5b5b5",
                }}
              >
                <label htmlFor="topic" className={modalClasses.label}>
                  Title (required)
                </label>
                <Input
                  id="topic"
                  type="text"
                  className={modalClasses["title__input"]}
                  value={lectureSelected.topic}
                  onChange={handleValueChange}
                />
              </div>
              <div
                className={`${modalClasses["description__div"]}`}
                style={{
                  border: error ? `1px solid #FF5656` : "1px solid #b5b5b5",
                }}
              >
                <label htmlFor="description" className={modalClasses.label}>
                  Description
                </label>
                <textarea
                  id="description"
                  rows={4}
                  cols={50}
                  className={modalClasses["text__area-input"]}
                  value={lectureSelected.description}
                  onChange={handleValueChange}
                />
              </div>
              <div className={classes["info_pane"]}>
                <InfoCard
                  id={"downloadPrice"}
                  onChange={handleValueChange}
                  type="number"
                  info={lectureSelected?.downloadPrice}
                  inscription="Download Price"
                />

                <InfoCard
                  id={"price"}
                  onChange={handleValueChange}
                  type="number"
                  info={lectureSelected?.price}
                  inscription="Per View Price"
                />

                <InfoCard
                  id={"currency"}
                  onChange={handleValueChange}
                  type="text"
                  info={lectureSelected?.currency}
                  inscription="Currency"
                />
              </div>
              <div className={classes["buttons_pane"]}>
                <button onClick={() => setediting(false)}>Cancel</button>
                <button
                  disabled={loading}
                  onClick={() => handleUpdateLecture(lectureSelected)}
                >
                  {loading ? "Loading, please wait" : "Save"}
                </button>
              </div>
            </div>
          </div>

          <div className={classes["mobile_drop_mneus"]}>
            <div className={modalClasses["mobile_details__container"]}>
              <div
                className={modalClasses["mobile_title__div"]}
                style={{
                  border: error ? `1px solid #FF5656` : "1px solid #b5b5b5",
                }}
              >
                <label htmlFor="topic" className={modalClasses.label}>
                  Title (required)
                </label>
                <Input
                  id="topic"
                  type="text"
                  className={modalClasses["mobile_title__input"]}
                  value={lectureSelected.topic}
                  onChange={handleValueChange}
                />
              </div>
              <div
                className={`${modalClasses["mobile_description__div"]}`}
                style={{
                  border: error ? `1px solid #FF5656` : "1px solid #b5b5b5",
                }}
              >
                <label htmlFor="description" className={modalClasses.label}>
                  Description
                </label>
                <textarea
                  id="description"
                  rows={4}
                  cols={50}
                  className={modalClasses["mobile_text__area-input"]}
                  value={lectureSelected.description}
                  onChange={handleValueChange}
                />
              </div>
              <div className={classes["mobile_info_pane"]}>
                <InfoCard
                  id={"downloadPrice"}
                  onChange={handleValueChange}
                  type="number"
                  info={lectureSelected?.downloadPrice}
                  inscription="Download Price"
                />

                <InfoCard
                  id={"price"}
                  onChange={handleValueChange}
                  type="number"
                  info={lectureSelected?.price}
                  inscription="Per View Price"
                />

                <InfoCard
                  id={"currency"}
                  onChange={handleValueChange}
                  type="text"
                  info={lectureSelected?.currency}
                  inscription="Currency"
                />
              </div>
              <div className={classes["mobile_buttons_pane"]}>
                <button onClick={() => setediting(false)}>Cancel</button>
                <button
                  disabled={loading}
                  onClick={() => handleUpdateLecture(lectureSelected)}
                >
                  {loading ? "Loading, please wait" : "Save"}
                </button>
              </div>
            </div>
          </div>
          </>
        )}

  </>
}





    </>
  );
}

export default ContentCard;
