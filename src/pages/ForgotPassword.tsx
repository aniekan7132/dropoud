import React from "react";
import Input from "../components/Input";
import classes from "./Password.module.css";
// import Button from "../components/ButtonComponent";

const ForgotPassword = () => {
	// const [isLoading, setIsLoading] =useState(false)

	return (
		<div className={classes.forget}>
			<form action='' className={classes["forget__form"]}>
				<h3 className={classes["header"]}>Forget your password</h3>
				<p className={classes["forget__text"]}>
					Enter your email address and we will send your 4 digit code to reset
					your password
				</p>

				<div>
					<Input placeholder='Enter You Email' />
				</div>

				<div>
					<button className={classes["submit__btn"]}>
						Forgot Your Password?
					</button>
				</div>
			</form>
		</div>
	);
};

export default ForgotPassword;
