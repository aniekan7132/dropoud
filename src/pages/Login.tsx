import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "../assets/dropoud-image.png";
import Logo from "../assets/header-logo.png";
import Input from "../components/Input";
import classes from "./Login.module.css";
import dropoudToast from "../utilities/dropoudToast";
import "../utilities/Toaststyles.css";

// Spinner component
const Spinner: React.FC = () => <div className={classes.spinner}></div>;

const baseUrl = "https://drop-apis.firsta.tech";

const LoginForm: React.FC = () => {
	const [userEmail, setUserEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const handleUserEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserEmail(e.target.value);
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			const response = await axios.post(`${baseUrl}/api/v1/auth/login`, {
				email: userEmail,
				password: password,
			});

			if (response.data.success) {
				// Navigate to the dashboard if login is successful
				dropoudToast.success("Login Successful");
				navigate("/dashboard");
			} else {
				dropoudToast.error("An error occurred. Please try again.");
			}
		} catch (error) {
			dropoudToast.error(error.response.data.message);
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className={classes.login}>
			<div className={classes["image-container"]}>
				<img src={Image} className={classes["main-image"]} alt='banner' />
			</div>
			<div className={classes["form-container"]}>
				<form onSubmit={handleSubmit} className={classes["form__submit"]}>
					<img src={Logo} alt='' className={classes.logo} />
					<ToastContainer className={classes["toast-position"]} />
					<h2>Login</h2>
					<p style={{ color: "#B5B5B5", padding: "10px 0" }}>
						Don't have an account?{" "}
						<Link to='/' className={classes.forgot}>
							Sign up
						</Link>
					</p>

					<div className={classes["input__div"]}>
						<Input
							type='text'
							id='username'
							value={userEmail}
							onChange={handleUserEmailChange}
							placeholder='Email or Username'
						/>
					</div>
					<div className={classes["input__div"]}>
						<Input
							type='password'
							id='password'
							value={password}
							onChange={handlePasswordChange}
							placeholder='Password'
						/>
					</div>

					<Link to='/forgotpassword?' className={classes.forgot}>
						Forgot password?
					</Link>
					<button
						className={classes["submit-btn"]}
						type='submit'
						disabled={isLoading}>
						{isLoading ? <Spinner /> : "Login"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
