import React from "react";
import SideNavbar from "../../components/SideNavbar";
import TopSearchBar from "../../components/TopSearchBar";
import classes from "./notification.module.css";
import HeaderTwo from "../../components/HeaderTwo";
import userImage from "../../assets/followers-picture2.svg";
import Delete from "../../assets/delete.svg";



const Notification = () => {
    return (

        <>
            <div className={classes.notice}>
                <SideNavbar />
                <main className={classes["notice__pane"]}>
                    <TopSearchBar />
                    <div className={classes["notice__container"]}>
                        <HeaderTwo text="Notification" />
                        <div className={classes["notice__card"]}>
                            {/* <h1>Hello world</h1> */}
                            <div className={classes["notification"]}>
                                <div className={classes["notice__body"]}>
                                    <div className={classes["details"]}>

                                        <img src={userImage} alt="userimage" />
                                        <div className={classes["test"]}>
                                            <p>New Comment</p>
                                            <p className={classes["notice__description"]}>This is amazing thank you</p>
                                        </div>
                                    </div>
                                    <button className={classes["new"]}>
                                        new
                                    </button>

                                </div>

                                <div className={classes["delete"]}>
                                    <img src={Delete} alt="" />
                                </div>
                            </div>

                            <div className={classes["notification"]}>
                                <div className={classes["notice__body"]}>
                                    <div className={classes["details"]}>

                                        <img src={userImage} alt="userimage" />
                                        <div className={classes["test"]}>
                                            <p>Course Purchased</p>
                                            <p className={classes["notice__description"]}>Lilith Just purchased your course </p>
                                        </div>
                                    </div>
                                    <p className={classes["date"]} >
                                        16 Apr 2024
                                    </p>

                                </div>

                                <div className={classes["delete"]}>
                                    <img src={Delete} alt="" />
                                </div>
                            </div>



                            <div className={classes["notification"]}>
                                <div className={classes["notice__body"]}>
                                    <div className={classes["details"]}>

                                        <img src={userImage} alt="userimage" />
                                        <div className={classes["test"]}>
                                            <p>New Follower</p>
                                            <p className={classes["notice__description"]}>John Doe Followed</p>
                                        </div>
                                    </div>
                                    <button className={classes["new"]}>
                                        new
                                    </button>

                                </div>

                                <div className={classes["delete"]}>
                                    <img src={Delete} alt="" />
                                </div>
                            </div>









                            <div className={classes["notification"]}>
                                <div className={classes["notice__body"]}>
                                    <div className={classes["details"]}>

                                        <img src={userImage} alt="userimage" />
                                        <div>
                                            <p>Course Purchased</p>
                                            <p className={classes["notice__description"]}>Lilith Just purchased your course </p>
                                        </div>
                                    </div>
                                    <button className={classes["new"]}>
                                        new
                                    </button>

                                </div>

                                <div className={classes["delete"]}>
                                    <img src={Delete} alt="" />
                                </div>
                            </div>






                        </div>
                    </div>
                </main>
            </div>



        </>
    );
};

export default Notification;