import React, { useEffect, useRef, useState } from "react";
//import Input from "./Input";
import Error from "./Error";
import classes from "./EmailVerification.module.css";

const EmailVerification = () => {
  const [otp, setOtp] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const inputRef2 = useRef<HTMLInputElement | null>(null);
  const inputRef3 = useRef<HTMLInputElement | null>(null);
  const inputRef4 = useRef<HTMLInputElement | null>(null);
  console.log(inputRef);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

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

    if(!value) return;

    setOtp(otp + value);

    if(value && inputRef3.current) {
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

  const onOtpSubmit = () => {};

  return (
    <div className={classes["main__container"]}>
      <Error />
      <div className={classes["sub__container"]}>
        <h5>Enter the 4 digit code</h5>
        <p className={classes["otp__text-bg"]}>
          We've sent a verification code to Erimemmanuel@gmail.ccom Please check
          your email, including the spam folder
        </p>

        <div className={classes["input__container"]}>
          <form onSubmit={onOtpSubmit}>
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
            />
          </form>

          <div className={classes["container__sm-text"]}>
            <p className={classes["otp__text-sm"]}>
              This code will expire in 20 minutes
            </p>
            <p className={classes["otp__text-sm"]}>
              Didnt't recieve a code, <span>send code</span>
            </p>
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