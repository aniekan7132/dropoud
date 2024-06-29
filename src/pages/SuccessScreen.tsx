import React from "react";
import classes from "./Newpassword.module.css";
import { Link } from "react-router-dom";

const SuccessScreen = () => {
	return (
		<div className={classes["new__container"]}>
			<div className={classes["success"]}>
				<h3 className={classes["sub"]}>
					You have successfully reset your password{" "}
				</h3>
				<Link to='/sign-in' className={classes["text__sub"]}>
					<p className={classes["text__sub"]}>Back to Log in</p>
				</Link>
			</div>
		</div>
	);
};

export default SuccessScreen;
