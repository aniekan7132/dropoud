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

const Input = (props: Props, {className, width}: InputProps) => {
  console.log(className)
  return (
    <>
      <input className={classes.input}  {...props} width={width ? width : ""} />
    </>
  );   

};

export default Input;


/*
export default function Input({ label, id, error, ...props}) {
  return (
    <div className="control no-margin">
    <label htmlFor={id}>{label}</label>
    <input 
    id={id}
    {...props}
    />
    {error && <p>{error}</p>}
    </div>
  )
}
 */
