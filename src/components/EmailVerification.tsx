import React, { useEffect, useRef, useState } from "react";
//import Input from "./Input";
import Error from "./Error";
import classes from "./EmailVerification.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const EmailVerification = () => {
  const [otp, setOtp] = useState("");
  const [seconds, setSeconds] = useState(10);
  const [minutes, setMinutes] = useState(0);
  const [sendOtp, setSendOtp] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const inputRef = useRef<HTMLInputElement | null>(null);
  const inputRef2 = useRef<HTMLInputElement | null>(null);
  const inputRef3 = useRef<HTMLInputElement | null>(null);
  const inputRef4 = useRef<HTMLInputElement | null>(null);

  const baseUrl = "https://drop-apis.firsta.tech";

  const params = useParams();
  const emailUrl = params.email;

  useEffect(() => {
    const interval = setInterval(() => {
      // Decrease seconds if seconds is greater than zero
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      // When seconds reaches zero, decrease minutes if greater than zero
      if (seconds === 0) {
        if (minutes === 0) {
          // Stop the countdown when both minutes and seconds are zero
          clearInterval(interval);
          setSendOtp(true);
        } else {
          // Reset seconds to 59 and decrease minute by 1
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      // Cleanup: stop the interval when the component unmount
      clearInterval(interval);
    };
  }, [seconds]); // Re-run this effect whenever "seconds" changes

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  //const inputEmail = sessionStorage.getItem("email");

  const onOtpSubmit = (e: React.FormEvent, value: string) => {
    e.preventDefault();

    axios
      .post(`${baseUrl}/api/v1/auth/verify`, {
        email: emailUrl,
        code: value,
      })
      .then((response) => {
        console.log("Posting OTD code...", response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    //inputRef2.current?.focus();
    if (!value) return;

    setOtp(otp + value);

    // Move to next input if current field is filled
    if (value && inputRef2.current) {
      inputRef2.current.focus();
    }
  };

  const handleChangeTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!value) return;

    setOtp(otp + value);

    if (value && inputRef3.current) {
      inputRef3.current.focus();
    }
  };

  const handleChangeThree = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!value) return;

    setOtp(otp + value);

    if (value && inputRef4.current) {
      inputRef4.current.focus();
    }
  };

  const handleChangeFour = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!value) return;

    setOtp(otp + value);

    if (value && inputRef4.current) {
      onOtpSubmit(e, value)
    }
  };

  const resendOtp = () => {
    setSeconds(10);
    setMinutes(0);
    setSendOtp(false);
    //drop-apis.firsta.tech/api/v1/auth/verify/saniekan32@gmail.com

    axios
      .get(`${baseUrl}/api/v1/auth/verify/${emailUrl}`)
      .then((response) => {
        console.log("Getting Otp", response);
      })
      .catch((error) => {
        console.log(error);
        setErrorMsg(error?.message);
        //setSendOtp(false);
      });
  };

  return (
    <div className={classes["main__container"]}>
      {errorMsg && <Error errorMsg={errorMsg} />} 
      <div className={classes["sub__container"]}>
        <h5>Enter the 4 digit code</h5>
        <p className={classes["otp__text-bg"]}>
          We've sent a verification code to{`${emailUrl}`}. Please check your
          email, including the spam folder
        </p>

        <div className={classes["input__container"]}>
        {/*@ts-ignore */}
          <form onSubmit={(e) => onOtpSubmit(e)} className={classes["otp__form"]}>
            <input
              type="text"
              className={classes["otp__input"]}
              ref={inputRef}
              maxLength={1}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="number"
              className={classes["otp__input"]}
              ref={inputRef2}
              maxLength={1}
              onChange={(e) => handleChangeTwo(e)}
            />
            <input
              type="number"
              className={classes["otp__input"]}
              ref={inputRef3}
              maxLength={1}
              onChange={(e) => handleChangeThree(e)}
            />
            <input
              type="number"
              className={classes["otp__input"]}
              ref={inputRef4}
              maxLength={1}
              onChange={(e) => handleChangeFour(e)}
            />
          </form>

          <div className={classes["container__sm-text"]}>
            {seconds === 0 ||
              (minutes === 0 && (
                <p className={classes["otp__text-sm"]}>
                  This code will expire in{" "}
                  <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
                  <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
                </p>
              ))}

            {sendOtp && (
              <p className={classes["otp__text-sm"]}>
                Didn't recieve a code,{" "}
                <button type="button" onClick={resendOtp}>
                  Resend Code
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;

/*<input
              type="text"
              className={classes["otp__input"]}
              maxLength={1}
              autoFocus
            />
            <input
              type="text"
              className={classes["otp__input"]}
              maxLength={1}
            />
            <input
              type="text"
              className={classes["otp__input"]}
              maxLength={1}
            />
            <input
              type="text"
              className={classes["otp__input"]}
              maxLength={1}
            />*/

{
  /* {otp.map((value, index) => {
              return (
                <input
                  type="number"
                  key={index}
                  value={value}
                  ref={(input) => (inputRefs.current[index] = input)}
                  onChange={(e) => handleChange(index, e)}
                  onClick={() => {
                    handleClick(index);
                  }}
                  onKeyDown={() => handleClick(index, e)}
                  className={classes["otp__input"]}
                />
              );
            })} */
}

// Optional
// if (index > 0 && !otp[index - 1])
//   inputRefs.current[otp.indexOf("")].focus();

// Allow only one input
// newOtp = value.substring(value.length - 1);
// setOtp(newOtp);

// Submit trigger
// const combinedOtp = newOtp.join("");
// if (combinedOtp.length === length) onOtpSubmit(combinedOtp);

// if (value && inputRef3.current) {
//   inputRef3.current.focus();
// }

// if (value && inputRef4.current) {
//   inputRef4.current.focus();
// }

//   if (value && index < length - 1 && inputRefs.current[index + 1]) {
//     inputRefs.current[index + 1].focus();
// }

/*const handleClick = (index) => {
        inputRef.current[index + 1].setSelectionRange(1, 1);
      };

      const handleKeyDown = (index, e) => {
        if (
          e.key === "Backspace" &&
          !otp[index] &&
          index > 0 &&
          inputRefs.current[index - 1]
        ) {
          // Move focus to the previous input field on Backspace
          inputRefs.current[index - 1].focus;
        }
      };*/