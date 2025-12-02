import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./BanKName.module.css";
import chevronDown from "../assets/chevron-down.svg";
import Button from "./ButtonComponent";
import search from "../assets/search.svg";
import Input from "./Input";
import bankLogo from "../assets/bank-icon.svg";
import HeaderTwo from "./HeaderTwo";
import arrowBack from "../assets/arrow-back.svg";
import HeaderSix from "./HeaderSix";
import axios from "../axios/axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
//import { bankList } from "./BankData";
import { reload } from "../pages/settings/Settings";
import { Bank } from "../types";

// interface Bank {
//   id: number;
//   name: string;
//   slug: string;
//   code: string;
//   longcode: string;
//   gateway: string;
//   pay_with_bank: boolean;
//   supports_transfer: boolean;
//   active: boolean;
//   country: string;
//   currency: Currency;
//   type: "nuban";
//   is_deleted: boolean;
//   createdAt: string;
//   updatedAt: string;
// }

const initialErrorState = {
  account: null,
  selectBank: null,
  selectedItem: null,
};

interface accountDetailsError {
  account: null | string;
  selectBank: null | string;
}

function BankName() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [addBank, setAddBank] = useState<boolean>(false);

  const [errorMessage, setErrorMessage] = useState<string>("");
console.log(errorMessage)
  const [enterAccount, setEnterAccount] =
    useState<accountDetailsError>(initialErrorState);
  const [accountNumber, setAccountNumber] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [allBanks, setAllBanks] = useState<Bank[]>([]);

  const user = useSelector(selectUser);
  const full_name = `${user?.first_name} ${user?.surname}`;

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
    setEnterAccount(initialErrorState);
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

  useEffect(() => {}, [fetchAllBanks()]);

  function fetchAllBanks() {
    axios
      .get(`/api/v1/transactions/banks`, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
        setAllBanks(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(
          error?.response ? error?.response?.data?.message : "Network Error"
        );
      });
  }

  const submitBankDetails = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (accountNumber.trim() === "" && selectedItem.trim() === "") {
      setEnterAccount({
        ...enterAccount,
        selectBank: "Please enter or select a bank",
        account: "Please enter an account number",
      });
    } else if (selectedItem.trim() === "") {
      setEnterAccount({
        ...enterAccount,
        account: "Please enter or select a bank",
      });
    } else if (accountNumber.trim() === "") {
      setEnterAccount({
        ...enterAccount,
        account: "Please enter an account number",
      });
    }
    setLoading(true);

    if (selectedItem && accountNumber !== "") {
      axios
        .put(
          `/api/v1/users`,
          {
            account_name: full_name,
            account_number: accountNumber,
            bank: selectedItem,
          },
          {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        )
        .then(() => {
          navigate("/successfully-added-bank");
          reload();
        })
        .catch(() => {
          navigate("/failed-to-add-bank");
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={classes["withdraw__money-overall_container"]}>
        <div className={classes["withdraw__money"]}>
          <div>
            <Link to="/dashboard">
              <img className={classes["arrow__back"]} src={arrowBack} alt="" />
            </Link>
          </div>
          <HeaderTwo text="Setting" />
        </div>

        {addBank ? (
          <div className={classes["bank__details-background"]}>
            <div className={classes["account__number-input"]}>
              <label className={classes["input__label"]} htmlFor="">
                Bank Name
              </label>
              <div className={classes["bank__details-select_bank"]}>
                <Input
                  type="text"
                  value={selectedItem}
                  onChange={handleChangeBank}
                  placeholder="Select a Bank"
                  className={classes["bank__details-input"]}
                />
                {enterAccount.selectBank && (
                  <p className={classes["error"]}>{enterAccount.selectBank}</p>
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
                    <ul>
                      {allBanks?.map((item, index) => (
                        <li
                          key={index}
                          onClick={() => handleItemClick(item?.code)}
                          style={{
                            padding: "5px 0",
                            cursor: "pointer",
                            listStyle: "none",
                            borderBottom: "2px solid #F6F6F6",
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                            color: "#6B6B6B",
                            fontSize: "16px",
                            lineHeight: "20px"
                          }}
                        >
                          <img
                            className={classes["bank__logo"]}
                            src={bankLogo}
                            alt="Bank-icon"
                          />
                          {item?.name}
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
                placeholder="Enter Account Number"
                className={classes["bank__details-input"]}
                value={accountNumber}
                onChange={handleChangeNumber}
              />
              {enterAccount.account && (
                <p className={classes["error"]}>{enterAccount.account}</p>
              )}
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
    </>
  );
}

export default BankName;
