import logo from "../assets/dropoud-logo.svg";
import dropoudBanner from "../assets/dropoud-banner.svg";
import Input from "../components/Input";
import Button from "../components/ButtonComponent";
import { FormEvent, useEffect, useRef, useState } from "react";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./SignUp.module.css";
import HeaderTwo from "../components/HeaderTwo";
import Error from "../components/Error";

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

const baseUrl = "http://drop-apis.firsta.tech";
const temBaseurl = "https://dropoud-api.onrender.com";
const localBaseUrl = "http://192.168.0.102:7070";

const SignUp = () => {
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

const [loading, setLoading] = useState(false)

  const navigate = useNavigate();

  const formRef = useRef(null);
  const [error, setError] = useState<SignupError>(defaultErrorState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setError(defaultErrorState);
    setFormData({
      user: {
        ...formData.user,
        [e.target.id]: e.target.value,
      },
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (formData.user.first_name === "") {
      setError({ ...error, firstNameError: "First name is required." });
      console.log(error.firstNameError);
    }
    if (formData.user.surname === "") {
      setError({ ...error, lastNameError: "Last name is required." });
    }
    if (formData.user.email === "") {
      setError({ ...error, emailError: "Email is required." });
    }
    if (formData.user.password === "") {
      setError({ ...error, passwordError: "Password is required." });
    }
    if (formData.user.password.length < 8) {
      setError({ ...error, passwordError: "Must be at least 8 characters." });
    }
    if (formData.user.phone === "") {
      setError({ ...error, phoneError: "Phone number is required." });
    }
setLoading(true)
    axios
      .post(`${localBaseUrl}/api/v1/users`, {
        ...formData.user,
        account_type: "Lecturer",
        title: "",
      })
      .then((response) => {
        console.log("Posting data", response.data);
        navigate("/email-verification/" + formData.user.email);
      })
      .catch((error) => {
        console.log(error);
        setErrorState(true)
        setErrorMessage(error?.response?error.response.data.message:'Network error')
      }).finally(()=>{
        setLoading(false)
      })

    //   sessionStorage.setItem("email", JSON.stringify(formData.user.email));
    //   if(formData.user.first_name && formData.user.surname && formData.user.email && formData.user.password && formData.user.phone) {
    //     //navigate("/email-verification");
    //   } else {
    //     setError(error);
    //   }
    //navigate("/email-verification/" + formData.user.email);
  };

  return (
    <div className={classes["signup__section"]}>
      <div className={classes["section__left"]}>

        <h1 className={classes["section__logo"]}>
          <img className="logo" src={logo} alt="page-logo" />
        </h1>
        <div className={classes["section__content"]}>
        {errorState && (
          <Error
            errorMsg={errorMessage}
            className={classes["error__message"]}
          />
        )}
          <HeaderTwo text="Create Account" />
          <p className={classes["text__sm"]}>
            Already have an account? <Link to="/sign-in">Log in</Link>
          </p>
          <form
            ref={formRef}
            onSubmit={(e) => onSubmit(e)}
            className={classes["section__form"]}
          >
            <Input
              type="text"
              placeholder="First name"
              id="first_name"
              value={formData.user.first_name}
              onChange={handleChange}
            />
            {error && (
              <p className={`${classes["text__sm"]} ${classes.red}`}>
                {error.firstNameError}
              </p>
            )}
            <Input
              type="text"
              placeholder="Surname"
              id="surname"
              value={formData.user.surname}
              onChange={handleChange}
            />
            {error && (
              <p className={`${classes["text__sm"]} ${classes.red}`}>
                {error.lastNameError}
              </p>
            )}
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
              type="text"
              placeholder="Phone number"
              id="phone"
              value={formData.user.phone}
              onChange={handleChange}
            />
            {error && (
              <p className={`${classes["text__sm"]} ${classes.red}`}>
                {error.phoneError}
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
            <Button color="primary" size="mobile" type="submit" onClick={onSubmit}>
             {loading?'Please wait...':'Create Account'}
            </Button>
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

export default SignUp;

