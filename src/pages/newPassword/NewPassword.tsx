import React, { FormEvent, useState } from "react";
import Input from "../../components/Input";
import classes from "./Newpassword.module.css";
import axios from "../../axios/axios";
import { useNavigate } from "react-router-dom";
import HeaderTwo from "../../components/HeaderTwo";
//import Button from "../../components/ButtonComponent";
import Error from "../../components/Error";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

interface Passwords {
  allPasswords: {
    currentPassword: string;
    newPassword: string;
    repeatPassword: string;
  };
}

// {
//   password,
//   // repeatPassword,
//   onChange,
// }: NewPasswordProp

const NewPassword = () => {
  const user = useSelector(selectUser);

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [changePassword, setChangePassword] = useState<Passwords>({
    allPasswords: {
      currentPassword: "",
      newPassword: "",
      repeatPassword: "",
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setChangePassword({
      allPasswords: {
        ...changePassword.allPasswords,
        [e.target.id]: e.target.value,
      },
    });
  };

  const handlePasswordSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

      axios
        .post(`/api/v1/auth/reset`, {
          email: user?.email,
          code: changePassword.allPasswords.currentPassword,
          newPassword: changePassword.allPasswords.newPassword,
        })
        .then(() => {
          navigate("/password-changed");
        })
        .catch((error) => {
          setIsLoading(false);
          setError(true);
          setErrorMessage(
            error?.response ? error?.response.data.message : "Network Error"
          );
        });
  };

  return (
    <div className={classes["new__container"]}>
      <form className={classes["forget__form"]} onSubmit={handlePasswordSubmit}>
        <HeaderTwo text="New Password" />

        {error && <Error errorMsg={errorMessage} />}

        <Input
          type="password"
          value={changePassword.allPasswords.currentPassword}
          id="currentPassword"
          onChange={handleInputChange}
          placeholder="Enter Current Password"
        />
        <Input
          type="password"
          value={changePassword.allPasswords.newPassword}
          id="newPassword"
          onChange={handleInputChange}
          placeholder="New Password"
        />
        <Input
          type="password"
          value={changePassword.allPasswords.repeatPassword}
          id="repeatPassword"
          onChange={handleInputChange}
          placeholder="Repeat password"
        />

        <button
          color="primary"
          type="submit"
          className={classes["new__password-btn"]}
        >
          {isLoading ? "Please wait..." : "Continue"}
        </button>
      </form>
    </div>
  );
};

export default NewPassword;
