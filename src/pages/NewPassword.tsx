import React, { useState } from "react";
import Input from "../components/Input";
import classes from "./Newpassword.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const baseurl = "https://drop-apis.firsta.tech";

const NewPassword = () => {
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
	const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
		setIsLoading(true);

        if (password !== repeatPassword) {
            setErrorMessage("Passwords do not match!");
            return;
        }

        try {
            const response = await axios.post(`${baseurl}/api/v1/auth/update-password`, {
                password: password
            });

            if (response.data.success) {
                dropoudToast.success("Password updated successfully");
                navigate("/login"); // Redirect to login or any other appropriate page
            } else {
                dropoudToast.error("An error occurred. Please try again.");
            }
        } catch (error) {
            dropoudToast.error(error.response?.data?.message || "An error occurred. Please try again.");
            console.log(error);
        } finally {
			setIsLoading(false);
		}
    }

    return (
        <div className={classes["new__container"]}>
            <form className={classes["forget__form"]} onSubmit={handleSubmit}>
                <h3 className={classes["header"]}>New password</h3>

                {errorMessage && <p className={classes["error"]}>{errorMessage}</p>}

                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={classes["password__input"]}
                    placeholder='New Password'
                />
                <Input
                    type="password"
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    className={classes["password__input"]}
                    id={classes["repeat"]}
                    placeholder='Repeat password'
                />

                <button className={classes["submitbtn"]}>
					{isLoading ? <Spinner /> : "Continue"}
				</button>
				
            </form>
        </div>
    );
};

export default NewPassword;
