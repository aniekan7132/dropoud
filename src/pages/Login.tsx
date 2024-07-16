import React, { useState, useContext } from "react";
import dropoudBanner from "../assets/dropoud-banner.svg";
import Logo from "../assets/dropoud-logo.svg";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import google from "../assets/google.png";
import classes from "./Login.module.css";
import AuthContext from "../context/AuthProvider";
import axios from "axios";

const defaultErrorState = {
  usernameError: null,
  passwordError: null,
};

interface LoginError {
  usernameError: null | string;
  passwordError: null | string;
}

interface LoginForm {
  onSubmit?: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginForm> = () => {
  // const { setAuth } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<LoginError>(defaultErrorState);

  const LOGIN_URL = "/api/v1/auth/login";

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value);
    setError(defaultErrorState);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setError(defaultErrorState);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // onSubmit(username, password);

    if (userEmail === "") {
      setError({ ...error, usernameError: "Email is required" });
    }

    if (password === "") {
      setError({ ...error, passwordError: "Password is required" });
    }

    try {
      const response = await axios.post(LOGIN_URL, { email: userEmail, password: password });
      setUserEmail("");
      setPassword("");
    } catch (err) {}
  };

  return (
    <div className={classes.login}>
      <div className={classes["image-container"]}>
        <img
          src={dropoudBanner}
          className={classes["main-image"]}
          alt="banner"
        />
      </div>
      <div className={classes["form-container"]}>
        <form onSubmit={handleSubmit} className={classes["form__submit"]}>
          <img src={Logo} alt="" className={classes.logo} />
          <h2>Login</h2>
          <p style={{ color: "  #B5B5B5" }}>
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
              onChange={handleUsernameChange}
              placeholder="email or username"
            />
            {error && <p>{error.usernameError}</p>}
          </div>
          <div>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="password"
            />
            {error && <p>{error.passwordError}</p>}
          </div>

          <Link to="" className={classes.forgot}>
            Forgot password?
          </Link>
          <button className={classes["submit-btn"]} type="submit">
            Login
          </button>
          <p className={classes.or}>or</p>

          <button className={classes["google-btn"]}>
            <img
              src={google}
              alt="Google logo"
              className={classes["google-logo"]}
            />
            Login with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
