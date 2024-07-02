import React from "react";
import Input from "../components/Input";
import classes from "./Password.module.css";
import { useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";
// import Button from "../components/ButtonComponent";

const baseUrl = "https://drop-apis.firsta.tech";


const ForgotPassword: React.FC = () => {
	// const [isLoading, setIsLoading] =useState(false)

	




	const navigate = useNavigate();

	const handlePush = () => {
		navigate("/email-verification/:email");
	};

	return (
		<div className={classes.forget}>
			<form action='' className={classes["forget__form"]}>
				<h3 className={classes["header"]}>Forget your password</h3>
				<p className={classes["forget__text"]}>
					Enter your email address and we will send your 4 digit code to reset
					your password
				</p>

				<Input
					className={classes["email__input"]}
					placeholder='Enter You Email'
				/>

				{/* <Link to='/email-verification/:email'> */}
				<button className={classes["submit__btn"]} onClick={handlePush}>
					Forgot Your Password??
				</button>
				{/* </Link> */}
			</form>
		</div>
	);
};

export default ForgotPassword;
