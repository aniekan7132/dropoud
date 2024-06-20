import React from "react";
import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Button from "./components/ButtonComponent";
// import Input from "./components/Input";
import SignUp from "./pages/SignUp";
import "./App.css";
import EmailVerification from "./components/EmailVerification";
// import { BrowserRouter } from "react-router-dom";
import LoginForm from "./pages/Login";
import Home from "./pages/home/Home";

const App: FC = () => {
  return (
    // <EmailVerification />
    // <Empty  />
    <>
      <Router>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<LoginForm />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/email-verification/:email"
            element={<EmailVerification />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
