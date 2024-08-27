import React, { useState } from "react";
import SideNavbar from "../../components/SideNavbar";
import TopSearchBar from "../../components/TopSearchBar";
import classes from "./Content.module.css";
import HeaderTwo from "../../components/HeaderTwo";
import HeaderFour from "../../components/HeaderFour";
import HeaderFive from "../../components/HeaderFive";
import Button from "../../components/ButtonComponent";
import UploadVideos from "../../components/UploadVideos";
import ModalDetails from "../../components/ModalDetails";
import ProgressBar from "../../components/SucessUploadScreen";
import Profile from "../../components/Profile";
import videoContentBox from "../../assets/video-box-content.svg";
import HeaderSix from "../../components/HeaderSix";
import HeaderSeven from "../../components/HeaderSeven";
import schoolLogo from "../../assets/school-logo.svg";
import DeleteModal from "../../components/DeleteModal";
import WithdrawalSuccessful from "../../components/WithdrawalSuccessful";
import UploadConatiner from "../../components/UploadConatiner";

interface Props {
  onClick: () => {};
}
const Content = () => {
  const [uploadVideos, setUploadVideos] = useState(false);

  return (
    <>
      {uploadVideos && <UploadConatiner setUploadVideos={setUploadVideos} />}
      <div className={classes.home}>
        <SideNavbar />
        <main className={classes["main__pane"]}>
          <TopSearchBar />
          <div className={classes["main__container"]}>
            <HeaderTwo text="Content" />
            <div className={classes["content__container"]}>
              <div className={classes["content__heading-titles"]}>
                <HeaderFour text="Video" />
                <HeaderFour text="Date" />
                <HeaderFour text="Views" />
                <HeaderFour text="Comments" />
              </div>
              {
                <div className={classes["content__info"]}>
                  <HeaderFive text="No Content Available" />
                  <Button
                    color="primary"
                    size="smlg"
                    type="submit"
                    onClick={() => {
                      setUploadVideos(true);
                      console.log("clicked");
                    }}
                  >
                    Upload Now
                  </Button>
                </div>
              }
              {/* <div className={classes["existing__user-container"]}>
                <div className={classes["existing__user-content_div"]}>
                  <div>
                    <img
                      className={classes["existing__user-content_thumbnail"]}
                      src={videoContentBox}
                      alt="Video-content-box"
                    />
                  </div>
                  <div className={classes["existing__user-title"]}>
                    <HeaderSix text="Creases Patterns" />
                    <div>
                      <div className={classes["existing__user-logo"]}>
                        <img src={schoolLogo} alt="School-logo" />
                        <HeaderSeven text="PHY 111" />
                      </div>
                      <div>
                        <p className={classes["dots"]}>...</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={classes["existing__user-date_views-comment"]}>
                  <div className={classes["existing__user-date"]}>
                    {// <span>Apr</span>
                    <span>9,</span>
                    //<span>2024</span> }
                    <HeaderSeven text="Apr" />
                    <HeaderSeven text="9," />
                    <HeaderSeven text="2024" />
                  </div>

                  <div className={classes["existing__user-views"]}>
                    {// <p>44</p> }
                    <HeaderSeven text="44" />
                  </div>

                  <div className={classes["existing__user-comments"]}>
                    <HeaderSeven text="56" />
                  </div>
                </div>
              </div> */}

              {/* <div className={classes["existing__user-container"]}>
                <div className={classes["existing__user-content_div"]}>
                  <div>
                    <img
                      className={classes["existing__user-content_thumbnail"]}
                      src={videoContentBox}
                      alt="Video-content-box"
                    />
                  </div>
                  <div className={classes["existing__user-title"]}>
                    <HeaderSix text="Creases Patterns" />
                    <div className={classes["existing__user-logo"]}>
                      <img src={schoolLogo} alt="School-logo" />
                      <HeaderSeven text="PHY 111" />
                    </div>
                  </div>
                </div>

                <div className={classes["existing__user-date_views-comment"]}>
                  <div className={classes["existing__user-date"]}>
                    {/* <span>Apr</span>
                    <span>9,</span>
                    //<span>2024</span> }
                    <HeaderSeven text="Apr" />
                    <HeaderSeven text="9," />
                    <HeaderSeven text="2024" />
                  </div>

                  <div className={classes["existing__user-views"]}>
                    {// <p>44</p> }
                    <HeaderSeven text="44" />
                  </div>

                  <div className={classes["existing__user-comments"]}>
                    <HeaderSeven text="56" />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Content;
