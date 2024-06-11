import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Button from "./components/ButtonComponent";
// import Input from "./components/Input";
import Home from "./pages/Home";
import "./App.css";
import EmailVerification from "./components/EmailVerification";
// import { BrowserRouter } from "react-router-dom";
import LoginForm from "./pages/Login";
import React from 'react';


const App: FC = () => {
  return (

    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<LoginForm onSubmit={()=>{}} />} />
          <Route path="/email-verification" element={<EmailVerification />} />
        </Routes>
      </Router>
    
    </>
  );
};

export default App;
