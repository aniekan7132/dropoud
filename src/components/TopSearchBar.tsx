import React from "react";
import Input from "./Input";
import Button from "./ButtonComponent";
import classes from "./TopSearchBar.module.css";
import logo from "../assets/dropoud-logo.svg";
import search from "../assets/search.svg";
import upload from "../assets/upload.svg";
import verifiedIcon from "../assets/verified-icon.svg";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

interface Props{
  onUpload?:()=>void
}

const TopSearchBar = ({onUpload}:Props) => {
  const user = useSelector(selectUser);
  console.log(user);

  return (
    <>
      {" "}
      <>
        <div className={classes["top__navbar"]}>
          <div className={classes["search__bar"]}>
            <button className={classes["search__logo"]}>
              <img src={search} alt="Search-logo" />
            </button>
            <Input
              placeholder="Search..."
              className={classes["top__bar-input"]}
              // onClick={() => setInputModal(true)}
            />
          </div>

          <div className={classes["top__right-nav"]}>
            <div className={classes["top__right-nav_button"]}>
              <img
                className={classes["button__logo"]}
                src={upload}
                alt="Upload-logo"
              />
              <Button color="secondary" size="sm" type="submit" onClick={onUpload}>
                Upload
              </Button>
            </div>

            <div className={classes["profile__container"]}>
              <div className={classes["profile__picture-container"]}>
                <img
                  className={classes["profile__picture"]}
                  src={user?.image}
                  alt="Profile-picture"
                />
                <img
                  className={classes["verified-icon"]}
                  src={verifiedIcon}
                  alt="Verified-icon"
                />
              </div>
              <div className={classes["profile__title-container"]}>
                <p className={classes["profile__name"]}>
                  {user && user?.first_name + " " + user?.surname}
                </p>
                <p className={classes["profile__title"]}>{user?.institution}</p>
              </div>
            </div>
          </div>
        </div>








        <div className={classes["mobile_top__navbar"]}>
        <img className="logo" width={'100px'} src={logo} alt="page-logo" />
    
    <div className={classes["right"]}>

        <button className={classes["mobile_search__logo"]}>
              <img src={search} alt="Search-logo" />
            </button>
           <button  className={classes["mobile_button_upload"]}>

              <img
                className={classes["mobile_button__logo"]}
                src={upload}
                alt="Upload-logo"
                />
                </button>

                <div className={classes["mobile_profile__picture-container"]}>
                <img
                  className={classes["mobile_profile__picture"]}
                  src={user?.image}
                  alt="Profile-picture"
                />
                <img
                  className={classes["mobile_verified-icon"]}
                  src={verifiedIcon}
                  alt="Verified-icon"
                />
              </div>
              
                </div>
            
       
            
       
        </div>
      </>
    </>
  );
};

export default TopSearchBar;
