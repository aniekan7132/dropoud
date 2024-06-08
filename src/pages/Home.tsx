import logo from "../assets/header-logo.png";
import image from "../assets/dropoud-image.png";
import Input from "../components/Input";
import Button from "../components/ButtonComponent";
import classes from "./Home.module.css";
import { useRef, useState } from "react";
import axios from "axios";

// Default state for form data
interface DefaultState {
  user: {
    first_name: string;
    surname: string;
    email: string;
    password: string;
    phone: string;
  };
}

// Default state for input errors
const defaultErrorState = {
  firstNameError: null,
  lastNameError: null,
  emailError: null,
  passwordError: null,
  phoneError: null,
};

// Default state for signup error message if input fields is empty
interface SignupError {
  firstNameError: null | string;
  lastNameError: null | string;
  emailError: null | string;
  passwordError: null | string;
  phoneError: null | string;
}

// base url to the dropoud backend
const baseUrl = "https://drop-apis.firsta.tech";

const Home = () => {
  const [formData, setFormData] = useState<DefaultState>({
    user: {
      first_name: "",
      surname: "",
      email: "",
      password: "",
      phone: "",
    },
  });

  const formRef = useRef(null);
  const [error, setError] = useState<SignupError>(defaultErrorState);

  // Function that handles every change on input field and update input value accordingly
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setError(defaultErrorState);
    setFormData({
      user: {
        ...formData.user,
        [e.target.id]: e.target.value,
      },
    });
  };

  // Function that handles the submit action
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validating input fields
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

    // Data is sent to backend if validation conditions are met
    axios
      .post(`${baseUrl}/api/v1/users`, {
        ...formData.user,
        account_type: "Lecturer",
        title: "",
      })
      .then((response) => console.log("Posting data", response.data))
      .catch((error) => console.log(error?.response?.data));
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
            Already have an account? <span>Log in</span>
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
              placeholder="Last name"
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
              placeholder="phone number"
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
              placeholder="password"
              id="password"
              value={formData.user.password}
              onChange={handleChange}
            />
            {error && (
              <p className={`${classes["text__sm"]} ${classes.red}`}>
                {error.passwordError}
              </p>
            )}
            <Button color="primary" size="lg" type="submit">
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

export default Home;

