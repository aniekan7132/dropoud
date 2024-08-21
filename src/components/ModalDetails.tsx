import React, { useEffect, useRef, useState } from "react";
import HeaderFive from "./HeaderFive";
import cancelIcon from "../assets/cancel.svg";
import classes from "./ModalDetails.module.css";
import Input from "./Input";
import thumbnailPic from "../assets/thumbnail.svg";
import copyIcon from "../assets/copy.svg";
import sideView from "../assets/video-box.svg";
import Button from "./ButtonComponent";
import VideoThumbnails from "./VideoThumbnails";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

interface DefaultUploadState {
  title: string;
  description: string;
  courseCode: string;
}

const initialValue = {
  title: "",
  description: "",
  courseCode: "",
};

interface Props {
  closeModal: () => void;
  file: File | null;
}

const ModalDetails = ({ closeModal, file }: Props) => {
  const vidRef = useRef<HTMLVideoElement>(null);
  const [title, setTitle] = useState<DefaultUploadState>(initialValue);

  const [thumbnail, setthumbnail] = useState(sideView);

  const [description, setDescription] =
    useState<DefaultUploadState>(initialValue);

  const [code, setCode] = useState(initialValue);

  const [error, setError] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    //@ts-ignore
    const fileUrl = URL.createObjectURL(file);
    setthumbnail(fileUrl);
  }, [file]);

  console.log(file);
  console.log(title, description);

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
    // const { id, value } = e.target;
    setTitle({ ...title, [e.target.id]: e.target.value });
    setError(false);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription({ ...description, [e.target.id]: e.target.value });
    setError(false);
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode({ ...code, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (title.title === "") {
      setError(true);
    } else if (description.description === "") {
      setError(true);
    } else {
      setError(false);
    }
  };

  const upload = document.getElementById("upload") as HTMLElement;

  return (
    <>
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
                className={classes["title__div"]}
                style={{
                  border: error ? `1px solid #FF5656` : "1px solid #b5b5b5",
                }}
              >
                <label htmlFor="title" className={classes.label}>
                  Title (required)
                </label>
                <Input
                  id="title"
                  type="text"
                  className={classes["title__input"]}
                  value={title.title}
                  onChange={handleTitleChange}
                />
              </div>
              <div
                className={`${classes["description__div"]}`}
                style={{
                  border: error ? `1px solid #FF5656` : "1px solid #b5b5b5",
                }}
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
                  <p>https://youtu.be/Jv2E8c-G7r8</p>
                  <img src={copyIcon} alt="Copy-icon" />
                </div>
              </div>
            </div>
          </div>

          <div className={classes["thumbnail__div"]}>
            <div className={classes["course__code-div"]}>
              <label htmlFor="course-code">Course code</label>
              <Input
                id="course-code"
                placeholder="Course code"
                className={classes["course__code-input"]}
                value={code.courseCode}
                onChange={handleCodeChange}
              />
            </div>

            <div className={classes["select__thumbnail-div"]}>
              <p>Select Thumbnail</p>
              {/* <HeaderFive text="Select Thumbnail" /> */}
              {/* <div className={classes["select__thumbnail"]}>
                <img src={thumbnailPic} alt="Thumbnail" />
                <img src={thumbnailPic} alt="Thumbnail" />
                <img src={thumbnailPic} alt="Thumbnail" />
              </div> */}
              <VideoThumbnails file={file} videoRef={vidRef} />
            </div>
          </div>
          <div className={classes["upload__div"]}>
            <Button
              className={classes["upload"]}
              color="primary"
              size="bigsm"
              type="submit"
              onClick={handleSubmit}
            >
              Upload
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDetails;




// video::-webkit-media-controls-play-button {}

// video::-webkit-media-controls-volume-slider {}

// video::-webkit-media-controls-mute-button {}

// video::-webkit-media-controls-timeline {}

// video::-webkit-media-controls-current-time-display {}