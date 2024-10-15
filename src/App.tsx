import React, { useEffect } from "react";
import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import "./App.css";
import "./index.css";
import EmailVerification from "./components/EmailVerification";
import LoginForm from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword.tsx";
import ThankYou from "./components/ThankYou";
import SuccessScreen from "./pages/SuccessScreen.tsx";
import Home from "./pages/home/Home";
import Content from "./pages/content/Content";
import Notification from "./pages/Notification/Notification.tsx";
import Wallet from "./pages/wallet/Wallet";
import axios from "./axios/axios.tsx";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./features/userSlice.ts";
import SucessUploadScreen from "./components/SucessUploadScreen.tsx";
import FailedUploadScreen from "./components/FailedUploadScreen.tsx";
import WithdrawMoney from "./components/WithdrawMoney.tsx";
import BankName from "./components/BankName.tsx";
import WithdrawalSuccessful from "./components/WithdrawalSuccessful.tsx";
import BankSucessScreen from "./components/BankSucessScreen.tsx";
import { selectGeneral } from "./features/generalSlice.ts";
import UploadConatiner from "./components/UploadConatiner.tsx";


const App: FC = () => {
  const general = useSelector(selectGeneral);

  const dispatch = useDispatch();

  const loadUser = () => {
    axios
      .get(`/api/v1/users/me`, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((response) => dispatch(login(response.data?.data)))
      .catch(() => {
        if (location.pathname !== "/sign-in") {
          window.location.href = "/sign-in";
        }
      });
  };

  useEffect(() => {
    loadUser();
  }, []);

  console.log(general)

  return (
    // <Wallet />
    <>
    {general.uploadModal &&  <UploadConatiner />}
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/sign-in" element={<LoginForm />} />
          <Route
            path="/email-verification/:email"
            element={<EmailVerification />}
          />
          <Route path="thank" element={<ThankYou />} />
          <Route path="/forgotpassword?" element={<ForgotPassword />} />
          <Route path="/newpassword" element={<NewPassword />} />
          <Route path="/success-screen" element={<SuccessScreen />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/content" element={<Content />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/upload-successful" element={<SucessUploadScreen />} />
          <Route path="/upload-failed" element={<FailedUploadScreen />} />
          <Route path="/withdraw-money" element={<WithdrawMoney />} />
          <Route path="/bank-name" element={<BankName />} />
          <Route
            path="/withdrawal-successful"
            element={<WithdrawalSuccessful />}
          />
          <Route
            path="/successfully-added-bank"
            element={<BankSucessScreen />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;