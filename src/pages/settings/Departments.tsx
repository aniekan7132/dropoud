import React, { useState, useEffect } from "react";
import { Department } from "../../types";
import axios from "../../axios/axios";
import classes from "./Universities.module.css";
import Error from "../../components/Error";
import Input from "../../components/Input";
import cancelIcon from "../../assets/cancel.svg";
import search from "../../assets/search.svg";

interface DepartmentsProps {
  closeDeptModal: () => void;
  onChange: (university: string) => void;
  value: string;
}

const Departments = ({ value, closeDeptModal, onChange }: DepartmentsProps) => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [selectedUniversity, setSelectedUniversity] = useState<string>("");
  const [searchedDepartment, setSearchedDepartment] = useState("");

  const [departmentError, setDepartmentError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const filteredDepartments = departments.filter((department) =>
    department?.name
      ?.toLowerCase()
      .includes(searchedDepartment?.toLowerCase())
  );

  useEffect(() => {
    fetchDepartments();
  }, []);

  function fetchDepartments() {
    axios
      .get(`/api/v1/misc/departments`, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((response) => {
        setDepartments(response?.data?.data);
        console.log(response);
      })
      .catch((error) => {
        setDepartmentError(true);
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
          <img src={cancelIcon} alt="Cancel" onClick={closeDeptModal} />
        </div>
        <div className={classes["chat__bar"]}>
          <button className={classes["chatbar__button-logo"]}>
            <img src={search} alt="Search-icon" />
          </button>
          <Input
            placeholder="Search"
            value={searchedDepartment}
            onChange={(e) => setSearchedDepartment(e.target.value)}
            className={classes["chatbar__input"]}
          />
        </div>
        <div className={classes["universities__list-details"]}>
          <ul>
            {searchedDepartment && filteredDepartments.length === 0 ? (
              <p>No result found</p>
            ) : (
              (searchedDepartment ? filteredDepartments : departments).map(
                (department, index) => (
                  <li key={index}>
                    <label onClick={() => onChange(department.name)}>
                      <p>{department.name}</p>
                      <Input
                        type="radio"
                        name="university"
                        value={value}
                        className={classes["campus__modal-radio_input"]}
                        checked={selectedUniversity === department.name}
                        onChange={() => {
                          handleSelectionChange(department.name);
                        }}
                      />
                    </label>
                  </li>
                )
              )
            )}
            {/* departments. */}
          </ul>
        </div>
      </div>
      {departmentError && <Error errorMsg={errorMessage} />}
    </div>
  );
};

export default Departments;
