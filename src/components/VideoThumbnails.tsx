import React, { useRef, useState } from "react";
import classes from "./ModalDetails.module.css";

interface Props {
  file: File | null;
  videoRef: React.RefObject<HTMLVideoElement> | null;
}

const VideoThumbnails = ({ file, videoRef }: Props) => {
  // const videoRef = useRef<HTMLVideoElement>(null);
  const [thumbnails, setThumbnails] = useState<string[]>([]);

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
    };

    generateAllThumbnails();
  }
  };

  return (
    <div className={classes["select__thumbnail"]}>
      {thumbnails.map((thumbnail, index) => (
        <img
          key={index}
          src={thumbnail}
          alt={`Thumbnail ${index + 1}`}
          className={classes["select__thumbnail"]}
        />
      ))}
    </div>
  );
};

export default VideoThumbnails;

// {/* <div>
//   {/* <video
//         ref={videoRef}
//         src="your-video-url.mp4" // Replace with your video URL
//         controls
//         style={{ width: "100%" }}
//       /> */}
//   <div className={classes["select__thumbnail"]}>
//     {thumbnails.map((thumbnail, index) => (
//       <img
//         key={index}
//         src={thumbnail}
//         alt={`Thumbnail ${index + 1}`}
//         className={classes["select__thumbnail"]}
//       />
//     ))}
//   </div>
// </div>; */}
