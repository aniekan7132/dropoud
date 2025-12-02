import React, { useState, useEffect } from "react";
import Input from "../../components/Input";
import axios from "../../axios/axios";
import cancelIcon from "../../assets/cancel.svg";
import search from "../../assets/search.svg";
import classes from "./Universities.module.css";
import Error from "../../components/Error";
import { Campus } from "../../types";

interface UniProps {
  closeUniModal: () => void;
  onChange: (university: string) => void;
  value: string;
}

const Universities = ({ closeUniModal, onChange }: UniProps) => {
  const [universities, setUniversities] = useState<Campus[]>([]);
  const [selectedUniversity, setSelectedUniversity] = useState<string>("");

  const [campusError, setCampusError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [searchedUni, setSearchUni] = useState("");

  useEffect(() => {
    handleCampusRequest();
  }, []);

  const filteredUni = universities.filter((uni) =>
    uni?.acro?.toLowerCase().includes(searchedUni?.toLowerCase())
  );

  function handleCampusRequest() {
    axios
      .get(`/api/v1/misc/campuses`, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
        setUniversities(response?.data?.data);
      })
      .catch((error) => {
        setCampusError(true);
        setErrorMessage(
          error?.response ? error.response.data.message : "Network error"
        );
      });
  }

  const handleSelectionChange = (name: string) => {
    setSelectedUniversity(name);
  };

  return (
    <div className={classes["unviersities__container"]}>
      <div className={classes["unviersities__list-container"]}>
        <div className={classes["universities__cancel-icon"]}>
          <img src={cancelIcon} alt="Cancel" onClick={closeUniModal} />
        </div>
        <div className={classes["chat__bar"]}>
          <button className={classes["chatbar__button-logo"]}>
            <img src={search} alt="Search-icon" />
          </button>
          <Input
            value={searchedUni}
            onChange={(e) => setSearchUni(e.target.value)}
            placeholder="Search"
            className={classes["chatbar__input"]}
          />
        </div>
        <div className={classes["universities__list-details"]}>
          <ul>
            {searchedUni && filteredUni.length === 0 ? (
              <p>No result found</p>
            ) : (
              (searchedUni ? filteredUni : universities).map(
                (university, index) => (
                  <li
                    key={index}
                    onClick={() =>
                      onChange(university.name + "-" + university.acro)
                    }
                  >
                    <label>
                      <p>
                        {university.name} - {university.acro}
                      </p>
                      <Input
                        type="radio"
                        name="university"
                        // value={value}
                        className={classes["campus__modal-radio_input"]}
                        checked={selectedUniversity === university.name}
                        onChange={() => {
                          handleSelectionChange(university.name);
                        }}
                      />
                    </label>
                  </li>
                )
              )
            )}
            {/* {} */}
          </ul>
        </div>
      </div>
      {campusError && <Error errorMsg={errorMessage} />}
    </div>
  );
};

export default Universities;
