import React, { useEffect, useState } from "react";
import SideNavbar from "../../components/SideNavbar";
import TopSearchBar from "../../components/TopSearchBar";
import classes from "./Notification.module.css";
import HeaderTwo from "../../components/HeaderTwo";
import Delete from "../../assets/delete.svg";
import { Notification } from "../../types";
import axios from "../../axios/axios";
import { reload } from "../settings/Settings";

import DeleteModal from "../../components/DeleteModal";

const Notifications = () => {
  const [deleteNotice, setDeleteNotice] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [activeNotId, setActiveNotId] = useState<number | null>(null);

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleRadioChange = () => {
    setIsChecked((prevState) => !prevState);
  };

  useEffect(() => {
    notificationHandler();
  }, []);

  function notificationHandler() {
    axios
      .get(`/api/v1/notifications/mine`, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
        setNotifications(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const deleteNotification = (notificationId: number) => {
    if (isChecked) {
      axios
        .delete(`/api/v1/notifications/${notificationId}`, {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        })
        .then((response) => {
          console.log(response);
          setLoading(true);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          reload();
          setLoading(false);
          setDeleteNotice(false);
        });
    }
  };

  return (
    <>
      {deleteNotice && (
        <DeleteModal
          isChecked={isChecked}
          handleRadioChange={handleRadioChange}
          notificationId={activeNotId}
          onCancel={() => {
            setDeleteNotice(false);
            setIsChecked(false);
          }}
          deleteText="Permanently delete this notification?"
          deleteHandler={() => deleteNotification(activeNotId!)}
        />
      )}

      <div className={classes.notice}>
        <SideNavbar />
        <main className={classes["notice__pane"]}>
          <TopSearchBar />
          <div className={classes["notice__container"]}>
            <HeaderTwo text="Notification" />
            <div className={classes["notice__card"]}>
              {notifications.length === 0 && (
                <div className={classes["no__followers-yet"]}>
                  <p>You Don’t Have Any Notification At The Moment</p>
                </div>
              )}
              {notifications?.map((item, i) => (
                <div key={i} className={classes["notification"]}>
                  <div className={classes["notice__body"]}>
                    <div className={classes["details"]}>
                      <img src={item?.image} alt="userimage" />
                      <div className={classes["test"]}>
                        <p>{item?.title}</p>
                        <p className={classes["notice__description"]}>
                          {item?.message}
                        </p>
                      </div>
                    </div>
                    {item?.is_read ? (
                      <button className={classes["new"]}>new</button>
                    ) : (
                      <p className={classes["date"]}>
                        {item?.created_at?.substring(5, 7)}
                        {"-"}
                        {item?.created_at?.substring(8, 10)}
                        {"-"}
                        {item?.created_at?.substring(0, 4)}
                      </p>
                    )}
                    <div
                      className={classes["mobile__delete-dots"]}
                      onClick={() => {
                        setDeleteNotice(true);
                        setActiveNotId(item.id);
                      }}
                    >
                      <p>...</p>
                    </div>
                  </div>

                  <div
                    className={classes["delete"]}
                    onClick={() => {
                      setDeleteNotice(true);
                      setActiveNotId(item.id);
                    }}
                  >
                    {loading ? (
                      "Deleting"
                    ) : (
                      <img src={Delete} alt="Delete-button" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Notifications;
