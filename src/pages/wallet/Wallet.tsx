import React from "react";
import SideNavbar from "../../components/SideNavbar";
import TopSearchBar from "../../components/TopSearchBar";
import HeaderTwo from "../../components/HeaderTwo";
import classes from "./Wallet.module.css";
import HeaderFive from "../../components/HeaderSix";
import HeaderThree from "../../components/HeaderThree";
import Button from "../../components/ButtonComponent";
import HeaderSeven from "../../components/HeaderSeven";

const Wallet = () => {
  return (
    <>
      <div className={classes.home}>
        <SideNavbar />
        <main className={classes["main__pane"]}>
          <TopSearchBar />
          <div className={classes["main__container"]}>
            <HeaderTwo text="Wallet" />
            <div className={classes["wallet__figure-container"]}>
              <div className={classes["wallet__balance-container"]}>
                <div>
                  <HeaderThree text="My Balance" />
                </div>

                <div className={classes["wallet__balance-div"]}>
                  <p className={classes["wallet__balance-figure"]}>₦0.00</p>
                </div>

                <div className={classes["wallet__transaction-history"]}>
                  <HeaderThree text="Transactions History" />
                </div>

                {/* <div className={classes["wallet__no-transaction"]}> 
                  <HeaderFive text="No Transactions Have Been Made Yet." />
                </div> */}

                <div>
                  <div>
                    <div>
                      <div>
                        <HeaderSeven text="Course Purchase" />
                        <p>
                          <span>12:30pm</span> <span>12</span>
                          <span>Apr 2024</span>
                        </p>
                      </div>
                      <div>
                        <p>₦75</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={classes["wallet__withdrawal-container"]}>
                <div>
                  <HeaderThree text="My Balance" />
                </div>

                <div className={classes["wallet__withdrawal-balance_div"]}>
                  <p className={classes["wallet__balance-figure"]}>₦0.00</p>
                </div>

                <div className={classes["wallet__withdrawal-button"]}>
                  <Button
                    size="bigsm"
                    className={classes["withdrawal__button"]}
                  >
                    Withdraw
                  </Button>
                </div>

                <div
                  className={classes["wallet__withdrawal-transaction_history"]}
                >
                  <HeaderThree text="Transactions History" />
                </div>

                <div className={classes["wallet__withdrawa-no_transaction"]}>
                  <HeaderFive text="No Transactions Have Been Made Yet." />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Wallet;
