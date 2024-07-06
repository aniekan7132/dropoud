import React, { useState } from "react";
import SideNavbar from "../../components/SideNavbar";
import TopSearchBar from "../../components/TopSearchBar";
import classes from "./notification.module.css";
import HeaderTwo from "../../components/HeaderTwo";
import userImage from "../../assets/followers-picture2.svg";
import Delete from "../../assets/delete.svg";
import Success from "../../assets/transus.svg";
import Fail from "../../assets/transfail.svg";
import Profile from "../../assets/profile.svg";

import DeleteModal from "../../components/DeleteModal";



const Notification = () => {

    const [deleteNotice, setDeleteNotice] = useState(false);

    return (

        <>

            {deleteNotice && <DeleteModal />}

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
                                            <p>Course Viewed</p>
                                            <p className={classes["notice__description"]}>Someone Just viewed  your course </p>
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

                                        <img src={Success} alt="userimage" />
                                        <div className={classes["test"]}>
                                            <p className={classes["success"]}>Withdrawal Successful</p>
                                            <p className={classes["notice__description"]}  >Your transaction has been processed successfully </p>
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

                                        <img src={Fail} alt="userimage" />
                                        <div className={classes["test"]}>
                                            <p className={classes["error"]}>Error Processing Your Withdrawal</p>
                                            <p className={classes["notice__description"]}>Please cross check your bank details and fix the issues </p>
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

                                        <img src={Profile} alt="userimage" />
                                        <div className={classes["test"]}>
                                            <p>Congratulations! You Have Complete Your  Profile</p>
                                            <p className={classes["notice__description"]}>  We are so happy to  see your complete your profile </p>
                                        </div>
                                    </div>
                                    <p className={classes["date"]} >
                                        16 Apr 2024
                                    </p>

                                </div>

                                <div className={classes["delete"]} onClick={() => setDeleteNotice(false)}>
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