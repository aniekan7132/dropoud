import  { ReactNode } from "react";
import ReactDOM from "react-dom";
// import classes from "./Modal.module.css";

const modalRootEl = document.getElementById("modal-root") as HTMLElement;

type Props = {
  children?: ReactNode;
};

const Modal = ({ children }: Props) => {
  return ReactDOM.createPortal(children, modalRootEl);
};

export default Modal;
