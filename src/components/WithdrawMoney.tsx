import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderTwo from "./HeaderTwo";
import Input from "./Input";
import Button from "./ButtonComponent";
import arrowBack from "../assets/arrow-back.svg";
import classes from "./WithdrawMoney.module.css";
import SideNavbar from "./SideNavbar";
import TopSearchBar from "./TopSearchBar";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import ConfirmTransaction from "./ConfirmTransaction";
// import Error from "./Error";
import axios from "../axios/axios";

const intitialErrorState = {
  withdrawalInput: null,
};

interface DefaultErrorState {
  withdrawalInput: string | null;
}

const WithdrawMoney = () => {
  const user = useSelector(selectUser);
  const amount = user?.coins;
  const bank = user?.bank;
  const accountNumber = user?.account_number;

  const full_name = `${user?.first_name} ${user?.surname}`;

  const [withdrawalAmount, setWithDrawalAmount] = useState<number>(0);
  const [proceed, setProceed] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [errorState, setErrorState] = useState(false);
  const [password, setPassword] = useState("");
  // const [addClass, setAddClass] = useState<boolean>(true);
  // const [balance, setBalance] = useState<number>()

  const [errorText, setErrorText] =
    useState<DefaultErrorState>(intitialErrorState);

  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      if (ref.current) {
        ref.current.focus();
      }
    }, 2000);
  }, []);

  const handleWithdrawalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWithDrawalAmount(parseInt(e.target.value));
    setErrorState(false);
  };

  const handleProceedClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!withdrawalAmount) {
      setErrorState(true);
      setProceed(false);
      setErrorText({ ...errorText, withdrawalInput: "Please enter an amount" });
    } else if (withdrawalAmount < 1){
      setErrorState(true);
      setProceed(false);
      setErrorText({ ...errorText, withdrawalInput: "Amount must be greater than 0" });
    }
    else {
      setProceed(true);
    }
  };

  // Retrieve value from password input field
  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setErrorState(false);
  };

  // API call to handle withdrawal request of users
  const withdrawalRequsest = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    //{{baseurl}}/api/v1/transactions/withdraw
    axios
      .post(
        `/api/v1/transactions/withdraw`,
        {
          amount: withdrawalAmount,
          account_name: full_name,
          account_number: accountNumber,
          bank: bank,
          password: password,
        },
        {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log(response);
        sessionStorage.setItem(
          "withdrawal-data",
          JSON.stringify({
            amount: withdrawalAmount,
            account_name: full_name,
            account_number: accountNumber,
            bank: bank,
            response: response.data.message,
          })
        );
        navigate("/withdrawal-successful");
      })
      .catch((error) => {
        console.log(error);
        setErrorState(true);
        setErrorMessage(error.response.data.message);
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
              <Link to="/wallet">
                <img
                  className={classes["arrow__back"]}
                  src={arrowBack}
                  alt=""
                />
              </Link>
              <HeaderTwo text="Withdraw Money" />
            </div>

            {proceed ? (
              <ConfirmTransaction
                onClick={withdrawalRequsest}
                errorState={errorState}
                bank={user.bank!}
                withdrawalInput={withdrawalAmount}
                full_name={full_name}
                value={password}
                onChange={handlePasswordInput}
                errorMessage={errorMessage}
              />
            ) : (
              <div className={classes["withdraw__money_input-background"]}>
                <div className={classes["withdraw__money_input-container"]}>
                  <div>
                    <label
                      htmlFor=""
                      className={classes["withdraw__money-input_label"]}
                    >
                      Enter amount to withdraw
                    </label>
                  </div>
                  <form action="">
                    <Input
                      type="number"
                      placeholder="Enter Amount"
                      className={classes["withdraw__money-input"]}
                      value={withdrawalAmount}
                      onChange={handleWithdrawalChange}
                    />

                    <div className={classes["withdraw__money-balance"]}>
                      <p>Amount balance: {amount}</p>
                    </div>

                    <Button
                      size="bigsm"
                      className={`${classes["withdraw__money-button"]}`}
                      onClick={handleProceedClick}
                      // disabled={true}
                    >
                      Proceed
                    </Button>
                  </form>
                </div>
              </div>
            )}

            {/* <div className={classes["withdraw__money_input-background"]}>
              <div className={classes["withdraw__money_input-container"]}>
                <div>
                  <label
                    htmlFor=""
                    className={classes["withdraw__money-input_label"]}
                  >
                    Enter amount to withdraw
                  </label>
                </div>
                <form action="">
                  <Input
                    type="number"
                    placeholder="Enter Amount"
                    className={classes["withdraw__money-input"]}
                    value={withdrawalAmount}
                    onChange={handleWithdrawalChange}
                  />

                  <div className={classes["withdraw__money-balance"]}>
                    <p>Amount balance: {amount}</p>
                  </div>

                  <Button
                    size="bigsm"
                    className={`${classes["withdraw__money-button"]}`}
                    onClick={handleProceedClick}
                    // disabled={true}
                  >
                    Proceed
                  </Button>
                </form>
              </div>
            </div> */}
            {/* {errorState && (
              <div className={classes["error__div"]}>
                {/* <Error/> }
              </div>
            )} */}
          </div>
        </main>
      </div>
    </>
  );
};

export default WithdrawMoney;

{
  /* <div className={classes["withdraw__money-overall_container"]}>
            <div className={classes["withdraw__money"]}>
              <div>
                <img
                  className={classes["arrow__back"]}
                  src={arrowBack}
                  alt=""
                />
              </div>
              <HeaderTwo text="Withdraw Money" />
            </div>

            <div className={classes["withdraw__money_input-background"]}>
              <div className={classes["withdraw__money_input-container"]}>
                <div>
                  <label
                    htmlFor=""
                    className={classes["withdraw__money-input_label"]}
                  >
                    Enter amount to withdraw
                  </label>
                </div>
                <form action="">
                  <Input
                    placeholder="Enter Amount"
                    className={classes["withdraw__money-input"]}
                    value={withdrawalAmount}
                    onChange={handleWithdrawalChange}
                  />

                  <div className={classes["withdraw__money-balance"]}>
                    <p>Amount balance: {formattedAmount}</p>
                  </div>

                  <Button
                    size="bigsm"
                    className={`${classes["withdraw__money-button"]}`}
                  >
                    Proceed
                  </Button>
                </form>
              </div>
            </div>
          </div> */
}
