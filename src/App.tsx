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
import ModalDetails from "./components/ModalDetails.tsx";
import axios from "./axios/axios.tsx";
import { useDispatch, useSelector } from "react-redux";
import userSlice, { login, selectUser } from "./features/userSlice.ts";
import Modal from "./components/Modal.tsx";
import { baseUrl } from "./utilities/baseUrl.ts";
// import PopUp from "./components/PopUp";
// import PopUpInput from "./components/PopUpInput";
// import Button from "./components/ButtonComponent";
// import Input from "./components/Input";
// import { BrowserRouter } from "react-router-dom";

const App: FC = () => {
  const localBaseUrl = "http://192.168.0.102:7070";

  const dispatch = useDispatch();

  const loadUser = () => {
    axios
      .get(`${baseUrl}/api/v1/users/me`, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((response) => dispatch(login(response.data?.data)))
      .catch((err) => {
        if (location.pathname !== "/sign-in") {
          window.location.href = "/sign-in";
        }
      });
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    // <EmailVerification />
    <>
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
          <Route path="forgotpassword?" element={<ForgotPassword />} />
          <Route path="newpassword" element={<NewPassword />} />
          <Route path="success" element={<SuccessScreen />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/content" element={<Content />} />
          <Route path="/wallet" element={<Wallet />} />
          {/* <Route path="/upload-content" element={<ModalDetails />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;

//{user ? <Login /> : <Logout />}
