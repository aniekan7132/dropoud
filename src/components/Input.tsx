import React from "react";
import classes from "./Input.module.css";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface InputProps extends Props {
  className?: string;
  width?: string
}

const Input = (props: Props, {width}: InputProps) => {
  return (
    <>
      <input className={classes.input}  {...props} width={width ? width : ""} />
    </>
  );   

};

export default Input;


