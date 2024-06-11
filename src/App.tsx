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

const App: FC = () => {
  return (
    // <EmailVerification />
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/sign-in" element={<LoginForm />} />
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
