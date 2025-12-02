import React, { useState } from "react";
import classes from "./Settings.module.css";
import SideNavbar from "../../components/SideNavbar";
import TopSearchBar from "../../components/TopSearchBar";
import HeaderTwo from "../../components/HeaderTwo";
import SettingsButton from "../../components/SettingsButton";
import SettingsHeaderButton from "../../components/SettingsHeaderButton";
import { settingTabTitle } from "../../components/SettingsTabTitle";
import addFile from "../../assets/plus.svg";
import deleteIcon from "../../assets/delete.svg";
import bankLogo from "../../assets/bank-logo.svg";
import TabHeader from "./TabHeader";
import { useNavigate } from "react-router-dom";
import BankName from "../../components/BankName";
import axios from "../../axios/axios";
import Modal from "../../components/Modal";
import SettingsModal from "./SettingsModal";
import Error from "../../components/Error";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import Universities from "./Universities";
import Departments from "./Departments";

interface UpdateUser {
  updateUser: {
    first_name: string;
    surname: string;
    password: string;
    phone: string;
  };
}

export const reload = () => window.location.reload();

const Settings = () => {
  const user = useSelector(selectUser);
  const user_email = user?.email;

  // state to manage tab
  const [activeSettingTab, setSettingTab] = useState(0);
  const [addBank, setAddBank] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteAccount, setDeleteAccount] = useState(false);
  const [profileImgError, setProfileImgError] = useState(false);

  const [campus, setCampus] = useState<string>(user?.campus);
  const [department, setDepartment] = useState<string>(user?.department);
  const [institution, setInstitution] = useState<string>(user?.institution);
  const [bio, setBio] = useState<string>(user?.bio);

  const [loading, setLoading] = useState<boolean>(false);

  const [openUni, setOpenUni] = useState<boolean>(false);
  const [openDepts, setOpenDepts] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openDeleteModal = () => setDeleteAccount(true);
  const closeDeleteModal = () => setDeleteAccount(false);

  const openUniversity = () => setOpenUni(true);
  const closeUniversity = () => setOpenUni(false);

  const openDepertments = () => setOpenDepts(true);
  const closeDepertments = () => setOpenDepts(false);

  const handleUniChange = (value: string) => {
    setCampus(value.split("-")[1]);
    setInstitution(value.split("-")[0]);
    closeUniversity();
  };

  const handleDepartment = (value: string) => {
    setDepartment(value);
    closeDepertments();
  };

  const handleBio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBio(e.target.value);
  };

  // const accountInformation = [
  //   {
  //     label: "Email Address",
  //     placeholder: "ErimEmmanuel@gmail.com",
  //     id: "email",
  //     defaultValue: user?.email,
  //     onClick: () => {},
  //   },
  //   {
  //     label: "First Name",
  //     placeholder: "Emmanuel",
  //     id: "first_name",
  //     defaultValue: user?.first_name,
  //     onClick: () => {},
  //   },
  //   {
  //     label: "Surname",
  //     placeholder: "Erim",
  //     id: "surname",
  //     defaultValue: user?.surname,
  //     onClick: () => {},
  //   },
  //   {
  //     label: "Phone Number",
  //     placeholder: "08165867011",
  //     id: "phone",
  //     defaultValue: user?.phone,
  //     onclick: () => {},
  //   },
  //   {
  //     label: "Campus/School",
  //     placeholder: "University Of Calabar",
  //     id: "campus",
  //     defaultValue: institution,
  //     onClick: () => openUniversity(),
  //   },
  //   {
  //     label: "Department",
  //     placeholder: "Science Education",
  //     id: "department",
  //     defaultValue: department,
  //     onClick: () => {
  //       openDepertments();
  //     },
  //   },
  // ];

  const [formData, setFormData] = useState<UpdateUser>({
    updateUser: {
      first_name: "",
      surname: "",
      password: "",
      phone: "",
    },
  });
  //@ts-ignore
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [bankError, setBankError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // export const reload = () => window.location.reload();

  const navigate = useNavigate();
  // Function that changes settings tab
  const handleSettingTab = (tab: number) => {
    setSettingTab(tab);
  };

  // Function to handle edit button click
  const handleEditPassword = () => {
    navigate("/newpassword");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImageFile(e.target.files[0]);
    }

    const formData = new FormData();
    if (e.target.files) {
      formData.append("avatar", e.target.files[0]);
    }

    axios
      .post(`/api/v1/users/picture/${user_email}`, formData, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then(() => {
        reload();
      })
      .catch((error) => {
        setErrorMessage(
          error?.response ? error?.response?.data?.message : "Network error"
        );
        setProfileImgError(true);
      });
  };

  const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    axios
      .put(
        `/api/v1/users`,
        { ...formData.updateUser, campus, department, bio, institution },
        {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log(response);
        // reload();
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(
          error?.response ? error?.response.data.message : "Network error"
        );
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setLoading(true);
    setOpenUni(true);
    setFormData({
      updateUser: {
        ...formData.updateUser,
        [e.target.id]: e.target.value,
      },
    });
  };

  const removeBank = () => {
    setLoading(true);
    axios
      .delete(`/api/v1/users/my-bank`, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then(() => {
        navigate("/upload-successful");
        reload();
      })
      .catch((error) => {
        setBankError(true);
        setErrorMessage(
          error?.response ? error.response.data.message : "Network error"
        );
      });
  };

  const deleteUserAccount = () => {
    axios
      .delete(`/api/v1/users/me`, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then(() => {
        navigate("/sign-up");
      })
      .catch((error) => {
        setBankError(true);
        setErrorMessage(
          error?.response ? error.response.data.message : "Network error"
        );
      });
  };

  return (
    <>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <SettingsModal
            displayEl={false}
            modalHeader="Bank Details"
            onClick={removeBank}
            loading={loading}
          ></SettingsModal>
        </Modal>
      )}
      {deleteAccount && (
        <Modal isOpen={deleteAccount} onClose={closeDeleteModal}>
          <SettingsModal
            displayEl={true}
            modalHeader="Delete Account"
            onClick={deleteUserAccount}
            cancel={closeDeleteModal}
            loading={false}
          />
        </Modal>
      )}
      {openUni && (
        <Modal isOpen={openUni} onClose={closeUniversity}>
          <Universities
            closeUniModal={closeUniversity}
            value={institution}
            onChange={handleUniChange}
          />
        </Modal>
      )}
      {openDepts && (
        <Modal isOpen={openDepts} onClose={closeDepertments}>
          <Departments
            closeDeptModal={closeDepertments}
            value={department}
            onChange={handleDepartment}
          />
        </Modal>
      )}
      <div className={classes["setting__page"]}>
        <SideNavbar />
        <main className={classes["mane__pane"]}>
          <TopSearchBar />
          {addBank ? (
            <BankName />
          ) : (
            <div className={classes["main__container"]}>
              <HeaderTwo text="Settings" />
              {bankError ||
                (profileImgError && <Error errorMsg={errorMessage} />)}

              <div className={classes["settings__container"]}>
                <div className={classes["settings__tab-cont"]}>
                  {settingTabTitle.map((tab, index) => (
                    <SettingsHeaderButton
                      key={index}
                      buttonHeaderText={tab.title}
                      className={
                        activeSettingTab === index
                          ? `${classes["settings__header-tab"]} ${classes.active}`
                          : `${classes["settings__header-tab"]}`
                      }
                      onClick={() => handleSettingTab(index)}
                    />
                  ))}
                </div>
                {activeSettingTab === 0 && (
                  <div className={classes["account__activetab-overall"]}>
                    <div className={classes["account__profile-cont"]}>
                      <img
                        src={user?.image}
                        alt="Profile-picture"
                        className={classes["change__image-pic"]}
                      />
                      <div className={classes["change__img-btn"]}>
                        <input
                          type="file"
                          style={{ display: "none" }}
                          id="imageFile"
                          onChange={handleFileChange}
                        />
                        <label htmlFor="imageFile">Change image</label>
                      </div>
                      <div className={classes["change__image-text"]}>
                        <p>JPEG Or PNG at least 256px maximum 600kb</p>
                      </div>
                    </div>
                    <div className={classes["account__verification-cont"]}>
                      <p className={classes["account__verification-text"]}>
                        Blue Check Verification For University Lecturers
                      </p>
                      <div className={classes["account__upgrade-cont"]}>
                        <p className={classes["account__upgrade-text"]}>
                          Kyc Verification
                        </p>
                        <div>
                          <div className={classes["desktop__view-veriy_btn"]}>
                            <SettingsButton
                              buttonText="Verify"
                              secondaryStyles={true}
                            />
                          </div>
                          <button className={classes["mobile__view-veriy_btn"]}>
                            Verify
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className={classes["account__info-cont"]}>
                      <p className={classes["account__verification-text"]}>
                        My Profile
                      </p>
                      <form>
                        <div className={classes["account__form-container"]}>
                          <div>
                            <label className={classes["account__form-label"]}>
                              Email Address
                            </label>
                            <input
                              type="text"
                              className={classes["account__form-input"]}
                              placeholder="ErimEmmanuel@gmail.com"
                              onChange={handleInputChange}
                              id="email"
                              value={user?.email}
                            />
                          </div>
                          <div>
                            <label className={classes["account__form-label"]}>
                              First Name
                            </label>
                            <input
                              type="text"
                              className={classes["account__form-input"]}
                              placeholder="Emmanuel"
                              // onChange={handleInputChange}
                              id="first_name"
                              value={user?.first_name}
                            />
                          </div>
                          <div>
                            <label className={classes["account__form-label"]}>
                              Surname
                            </label>
                            <input
                              type="text"
                              className={classes["account__form-input"]}
                              placeholder="Surname"
                              onChange={handleInputChange}
                              id="surname"
                              value={user?.surname}
                            />
                          </div>
                          <div>
                            <label className={classes["account__form-label"]}>
                              Phone Number
                            </label>
                            <input
                              type="number"
                              className={classes["account__form-input"]}
                              placeholder="08165867011"
                              onChange={handleInputChange}
                              id="phone"
                              value={user?.phone}
                            />
                          </div>
                          <div>
                            <label className={classes["account__form-label"]}>
                              Campus/School
                            </label>
                            <input
                              type="text"
                              className={classes["account__form-input"]}
                              placeholder="University of Calabar"
                              onChange={handleInputChange}
                              onClick={() => openUniversity()}
                              id="campus"
                              value={user?.institution}
                            />
                          </div>
                          <div>
                            <label className={classes["account__form-label"]}>
                              Department
                            </label>
                            <input
                              type="text"
                              className={classes["account__form-input"]}
                              placeholder="Science Education"
                              onChange={handleInputChange}
                              onClick={() => {
                                openDepertments();
                              }}
                              id="department"
                              value={user?.department}
                            />
                          </div>
                        </div>
                        <div className={classes["account__info-bio_section"]}>
                          <label htmlFor="bio">Your Bio:</label>
                          <textarea
                            className={classes["account__info-text_area"]}
                            id="bio"
                            placeholder="Tell students about yourself"
                            value={bio}
                            onChange={() => handleBio}
                          ></textarea>
                          <div className={classes["account__info-save_button"]}>
                            <SettingsButton
                              buttonText="Save"
                              secondaryStyles={true}
                              onClick={() => handleSave}
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
                {activeSettingTab === 1 && (
                  <div className={classes["payment__activetab-overall"]}>
                    <p className={classes["account__verification-text"]}>
                      Bank Account
                    </p>
                    <div className={classes["payment__activetab-buttons"]}>
                      <SettingsButton
                        imgFile={true}
                        src={addFile}
                        buttonText="Add Bank Account"
                        onClick={() => setAddBank(true)}
                      />
                      {user?.bank && (
                        <button className={classes["payment__delete-btn"]}>
                          <img
                            className={classes["payment__bank-logo"]}
                            src={bankLogo}
                          />
                          <p className={classes["payment__delete-text"]}>
                            <span className={classes["payment__delete-num"]}>
                              {user?.account_number}
                            </span>
                            <span className={classes["payment__delete-name"]}>
                              {user && user?.first_name + " " + user?.surname}
                            </span>
                          </p>
                          <img
                            className={classes["payment__delete-icon"]}
                            src={deleteIcon}
                            onClick={openModal}
                          />
                        </button>
                      )}
                    </div>
                  </div>
                )}
                {activeSettingTab === 2 && (
                  <TabHeader
                    verificationText="Password"
                    upgradeText="Change Password"
                    tabButtonText="Edit"
                    onClick={handleEditPassword}
                  />
                )}
                {activeSettingTab === 3 && (
                  <>
                    <TabHeader
                      verificationText="Other"
                      upgradeText="Delete Account"
                      tabButtonText="Delete"
                      onClick={openDeleteModal}
                    />
                  </>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Settings;
