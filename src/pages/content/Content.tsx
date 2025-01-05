import React, { useEffect } from "react";
import SideNavbar from "../../components/SideNavbar";
import TopSearchBar from "../../components/TopSearchBar";
import classes from "./Content.module.css";
import HeaderTwo from "../../components/HeaderTwo";
import HeaderFour from "../../components/HeaderFour";
import HeaderFive from "../../components/HeaderFive";
import Button from "../../components/ButtonComponent";
import axios from "../../axios/axios";
import ContentCard from "./ContentCard";
import { useDispatch, useSelector } from "react-redux";
import { selectLectures, setLectures } from "../../features/lectureSlice";
import { setUploadModal } from "../../features/generalSlice";

// interface Props {
//   onClick: () => {};
// }

const Content = () => {
  const lectures = useSelector(selectLectures);
  const dispatch = useDispatch();

  const loadLectures = () => {
    axios
      .get(`/api/v1/lectures/by/me`, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch(setLectures(response.data.data));
        console.log("my vids", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadLectures();
  }, []);

  return (
    <>
      {/* {uploadVideos && <UploadConatiner />} */}
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
              {lectures.length === 0 && (
                <div className={classes["content__info"]}>
                  <HeaderFive text="No Content Available" />
                  <Button
                    color="primary"
                    size="smlg"
                    type="submit"
                    onClick={() => {
                      dispatch(setUploadModal(true));
                    }}
                  >
                    Upload Now
                  </Button>
                </div>
              )}
              {lectures.map((lecture) => {
                return <ContentCard lecture={lecture} />;
              })}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Content;
