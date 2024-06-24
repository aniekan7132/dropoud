import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Toaststyles.css"; // Import your custom styles
import errorIcon from "../assets/errorIcon.svg";
import React from "react";
class Toast {
	error(Message: string = "") {
		toast.error(Message, {
			className: "custom-toast-error",
			bodyClassName: "custom-toast-body",
			progressClassName: "custom-toast-progress",
			icon: (
				<div>
					<img src={errorIcon} alt='error' />
				</div>
			),
		});
	}

	success(Message: string = "") {
		toast.success(Message, {
			className: "custom-toast-success",
			bodyClassName: "custom-toast-body",
			progressClassName: "custom-toast-progress",
		});
	}
}

const dropoudToast = new Toast();

export default dropoudToast;
