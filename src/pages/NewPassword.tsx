import React from "react";
import Input from "../components/Input";
import classes from "./Newpassword.module.css";

const NewPassword = () => {
	return (
		<div className={classes["new__container"]}>
			<form action='' className={classes["forget__form"]}>
				<h3 className={classes["header"]}>New password</h3>

				<Input
					className={classes["password__input"]}
					placeholder='New Password'
				/>
				<Input
					className={classes["password__input"]}
					id={classes["repeat"]}
					placeholder='Repeat passwor'
				/>

				{/* <Link to='/email-verification/:email'> */}
				<button className={classes["submitbtn"]}>Continue</button>
				{/* </Link> */}
			</form>
		</div>
	);
};

export default NewPassword;
