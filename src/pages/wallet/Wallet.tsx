import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideNavbar from "../../components/SideNavbar";
import TopSearchBar from "../../components/TopSearchBar";
import HeaderTwo from "../../components/HeaderTwo";
import classes from "./Wallet.module.css";
import HeaderFive from "../../components/HeaderSix";
import HeaderThree from "../../components/HeaderThree";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import axios from "../../axios/axios";
import { Transaction } from "../../types";
import { Withdrawal } from "../../types";
import Button from "../../components/ButtonComponent";

const Wallet = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [withdrawal, setWithdrawal] = useState<Withdrawal[]>([]);

  const [activeTab, setActiveTab] = useState("tab1");

  const navigate = useNavigate();

  const user = useSelector(selectUser);
  const totalWalletBalance = user?.coins?.toFixed(2);

  useEffect(() => {
    handlePurchaseTransactions();
    handleWithdrawalPurchase();
  }, []);
  //withdrawal, transactions, user

  // Fetched viewed transactions from the endpoint
  const handlePurchaseTransactions = () => {
    //{{baseurl}}/api/v1/transactions/me
    axios
      .get("api/v1/transactions/me", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
        setTransactions(response?.data?.data);
      })
      .catch((error) => console.log(error));
  };

  // Fetched withdrawals data from the endpoint
  const handleWithdrawalPurchase = () => {
    //{{baseurl}}/api/v1/transactions/withdrawals
    axios
      .get("api/v1/transactions/withdrawals", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
        setWithdrawal(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  const onWithdrawClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (user?.bank) {
      navigate("/withdraw-money");
    } else {
      navigate("/bank-name");
    }
  };

  // Handle tab click
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className={classes.home}>
        <SideNavbar />
        <main className={classes["main__pane"]}>
          <TopSearchBar />
          <div className={classes["main__container"]}>
            <HeaderTwo text="Wallet" />
            <div className={classes["wallet__figure-container"]}>
              <div className={classes["mobile__toggle-div"]}>
                <button
                  className={
                    activeTab === "tab1"
                      ? `${classes["mobile__toggle-button"]} ${classes.active}`
                      : `${classes["mobile__toggle-button"]}`
                  }
                  onClick={() => handleTabClick("tab1")}
                >
                  My Balance
                </button>
                <button
                  className={
                    activeTab === "tab2"
                      ? `${classes["mobile__toggle-button"]} 
                  ${classes.active}`
                      : `${classes["mobile__toggle-button"]}`
                  }
                  onClick={() => handleTabClick("tab2")}
                >
                  Withdrawal
                </button>
              </div>

              <div className={classes["mobile__tab-content"]}>
                {activeTab === "tab1" && (
                  <div
                    className={classes["mobile__wallet-transaction_history"]}
                  >
                    <div className={classes["mobile__balance-container"]}>
                      <HeaderThree text="My Balance" />

                      <p className={classes["wallet__balance-figure"]}>
                        ₦{totalWalletBalance}
                      </p>

                      <HeaderThree text="Transactions History" />
                    </div>

                    {/* Mapped through viewed transactions */}
                    {transactions?.length === 0 ? (
                      <div className={classes["mobile__wallet-no_transaction"]}>
                        <p>No Transactions Have Been Made Yet.</p>
                      </div>
                    ) : (
                      <div
                        className={
                          classes["wallet__transaction-history_wrapper"]
                        }
                      >
                        {transactions.map((transaction, index) => {
                          return (
                            <div key={index}>
                              <div
                                className={classes["wallet__transaction-div"]}
                              >
                                <div
                                  className={classes["wallet__course-purchase"]}
                                >
                                  <HeaderFive text={transaction?.item} />
                                  <p
                                    className={
                                      classes["wallet__transaction-date"]
                                    }
                                  >
                                    <span>
                                      {transaction?.date?.substring(16, 21)}
                                    </span>{" "}
                                    <span>
                                      {transaction?.date?.substring(8, 11)}
                                    </span>
                                    <span>
                                      {transaction?.date?.substring(4, 7)}
                                    </span>
                                    <span>
                                      {transaction?.date?.substring(11, 15)}
                                    </span>
                                  </p>
                                </div>
                                <div>
                                  <p
                                    className={
                                      classes["wallet__transaction-amount"]
                                    }
                                  >
                                    ₦{transaction?.amount?.toFixed(2)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
                {activeTab === "tab2" && (
                  <div
                    className={classes["mobile__wallet-withdrawal_container"]}
                  >
                    <div className={classes["mobile__balance-container"]}>
                      <HeaderThree text="Withdrawal Balance" />

                      <p className={classes["wallet__balance-figure"]}>
                        ₦{totalWalletBalance}
                      </p>

                      <Button
                        size="bigsm"
                        onClick={onWithdrawClick}
                        className={classes["withdrawal__button"]}
                      >
                        Withdraw
                      </Button>

                      <HeaderThree text="Transactions History" />
                    </div>

                    {/* Mapped through Withdrawals */}
                    {withdrawal?.length === 0 ? (
                      <div
                        className={classes["mobile__wallet-withdrawal_no-transaction"]}
                      >
                        <HeaderFive text="No Transactions Have Been Made Yet." />
                      </div>
                    ) : (
                      <div
                        className={
                          classes["wallet__withdrawal-transaction_history"]
                        }
                      >
                        <HeaderThree text="Transactions History" />

                        {withdrawal?.map((withdrawal, index) => {
                          return (
                            <div
                              key={index}
                              className={classes["wallet__transaction-div"]}
                            >
                              <div
                                className={classes["wallet__course-purchase"]}
                              >
                                <HeaderFive text="Withdrawal" />
                                <p
                                  className={
                                    classes["wallet__transaction-date"]
                                  }
                                >
                                  <span>
                                    {withdrawal?.date?.substring(16, 21)}
                                  </span>{" "}
                                  <span>
                                    {withdrawal?.date?.substring(8, 10)}
                                  </span>
                                  <span>
                                    {withdrawal?.date?.substring(5, 8)}
                                  </span>
                                  <span>
                                    {withdrawal?.date?.substring(11, 15)}
                                  </span>
                                </p>
                              </div>
                              <div>
                                <p
                                  className={`${classes["wallet__transaction-amount"]} ${classes["wallet__transaction-withdrawn"]}`}
                                >
                                  ₦{withdrawal?.amount}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className={classes["wallet__balance-container"]}>
                <div>
                  <HeaderThree text="My Balance" />
                </div>

                <div className={classes["wallet__balance-div"]}>
                  <p className={classes["wallet__balance-figure"]}>
                    ₦{totalWalletBalance}
                  </p>
                </div>

                <div className={classes["wallet__transaction-history"]}>
                  <HeaderThree text="Transactions History" />

                  {/* Mapped through viewed transactions */}
                  {transactions?.length === 0 ? (
                    <div className={classes["wallet__no-transaction"]}>
                      <p>No Transactions Have Been Made Yet.</p>
                    </div>
                  ) : (
                    <div
                      className={classes["wallet__transaction-history_wrapper"]}
                    >
                      {transactions.map((transaction, index) => {
                        return (
                          <div key={index}>
                            <div className={classes["wallet__transaction-div"]}>
                              <div
                                className={classes["wallet__course-purchase"]}
                              >
                                <HeaderFive text={transaction?.item} />
                                <p
                                  className={
                                    classes["wallet__transaction-date"]
                                  }
                                >
                                  <span>
                                    {transaction?.date?.substring(16, 21)}
                                  </span>{" "}
                                  <span>
                                    {transaction?.date?.substring(8, 11)}
                                  </span>
                                  <span>
                                    {transaction?.date?.substring(4, 7)}
                                  </span>
                                  <span>
                                    {transaction?.date?.substring(11, 15)}
                                  </span>
                                </p>
                              </div>
                              <div>
                                <p
                                  className={
                                    classes["wallet__transaction-amount"]
                                  }
                                >
                                  ₦{transaction?.amount?.toFixed(2)}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              <div className={classes["wallet__withdrawal-container"]}>
                <div>
                  <HeaderThree text="Withdrawal Balance" />
                </div>

                <div className={classes["wallet__withdrawal-balance_div"]}>
                  <p className={classes["wallet__balance-figure"]}>
                    ₦{totalWalletBalance}
                  </p>
                </div>

                <div className={classes["wallet__withdrawal-button"]}>
                  <Button
                    size="bigsm"
                    onClick={onWithdrawClick}
                    className={classes["withdrawal__button"]}
                  >
                    Withdraw
                  </Button>
                </div>

                {/* Mapped through Withdrawals */}
                {withdrawal?.length === 0 ? (
                  <div className={classes["wallet__withdrawal-no_transaction"]}>
                    <HeaderFive text="No Transactions Have Been Made Yet." />
                  </div>
                ) : (
                  <div
                    className={
                      classes["wallet__withdrawal-transaction_history"]
                    }
                  >
                    <HeaderThree text="Transactions History" />

                    {withdrawal?.map((withdrawal, index) => {
                      return (
                        <div
                          key={index}
                          className={classes["wallet__transaction-div"]}
                        >
                          <div className={classes["wallet__course-purchase"]}>
                            <HeaderFive text="Withdrawal" />
                            <p className={classes["wallet__transaction-date"]}>
                              <span>{withdrawal?.date?.substring(16, 21)}</span>{" "}
                              <span>{withdrawal?.date?.substring(8, 10)}</span>
                              <span>{withdrawal?.date?.substring(5, 8)}</span>
                              <span>{withdrawal?.date?.substring(11, 15)}</span>
                            </p>
                          </div>
                          <div>
                            <p
                              className={`${classes["wallet__transaction-amount"]} ${classes["wallet__transaction-withdrawn"]}`}
                            >
                              ₦{withdrawal?.amount}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Wallet;

{
  /* <div>
                        <div className={classes["wallet__transaction-div"]}>
                          <div className={classes["wallet__course-purchase"]}>
                            <HeaderFive text="Course Purchase" />
                            <p className={classes["wallet__transaction-date"]}>
                              <span>12:30pm</span> <span>12</span>
                              <span>Apr</span>
                              <span>2024</span>
                            </p>
                          </div>
                          <div>
                            <p
                              className={classes["wallet__transaction-amount"]}
                            >
                              ₦75
                            </p>
                          </div>
                        </div>
                      </div> */
}

{
  /* <div
                  className={classes["wallet__withdrawal-transaction_history"]}
                >
                  <HeaderThree text="Transactions History" />

                  <div className={classes["wallet__transaction-div"]}>
                    <div className={classes["wallet__course-purchase"]}>
                      <HeaderFive text="Withdrawal" />
                      <p className={classes["wallet__transaction-date"]}>
                        <span>12:30pm</span> <span>12</span>
                        <span>Apr</span>
                        <span>2024</span>
                      </p>
                    </div>
                    <div>
                      <p
                        className={`${classes["wallet__transaction-amount"]} ${classes["wallet__transaction-withdrawn"]}`}
                      >
                        ₦90,000
                      </p>
                    </div>
                  </div>

                  <div className={classes["wallet__transaction-div"]}>
                    <div className={classes["wallet__course-purchase"]}>
                      <HeaderFive text="Withdrawal" />
                      <p className={classes["wallet__transaction-date"]}>
                        <span>12:30pm</span> <span>12</span>
                        <span>Apr</span>
                        <span>2024</span>
                      </p>
                    </div>
                    <div>
                      <p
                        className={`${classes["wallet__transaction-amount"]} ${classes["wallet__transaction-withdrawn"]}`}
                      >
                        ₦90,000
                      </p>
                    </div>
                  </div>

                  <div className={classes["wallet__transaction-div"]}>
                    <div className={classes["wallet__course-purchase"]}>
                      <HeaderFive text="Withdrawal" />
                      <p className={classes["wallet__transaction-date"]}>
                        <span>12:30pm</span> <span>12</span>
                        <span>Apr</span>
                        <span>2024</span>
                      </p>
                    </div>
                    <div>
                      <p
                        className={`${classes["wallet__transaction-amount"]} ${classes["wallet__transaction-withdrawn"]}`}
                      >
                        ₦90,000
                      </p>
                    </div>
                  </div>
                </div> */
}

{
  /* <div className={classes["wallet__withdrawal-no_transaction"]}>
                  <HeaderFive text="No Transactions Have Been Made Yet." />
                </div> */
}

{
  /* <div className={classes["wallet__no-transaction"]}> 
<HeaderFive text="No Transactions Have Been Made Yet." />
</div> */
}

{
  /* <div
                    className={classes["wallet__transaction-history_wrapper"]}
                  >
                    <div>
                      <div className={classes["wallet__transaction-div"]}>
                        <div className={classes["wallet__course-purchase"]}>
                          <HeaderFive text="Course Purchase" />
                          <p className={classes["wallet__transaction-date"]}>
                            <span>{time}</span> <span>{day}</span>
                            <span>{month}</span>
                            <span>{year}</span>
                          </p>
                        </div>
                        <div>
                          <p className={classes["wallet__transaction-amount"]}>
                            ₦75
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className={classes["wallet__transaction-div"]}>
                        <div className={classes["wallet__course-purchase"]}>
                          <HeaderFive text="Course Purchase" />
                          <p className={classes["wallet__transaction-date"]}>
                            <span>12:30pm</span> <span>12</span>
                            <span>Apr</span>
                            <span>2024</span>
                          </p>
                        </div>
                        <div>
                          <p className={classes["wallet__transaction-amount"]}>
                            ₦75
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className={classes["wallet__transaction-div"]}>
                        <div className={classes["wallet__course-purchase"]}>
                          <HeaderFive text="Course Purchase" />
                          <p className={classes["wallet__transaction-date"]}>
                            <span>12:30pm</span> <span>12</span>
                            <span>Apr</span>
                            <span>2024</span>
                          </p>
                        </div>
                        <div>
                          <p className={classes["wallet__transaction-amount"]}>
                            ₦75
                          </p>
                        </div>
                      </div>
                    </div>
                  </div> */
}
