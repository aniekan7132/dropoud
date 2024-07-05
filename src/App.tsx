import React from "react";
import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Button from "./components/ButtonComponent";
// import Input from "./components/Input";
import SignUp from "./pages/SignUp";
import "./App.css";
import "./index.css";
import EmailVerification from "./components/EmailVerification";
// import { BrowserRouter } from "react-router-dom";
import LoginForm from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword.tsx";
import ThankYou from "./components/ThankYou";
import SuccessScreen from "./pages/SuccessScreen.tsx";
import Home from "./pages/home/Home";
import Content from "./pages/content/Content";
import Notification from "./pages/Notification/Notification.tsx";
// import PopUp from "./components/PopUp";
// import PopUpInput from "./components/PopUpInput";
import Wallet from "./pages/wallet/Wallet";

const App: FC = () => {





	return (
		// <EmailVerification />
		<>
			<Router>
				<Routes>
          <Route path="/home" element={<Home />} />
					<Route path='/sign-up' element={<SignUp />} />
					<Route path='/sign-in' element={<LoginForm />} />
					<Route
						path='/email-verification/:email'
						element={<EmailVerification />}
					/>
					<Route path='thank' element={<ThankYou />} />
					<Route path='forgotpassword?' element={<ForgotPassword />} />
					<Route path='newpassword' element={<NewPassword />} />
					<Route path='success' element={<SuccessScreen />} />
					<Route path="/notification" element={<Notification />} />
          <Route path="/content" element={<Content />} />
          <Route path="/wallet" element={<Wallet />} />
				</Routes>
			</Router>
		</>
	);

}

export default App;