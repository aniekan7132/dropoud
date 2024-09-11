import React, { useEffect, useRef, useState } from "react";
import classes from "./ModalDetails.module.css";
import axios from "../axios/axios";

interface Props {
  // file: string | null;
  videoRef: React.RefObject<HTMLVideoElement> | null;
  // setCurrentThumbnail: (index: string) => void;
  lid: string;
}

const VideoThumbnails = ({ videoRef, lid }: Props) => {
  // const videoRef = useRef<HTMLVideoElement>(null);
  const [thumbnails, setThumbnails] = useState<string[]>([]);
  const [selectedThumbnail, setSelectedThumbnail] = useState<number | null>(
    null
  );

  useEffect(() => {
    setTimeout(() => {
      generateThumbnails();
    }, 3000);
  }, []);

  const handleThumbnailClick = (index: number) => {
    setSelectedThumbnail(index);
    handleDefaultThumbnailUpload(thumbnails[index]);
  };

  const generateThumbnails = () => {
    if (videoRef?.current) {
      const video = videoRef.current;
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const numThumbnails = 3;
      const newThumbnails: string[] = [];
      const videoDuration = video.duration;
      const interval = videoDuration / (numThumbnails + 1);

      const captureThumbnail = (time: number): Promise<string> => {
        return new Promise((resolve) => {
          video.currentTime = time;

          // Event listener to capture the frame after seeking
          const onSeeked = () => {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
            const dataUrl = canvas.toDataURL("image/jpeg");
            resolve(dataUrl);
          };

          video.addEventListener("seeked", onSeeked, { once: true });
        });
      };

      const generateAllThumbnails = async () => {
        for (let i = 1; i <= numThumbnails; i++) {
          const time = interval * i;
          const thumbnail = await captureThumbnail(time);
          newThumbnails.push(thumbnail);
        }
        setThumbnails(newThumbnails);
        handleDefaultThumbnailUpload(newThumbnails[0]);
      };

      generateAllThumbnails();
    }
  };

  const handleDefaultThumbnailUpload = (thumbnailUrl: string) => {
    if (thumbnailUrl) {
      fetch(thumbnailUrl)
        .then((response) => response.blob())
        .then((fetchedBlob) => {
          const formData = new FormData();
          formData.append("thumbnail", fetchedBlob);

          axios
            .post(`/api/v1/lectures/thumbnail/${lid}`, formData, {
              headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token"),
              },
            })
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className={classes["select__thumbnail"]}>
      {thumbnails.map((thumbnail, index) => (
        <img
          key={index}
          src={thumbnail}
          alt={`Thumbnail ${index + 1}`}
          className={`${classes["select__thumbnail-img"]} ${
            selectedThumbnail === index ? `${classes.selected}` : ""
          }`}
          onClick={() => handleThumbnailClick(index)}
        />
      ))}
    </div>
  );
};

export default VideoThumbnails;
