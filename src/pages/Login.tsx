import React, { useState } from "react";
import Image from "../assets/dropoud-image.png";
import Logo from "../assets/header-logo.png";
import "./index.css";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import google from "../assets/google.png";

interface LoginForm {
  onSubmit: (username: string, password: string) => void;
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
    onSubmit(username, password);
  };

  return (
    <div className="login">
      <div className="image-container">
        <img src={Image} className="main-image" alt="" />
      </div>
      <div className="form-container">
  
        <form onSubmit={handleSubmit}>
          <img src={Logo} alt="" className="logo" />
          <h2>Login</h2>
          <p style={{ color: "  #B5B5B5" }}>
            Don't have an account?{" "}
            <Link to="/" className="forgot">
              Sign up
            </Link>
          </p>
          <div>
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
          <Link to="" className="forgot">
            Forgot password?
          </Link>
          <button className="submit-btn" type="submit">
            Login
          </button>
          <p className="or">or</p>

          <button className="google-btn">
            <img src={google} alt="Google logo" className="google-logo" />
            Login with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
