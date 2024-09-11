import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./BanKName.module.css";
import chevronDown from "../assets/chevron-down.svg";
import Button from "./ButtonComponent";
import search from "../assets/search.svg";
import Input from "./Input";
import bankLogo from "../assets/bank-icon.svg";
import SideNavbar from "./SideNavbar";
import TopSearchBar from "./TopSearchBar";
import HeaderTwo from "./HeaderTwo";
import arrowBack from "../assets/arrow-back.svg";
import HeaderSix from "./HeaderSix";
import axios from "../axios/axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { bankList } from "./BankData";

const initialErrorState = {
  account: null,
  selectBank: null,
};

interface accountDetailsError {
  account: null | string;
  selectBank: null | string;
}

function BankName() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [addBank, setAddBank] = useState(false);
  // const bankList = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const [enterAccount, setEnterAccount] =
    useState<accountDetailsError>(initialErrorState);
  const [accountNumber, setAccountNumber] = useState("");

  const [loading, setLoading] = useState(false);

  const user = useSelector(selectUser);
  const full_name = `${user?.first_name} ${user?.surname}`;

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const handleAddBank = () => {
    setAddBank(true);
  };

  const handleChangeBank = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedItem(e.target.value);
    setEnterAccount(initialErrorState);
  };

  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountNumber(e.target.value);
    setEnterAccount(initialErrorState);
  };

  const submitBankDetails = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (accountNumber.trim() === "" && selectedItem.trim() === "") {
      // if () {
      setEnterAccount({
        ...enterAccount,
        selectBank: "Please enter or select a bank",
        account: "Please enter an account number",
      });
    } else if (selectedItem.trim() === "") {
      setEnterAccount({
        ...enterAccount,
        account: "Please enter an account number",
      });
    } else if (accountNumber.trim() === "") {
      setEnterAccount({
        ...enterAccount,
        account: "Please enter an account number",
      });
    }
    setLoading(true);

    // {{baseurl}}/api/v1/users
    axios
      .put(`/api/v1/users`, {
        account_name: full_name,
        account_number: accountNumber,
        bank: selectedItem
      }, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((response) => {
        console.log(response);
        navigate("/wallet");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className={classes.home}>
        <SideNavbar />
        <main className={classes["main__pane"]}>
          <TopSearchBar />

          <div className={classes["withdraw__money-overall_container"]}>
            <div className={classes["withdraw__money"]}>
              <div>
                <Link to="/wallet">
                <img
                  className={classes["arrow__back"]}
                  src={arrowBack}
                  alt=""
                />
                </Link>
              </div>
              <HeaderTwo text="Withdraw Money" />
            </div>

            {addBank ? (
              <div className={classes["bank__details-background"]}>
                <div className={classes["account__number-input"]}>
                  <label className={classes["input__label"]} htmlFor="">
                    Bank Name
                  </label>
                  <div style={{ position: "relative", width: "445px" }}>
                    <Input
                      type="text"
                      value={selectedItem}
                      onChange={handleChangeBank}
                      placeholder="Select a Bank"
                      style={{
                        width: "445px",
                        padding: "24px",
                        boxSizing: "border-box",
                      }}
                    />
                    {enterAccount.selectBank && (
                      <p>{enterAccount.selectBank}</p>
                    )}
                    <span
                      onClick={toggleDropdown}
                      style={{
                        position: "absolute",
                        right: "15px",
                        top: "28px",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    >
                      <img src={chevronDown} alt="" />
                    </span>
                    {isOpen && (
                      <div
                        style={{
                          listStyleType: "none",
                          margin: 0,
                          padding: "16px 24px",
                          position: "absolute",
                          top: "60px",
                          left: 0,
                          right: 0,
                          // borderRadius: "16px",
                          backgroundColor: "#FFFFFF",
                          border: "1px solid #ccc",
                          boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
                          display: "flex",
                          flexDirection: "column",
                          gap: "24px",
                          height: "300px",
                          overflowY: "scroll",
                          overflowX: "hidden",
                        }}
                      >
                        <div className={classes["search__bank-name"]}>
                          <img src={search} alt="search" />
                          <input placeholder="Search a bank" />
                        </div>
                        <ul
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "24px",
                          }}
                        >
                          {bankList.map((item, index) => (
                            <li
                              key={index}
                              onClick={() => handleItemClick(item.value)}
                              style={{
                                padding: "5px 0",
                                cursor: "pointer",
                                listStyle: "none",
                                borderBottom: "2px solid #F6F6F6",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px"
                              }}
                            >
                              <img
                                className={classes["bank__logo"]}
                                src={bankLogo}
                                alt="Bank-icon"
                              />
                              {item.value}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className={classes["account__number-input"]}>
                  <label className={classes["input__label"]} htmlFor="">
                    Account Number
                  </label>
                  <Input
                    type="number"
                    // value={selectedItem}
                    // onChange={(e) => setSelectedItem(e.target.value)}
                    placeholder="Enter Account Number"
                    style={{
                      width: "445px",
                      padding: "24px",
                      boxSizing: "border-box",
                    }}
                    value={accountNumber}
                    onChange={handleChangeNumber}
                  />
                  {enterAccount.account && <p>{enterAccount.account}</p>}
                </div>
                <Button
                  size="bigsm"
                  className={`${classes["select__bank-button"]}`}
                  onClick={submitBankDetails}
                >
                  {loading ? "Please wait..." : "Proceed"}
                </Button>
              </div>
            ) : (
              <div className={classes["withdraw__money_input-container"]}>
                <div>
                  <p className={classes["withdraw__money-input_label"]}>
                    No bank account added yet
                  </p>
                  <div className={classes["link__an-account"]}>
                    <HeaderSix text="You haven't linked a bank account yet. Please use the button below to add one" />
                  </div>
                </div>

                <Button
                  size="bigsm"
                  className={`${classes["withdraw__money-button"]}`}
                  // disabled={true}
                  onClick={handleAddBank}
                >
                  Add a bank
                </Button>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default BankName;
