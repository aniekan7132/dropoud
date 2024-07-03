import React, { useState } from "react";
import dropoudBanner from "../assets/dropoud-banner.svg";
import Logo from "../assets/dropoud-logo.svg";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import google from "../assets/google.png";
import classes from "./Login.module.css";

interface LoginForm {
  onSubmit?: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginForm> = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // onSubmit(username, password);


  };

  return (
    <div className={classes.login}>
      <div className={classes["image-container"]}>
        <img src={dropoudBanner} className={classes["main-image"]} alt="banner" />
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
              value={username}
              onChange={handleUsernameChange}
              placeholder="email or username"
            />
          </div>
          <div>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="password"
            />
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
