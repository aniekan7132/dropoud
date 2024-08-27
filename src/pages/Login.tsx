import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "../axios/axios.tsx";
import dropoudBanner from "../assets/dropoud-banner.svg";
import Logo from "../assets/dropoud-logo.svg";
import Input from "../components/Input";
import classes from "./Login.module.css";
import Error from "../components/Error";
import Spinner from "../components/Spinner";
import HeaderTwo from "../components/HeaderTwo";
import Button from "../components/ButtonComponent";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice.ts";

// Spinner component
// const Spinner: React.FC = () => <div className={classes.spinner}></div>;

const baseUrl = "https://drop-apis.firsta.tech";
const temBaseurl = "https://dropoud-api.onrender.com";
const localBaseUrl = "http://192.168.0.102:7070";

const LoginForm: React.FC = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleUserEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    axios
      .post(`/api/v1/auth/login`, {
        email: userEmail,
        password: password,
      })
      .then((response) => {
        sessionStorage.setItem("token", response.data?.data.token);
        dispatch(login(response.data?.data));
        navigate("/dashboard");
      })
      .catch((error) => {
        setError(true);
        setErrorMessage(error.response ? error.response?.data?.message : error.message)
        setIsLoading(false);
      });
  };

  return (
    <div className={classes.login}>
      <div className={classes["error__container"]}>
        {error && (
          <Error
            errorMsg={errorMessage}
            className={classes["error__message"]}
          />
        )}
      </div>
      <div className={classes["form__container"]}>
        <div>
          <img src={Logo} alt="" className={classes.logo} />
        </div>

        <div className={classes["form__div"]}>
          <HeaderTwo text="Log in" />
          <form onSubmit={handleSubmit} className={classes["form__submit"]}>
            <p style={{ color: "#B5B5B5", padding: "10px 0" }}>
              Don't have an account?{" "}
              <Link to="/" className={classes.forgot}>
                Sign up
              </Link>
            </p>

            <div className={classes["input__div"]}>
              <Input
                type="text"
                id="username"
                value={userEmail}
                onChange={handleUserEmailChange}
                placeholder="Email or Username"
              />
              <Input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
              />
            </div>

            <Link to="/forgotpassword?" className={classes.forgot}>
              Forgot password?
            </Link>
            <button className={classes["submit-btn"]} disabled={isLoading}>
              {isLoading ? <Spinner /> : "Login"}
            </button>
          </form>
        </div>
      </div>

      <div className={classes["image-container"]}>
        <img
          src={dropoudBanner}
          className={classes["main-image"]}
          alt="banner"
        />
      </div>
    </div>
  );
};

export default LoginForm;
