// import { FC } from "react";
import React from "react";

type ButtonProps = {
  size?: "sm" | "md" | "lg" | "bigsm" | "smlg";
  color?: "primary" | "secondary";
  children?: string;
  type?: "submit" | "button";
  onClick?: (e: any) => void;
  className?: string
};

function Button({size = "sm", color = "primary", children, type, className, onClick}: ButtonProps) {
  const functionForSize = (size: string) => {
    if(size === "sm") {
    return {
      height: "48px",
      width: "142px",
      borderRadius: "16px",
      border: "1px solid #5353AA",
      color: "#5353AA",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "20px",
      padding: "16px 2px 16px 24px",
      cursor: "pointer"
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
        cursor: 'pointer',
        fontSize: "16px",
        lineHeight: "20px",
        fontWeight: "400",
        outline: "none"
      };
    }
    if (size === "bigsm") {
      return {
        height: "48px",
        // width: "213px",
        // borderRadius: "16px",
        border: "1px solid #5353AA",
        color: "#ffffff",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "20px",
        padding: "16px 24px 16px 24px",
        cursor: "pointer",
      };
    }
    if (size === "smlg") {
      return {
        height: "56px",
        width: "213px",
        borderRadius: "16px",
        border: "1px solid #5353AA",
        color: "#ffffff",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "20px",
        padding: "16px 24px 16px 24px",
        cursor: "pointer",
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
        backgroundColor: "#FFFFFF",
      };
    }
  }

  return (
    <button type={type} className={className ? className : "btn"} style={{...functionForSize(size), ...functionForColor(color)}} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
