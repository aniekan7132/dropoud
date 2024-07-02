import React, { useState } from "react";
import Input from "../components/Input";
import classes from "./Password.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import dropoudToast from "../utilities/dropoudToast";
import Spinner from "../components/Spinner";
// import { Link } from "react-router-dom";
// import Button from "../components/ButtonComponent";

const baseurl = "https://drop-apis.firsta.tech";




const ForgotPassword: React.FC = () => {
	const [isLoading, setIsLoading] =useState(false)

	const [email, setEmail] = useState("");

	




	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			const response = await axios.post(`${baseurl}/api/v1/auth/forgot-password/example@dropoud.com`, {
				email: email,
			});

			if (response.data.success) {
				// Navigate to the dashboard if login is successful
				// dropoudToast.success("Login Successful");
				dropoudToast.success("OTP sent successfully");
				navigate("/email-verification/:email");
			} else {
				dropoudToast.error("An error occurred. Please try again.");
			}
		} catch (error) {
			// setErrorMessage(error.response.data.message);
			dropoudToast.error(error.response.data.message);
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}

	

	return (
		<div className={classes.forget}>
			<form action='' className={classes["forget__form"]}>
				<h3 className={classes["header"]}>Forget your password</h3>
				<p className={classes["forget__text"]}>
					Enter your email address and we will send your 4 digit code to reset
					your password
				</p>

				<Input
				value={email}
				onChange={(e) => setEmail(e.target.value)}
					className={classes["email__input"]}
					placeholder='Enter You Email'
				/>

				{/* <Link to='/email-verification/:email'> */}
				<button className={classes["submit__btn"]} onClick={handleSubmit}>
					{isLoading ? <Spinner /> : "Send OTP"}	
				</button>
				{/* </Link> */}
			</form>
		</div>
	);
};

export default ForgotPassword;
