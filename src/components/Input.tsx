import React from "react";
import "./Input.module.css";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {};

interface InputProps extends Props {
  className?: string;
}

const Input = (props: InputProps) => {
  return (
    <>
      <input {...props} />
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
