import React from "react";
import classes from "./SettingsButton.module.css";

interface ButtonProps {
  buttonText?: string;
  src?: string;
  seconddSrc?: string;
  alt?: string;
  imgFile?: boolean;
  secondaryStyles?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

const SettingsButton = ({
  buttonText,
  src,
  seconddSrc,
  secondaryStyles,
  alt,
  imgFile,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`${classes.button} ${
        secondaryStyles
          ? `${classes["button__secondary"]}`
          : ""
      }`}
      onClick={onClick}
    >
      <img
        className={imgFile ? `${classes["add__file-img"]}` : ""}
        src={src}
        alt={alt}
      />
      {buttonText}
      <img src={seconddSrc} alt={alt} />
    </button>
  );
};

export default SettingsButton;
// ["button__secondary"]
