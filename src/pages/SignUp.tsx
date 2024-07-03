import logo from "../assets/header-logo.png";
import image from "../assets/dropoud-image.png";
import Input from "../components/Input";
import Button from "../components/ButtonComponent";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./SignUp.module.css";

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

const baseUrl = "https://drop-apis.firsta.tech";

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

  const onSubmit = (e: any) => {
    e.preventDefault();response

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

    axios
      .post(`${baseUrl}/api/v1/users`, {
        ...formData.user,
        account_type: "Lecturer",
        title: "",
      })
      .then((response) => {
        console.log("Posting data", response.data);
        navigate("/email-verification/" + formData.user.email);
      })
      .catch((error) => {
        console.log(error?.response?.data);
        navigate("/email-verification/" + formData.user.email);
      });

    //   sessionStorage.setItem("email", JSON.stringify(formData.user.email));
    //   if(formData.user.first_name && formData.user.surname && formData.user.email && formData.user.password && formData.user.phone) {
    //     //navigate("/email-verification");
    //   } else {
    //     setError(error);
    //   }
  };

  return (
    <div className={classes["home__section"]}>
      <div className={classes["section__left"]}>
        <h1 className={classes["section__logo"]}>
          <img className="logo" src={logo} alt="" />
        </h1>
        <div className={classes["section__content"]}>
          <h2 className={classes["text-bg"]}>Create Account</h2>
          <p className={classes["text__sm"]}>
            Already have an account? <Link to="sign-in">Log in</Link>
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
            <Button color="primary" size="lg" type="submit" onClick={onSubmit}>
              Create Account
            </Button>
          </form>
          <p className={classes["text__sm-policy"]}>
            Signing up for a Dropoud account means you agree to
            <span> Privacy Policy </span>
            and <span>Terms of Services</span>
          </p>
        </div>
      </div>

      <div className={classes["section__right"]}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default SignUp;

// if (!formData.confirmPassword.trim()) {
//   formRef.current.confirmPassword.classList.add("error");
//   setErrors({ confirmPassword: "Password is required." });
//   return isError;
// } else if (formData.password !== formData.confirmPassword) {
//   formRef.current.confirmPassword.classList.add("error");
//   setErrors({
//     confirmPassword: "Password do not match.",
//   });
//   return isError;
// }

/*
    const validateForm = (formData, formRef, setErrors) => {
    // if there is any error
    let isError = true;

    if (!formData.firstName.trim()) {
      formRef.current.firstName.classlist.add("error");
      setErrors({ firstName: "First name is Required." });
      return isError;
    }

    if (!formData.email) {
      formRef.current.email.classlist.add("error");
      setErrors({ email: "Email is required" });
      return isError;
    } else if (!isEmailValid(formData.email)) {
      formRef.current.email.classList.add("error");
      setErrors({ email: "Email is  required."})
      return isError;
    }

    if(!formData.password.trim()){
      formRef.current.password.classList.add("error");
      setErrors({ password: "Password is  required." });
      return isError;
    }else if(formData.password.length < 8) {
      formRef.current.password.classList.add("error");
      setErrors({ password: "Password must be be atleast 8 characters blong." });
      return isError;
    }


    return (isError = false);
  };

  const isEmailValid = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

 */

// Must be at least 8 characters.

//   async function sendData() {
//   fetch("", {
//     method: "PUT",
//     body: JSON.stringify()
//     headers: {
//       "Content-Type": "application/json",
//     }
//   })
// }
