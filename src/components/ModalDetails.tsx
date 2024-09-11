import React, { useEffect, useRef, useState } from "react";
import HeaderFive from "./HeaderFive";
import cancelIcon from "../assets/cancel.svg";
import classes from "./ModalDetails.module.css";
import Input from "./Input";
// import thumbnailPic from "../assets/thumbnail.svg";
import copyIcon from "../assets/copy.svg";
import sideView from "../assets/video-box.svg";
import Button from "./ButtonComponent";
import VideoThumbnails from "./VideoThumbnails";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import axios from "../axios/axios";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import { AxiosProgressEvent } from "axios";

interface DefaultUploadState {
  topic: string;
  description: string;
  course: string;
}

const initialValue = {
  topic: "",
  description: "",
  course: "",
};

interface Props {
  closeModal: () => void;
  file: File | null;
  // lid: string;
}

const lectureid = uuidv4();

const ModalDetails = ({ closeModal, file }: Props) => {
  const vidRef = useRef<HTMLVideoElement>(null);

  // Initial states for input fields
  const [topic, setTitle] = useState<DefaultUploadState>(initialValue);
  const [description, setDescription] =
    useState<DefaultUploadState>(initialValue);
  const [course, setCourseCode] = useState<DefaultUploadState>(initialValue);
  const [thumbnail, setthumbnail] = useState(sideView);

  // Initial states for errors and playing video
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [codeError, setCodeError] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);

  // Initial states for prgress, showing progress & copying text
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const user = useSelector(selectUser);
  const lecture_id = `${user.campus}${lectureid}`;
  const navigate = useNavigate();

  // converting blob thumbnail file(image) to Url
  useEffect(() => {
    //@ts-ignore
    const fileUrl = URL.createObjectURL(file);
    setthumbnail(fileUrl);

    return () => {
      if (fileUrl) {
        URL.revokeObjectURL(fileUrl);
      }
    };
  }, [file]);

  // Update localStorage whenever any state changes
  useEffect(() => {
    localStorage.setItem("topic", topic.topic);
    localStorage.setItem("code", course.course);
    localStorage.setItem("description", description.description);
  }, [top, description, course]);

  useEffect(() => {
    localStorage.getItem("topic");
    localStorage.getItem("code");
    localStorage.getItem("description");
  }, [])

  // Functions that plays video on click
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      //@ts-ignore
      vidRef.current.pause();
    } else {
      //@ts-ignore
      vidRef.current.play();
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle({ ...topic, [e.target.id]: e.target.value });
    setTitleError(false);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription({ ...description, [e.target.id]: e.target.value });
    setDescriptionError(false);
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCourseCode({ ...course, [e.target.id]: e.target.value });
    setCodeError(false);
  };

  // Function that submits validates & submits form data
  const handleVideoUpload = (e: React.FormEvent) => {
    e.preventDefault();

    if (topic.topic.trim() === "") {
      setTitleError(true);
    } else if (description.description.trim() === "") {
      setDescriptionError(true);
    } else if (course.course.trim() === "") {
      setCodeError(true);
    } else {
      setTitleError(false);
      setDescriptionError(false);
      setCodeError(false);
    }

    // {{baseurl}}/api/v1/lectures/upload/{course}/{lecture_id}/{topic}/{description}
    const formData = new FormData();
    formData.append("file", file!);

    axios
      .post(
        `/api/v1/lectures/upload/${course.course}/${lecture_id}/${topic.topic}/${description.description}`,
        formData,
        {
          // Axios property that listens for progress of uploded file
          onUploadProgress: (progressEvent: AxiosProgressEvent) => {
            if (progressEvent.total) {
              const percentageComplete = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              setProgress(percentageComplete);
            }
          },

          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log(response);
        setShowProgress(true);
        navigate("/upload-successful");
      })
      .catch((error) => {
        console.log(error);
        navigate("/upload-failed");
      });

    setShowProgress(true);
  };

  // Function that takes of copying text
  const handleCopyText = () => {
    navigator.clipboard
      .writeText(`https://dropoud.com/video/${user.campus}${lecture_id}`)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((error) => console.log("Failed to copy text", error));
  };

  const upload = document.getElementById("upload") as HTMLElement;

  return (
    <>
      {showProgress ? (
        <div
          className={classes["progress__bar-background"]}
          onClick={() => setShowProgress(false)}
        >
          <div className={classes["progress__bar-container"]}>
            <div className={classes["progress__bar-div"]}>
              <p>Uploading......</p>
              <div className={classes["progress__bar-uploading"]}>
                <div
                  className={classes["progress__bar-moving"]}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p>{progress}%/100%</p>
            </div>
          </div>
        </div>
      ) : (
        <div className={classes["upload__videos-background"]}>
          <div className={classes["upload__videos-container"]}>
            <div className={classes["upload__heading"]}>
              <HeaderFive text="Details" />
              <img
                src={cancelIcon}
                onClick={closeModal}
                className={classes["cancel__icon"]}
                alt="Cancel"
              />
            </div>

            <div className={classes["title__description-div"]}>
              <div className={classes["details__container"]}>
                <div
                  className={
                    titleError
                      ? `${classes["title__error-border"]}`
                      : `${classes["title__div"]}`
                  }
                >
                  <label htmlFor="title" className={classes.label}>
                    Title (required)
                  </label>
                  <Input
                    id="topic"
                    type="text"
                    className={classes["title__input"]}
                    value={topic.topic}
                    onChange={handleTitleChange}
                  />
                </div>
                <div
                  className={
                    descriptionError
                      ? `${classes["description__error-border"]}`
                      : `${classes["description__div"]}`
                  }
                >
                  <label htmlFor="description" className={classes.label}>
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    cols={50}
                    className={classes["text__area-input"]}
                    value={description.description}
                    onChange={handleDescriptionChange}
                  />
                </div>
              </div>
              <div className={classes["videobox__div"]}>
                <button
                  className={classes["video__play-button"]}
                  onClick={handleVideo}
                >
                  {playVideo ? (
                    <BsPauseFill color="#fff" fontSize={30} />
                  ) : (
                    <BsFillPlayFill color="#fff" fontSize={30} />
                  )}
                </button>
                <video
                  ref={vidRef}
                  typeof="video/mp4"
                  controls={true}
                  controlsList="nodownload"
                  muted={false}
                >
                  <source src={thumbnail} type="video/webm" />
                  <source src={thumbnail} type="video/mp4" />
                </video>
                <div className={classes["links__container"]}>
                  <p>Video link</p>
                  <div className={classes["link__div"]}>
                    <p>
                      https://dropoud.com/video/{user.campus}
                      {lecture_id}
                    </p>
                    {isCopied ? (
                      <p className={classes.copied}>
                        <span>✔</span> <span>Copied!</span>
                      </p>
                    ) : (
                      <img
                        src={copyIcon}
                        alt="Copy-icon"
                        onClick={handleCopyText}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className={classes["thumbnail__div"]}>
              <div className={classes["course__code-div"]}>
                <label htmlFor="courseCode">Course code</label>
                <Input
                  id="course"
                  type="text"
                  placeholder="Course-code"
                  value={course.course}
                  className={
                    codeError
                      ? `${classes["code__error-border"]}`
                      : `${classes["course__code-input"]}`
                  }
                  onChange={handleCodeChange}
                />
              </div>

              <div className={classes["select__thumbnail-div"]}>
                <p>Select Thumbnail</p>
                <VideoThumbnails
                  videoRef={vidRef}
                  // setCurrentThumbnail={setCurrentThumbnail}
                  lid={lecture_id}
                />
              </div>
            </div>
            <div className={classes["upload__div"]}>
              <Button
                className={classes.upload}
                color="primary"
                size="bigsm"
                type="submit"
                onClick={handleVideoUpload}
                // disabled={isDisabled}
              >
                Upload
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalDetails;

// video::-webkit-media-controls-play-button {}

// video::-webkit-media-controls-volume-slider {}

// video::-webkit-media-controls-mute-button {}

// video::-webkit-media-controls-timeline {}

// video::-webkit-media-controls-current-time-display {}

// try {
//     // setUploadStatus("uploading");

//     const formData = new FormData();
//     // formData.append("file", selectedFile);

//     const response = await axios.post(
//       "http://localhost:8000/api/upload",
//       formData,
//       {
//         onUploadProgress: (progressEvent) => {
//           // const percentCompleted = Math.round(
//           //   (progressEvent.loaded * 100) / progressEvent.total
//           // );
//           // setProgress(percentCompleted);
//         },
//       }
//     );

//     // setUploadStatus("done");
//   } catch (error) {
//     // setUploadStatus("select");
//   }
// };
