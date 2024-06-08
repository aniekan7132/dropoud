// import { FC } from "react";
import React from "react";

type ButtonProps = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: string;
  type?: "submit";
  onClick?: () => {};
};

function Button({size = "sm", color = "primary", children, type, onClick}: ButtonProps) {
  const functionForSize = (size: string) => {
    if(size === "sm") {
    return {
      height: "36px",
      width: "52px",
    };
    }
    if(size === 'md'){
      return {
        height: "56px",
        width: "452px",
        borderRadius: "16px",
        border: "1px solid #5353AA",
        color: "#F8F8F8",
        cursor: "pointer"
      };
    }
    if(size === "lg"){
      return {
        height: "56px",
        width: "460px",
        borderRadius: "16px",
        border: "1px solid #5353AA",
        color: "#F8F8F8",
        cursor: 'pointer'
      };
    }
  }

  const functionForColor = (color: "primary" | "secondary") => {
    if(color === "primary") {
      return {
        backgroundColor: "#5353AA"
      }
    }
    if(color === "secondary") {
      return {
        backgroundColor: "#FF5656",
      };
    }
  }

  return (
    <button type={type} className="btn" style={{...functionForSize(size), ...functionForColor(color)}} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
