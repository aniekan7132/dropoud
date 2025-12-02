import React from "react";
import SettingsButton from "../../components/SettingsButton";
import classes from "./Settings.module.css";

interface TabProps {
  verificationText?: string;
  upgradeText?: string;
  tabButtonText?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const TabHeader = ({
  verificationText,
  upgradeText,
  tabButtonText,
  onClick
}: TabProps) => {
  return (
    <div className={classes["account__verification-cont"]}>
      <p className={classes["account__verification-text"]}>
        {verificationText}
      </p>
      <div className={classes["account__upgrade-cont"]}>
        <p className={classes["account__upgrade-text"]}>{upgradeText}</p>
        <div className="mobile__upgrade-btn_div">
          <SettingsButton buttonText={tabButtonText} onClick={onClick} secondaryStyles={true} />
        </div>
      </div>
    </div>
  );
};

export default TabHeader;

// Blue Check Verification For University Lecturers
// Kyc Verification
