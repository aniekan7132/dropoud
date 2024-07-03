import React, { useState } from "react";
import Input from "../components/Input";
import classes from "./Password.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import dropoudToast from "../utilities/dropoudToast";
import Spinner from "../components/Spinner";

const baseurl = "https://drop-apis.firsta.tech";

const ForgotPassword: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
		
        try {

            await axios.get(`${baseurl}/api/v1/auth/forgot-password/${email}`)
			.then((response) => {
				
				if (response.data.success) {
					dropoudToast.success("OTP sent successfully");	
					navigate(`/email-verification/${email}`);
				} else {
					dropoudToast.error("An error occurred. Please try again.");
				}
				console.log(response);
			})
        } 
		
		catch (error) {
            dropoudToast.error(error.response?.data?.message || "An error occurred. Please try again.");
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className={classes.forget}>
            <form className={classes["forget__form"]} onSubmit={handleSubmit}>
                <h3 className={classes["header"]}>Forget your password</h3>
                <p className={classes["forget__text"]}>
                    Enter your email address and we will send your 4 digit code to reset your password
                </p>

                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={classes["email__input"]}
                    placeholder='Enter Your Email'
                />

                <button className={classes["submit__btn"]} type="submit" >
                    {isLoading ? <Spinner /> : "Send OTP"}
                </button>
            </form>
        </div>
    );
};

export default ForgotPassword;
