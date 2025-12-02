import React, { useState } from "react";
import Input from "../components/Input";
import classes from "./ForgetPassword.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import HeaderTwo from "../components/HeaderTwo";


const ForgotPassword: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const FORGOT_PASSWWORD = "/api/v1/auth/forgot-password/";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    axios.get(`${FORGOT_PASSWWORD}${email}`).then((response) => {
        console.log(response);
        setIsLoading(false);
        navigate("/email-verification/" + email);
    }).catch((error) => {
        console.log(error);
    })
  };

  return (
    <div className={classes.forget}>
      <div className={classes["header__div"]}>
        <HeaderTwo text="Forget your password" />
      </div>

      <p className={classes["forget__text"]}>
        Enter your email address and we will send your 4 digit code to reset
        your password
      </p>
      <form className={classes["forget__form"]} onSubmit={handleSubmit}>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={classes["email__input"]}
          placeholder="Enter Your Email"
        />

        <button className={classes["submit__btn"]} type="submit">
          {isLoading ? <Spinner /> : "Send OTP"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
