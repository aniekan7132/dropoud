import React, { useState } from "react";
import axios from "../axios/axios";
import dropoudBanner from "../assets/dropoud-banner.svg";
import Input from "../components/Input";
import Button from "../components/ButtonComponent";
import { FormEvent, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./SignUp.module.css";
import HeaderTwo from "../components/HeaderTwo";
import Error from "../components/Error";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import logo from "../assets/dropoud-logo.svg";

interface DefaultState {
  user: {
    first_name: string;
    surname: string;
    email: string;
    password: string;
    phone: string;
  };
}

const defaultErrorState = {
  firstNameError: null,
  lastNameError: null,
  emailError: null,
  passwordError: null,
  phoneError: null,
};

interface SignupError {
  firstNameError: null | string;
  lastNameError: null | string;
  emailError: null | string;
  passwordError: null | string;
  phoneError: null | string;
}

const Login = () => {
  const [formData, setFormData] = useState<DefaultState>({
    user: {
      first_name: "",
      surname: "",
      email: "",
      password: "",
      phone: "",
    },
  });
  const [errorState, setErrorState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formRef = useRef(null);
  const [error, setError] = useState<SignupError>(defaultErrorState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setError(defaultErrorState);
    setErrorState(false);
    setFormData({
      user: {
        ...formData.user,
        [e.target.id]: e.target.value,
      },
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);
    axios
      .post(`/api/v1/auth/login`, {
        email: formData.user.email,
        password: formData.user.password,
      })
      .then((response) => {
        console.log(response);
        sessionStorage.setItem("token", response.data?.data.token);
        dispatch(login(response.data?.data));
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        setErrorState(true);
        setErrorMessage(
          error.response ? error.response?.data?.message : error.message
        );
        setLoading(false);
      });
  };

  return (
    <div className={classes["signup__section"]}>
      <div className={classes["section__left"]}>
        <h1 className={classes["section__logo"]}>
          <img className="logo" src={logo} alt="page-logo" />
        </h1>
        <div
          className={`${classes["section__content"]} ${classes["section__content-login"]}`}
        >
          {errorState && (
            <Error
              errorMsg={errorMessage}
              // className={classes["error__message"]}
            />
          )}
          <HeaderTwo text="Login" />
          <p className={classes["text__sm"]}>
            Are you new? <Link to="/">Signup</Link>
          </p>
          <form
            ref={formRef}
            onSubmit={(e) => onSubmit(e)}
            className={classes["section__form"]}
          >
            <Input
              type="email"
              placeholder="Email"
              id="email"
              value={formData.user.email}
              onChange={handleChange}
            />
            {error && (
              <p className={`${classes["text__sm"]} ${classes.red}`}>
                {error.emailError}
              </p>
            )}

            <Input
              type="password"
              placeholder="Password"
              id="password"
              value={formData.user.password}
              onChange={handleChange}
            />
            {error && (
              <p className={`${classes["text__sm"]} ${classes.red}`}>
                {error.passwordError}
              </p>
            )}
            <div className={classes["button__max-width"]}>
              <Button
                color="primary"
                size="mobile"
                type="submit"
                onClick={onSubmit}
              >
                {loading ? "Please wait..." : "Login"}
              </Button>
            </div>
          </form>
          <p className={classes["text__sm-policy"]}>
            Signing up for a Dropoud account means you agree to
            <Link to=""> Privacy Policy </Link>
            and <Link to="">Terms of Services</Link>
          </p>
        </div>
      </div>

      <div className={classes["section__right"]}>
        <img src={dropoudBanner} alt="" />
      </div>
    </div>
  );
};

export default Login;
