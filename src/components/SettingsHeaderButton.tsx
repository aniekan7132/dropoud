import React from "react";
//import classes from "./SettingsButton.module.css";

interface HeaderProps {
  buttonHeaderText: string;
  className: string;
  onClick: (e: React.MouseEvent) => void;
}

const SettingsHeaderButton = ({
  buttonHeaderText,
  className,
  onClick,
}: HeaderProps) => {
  return (
    <button className={className} onClick={onClick}>
      {buttonHeaderText}
    </button>
  );
};

export default SettingsHeaderButton;
