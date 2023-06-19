import React, { useState } from "react";
import { Link } from "react-router-dom";
import EmailInput from "../../Inputs/EmailInput";
import PasswordInput from "../../Inputs/PasswordInput";
import LoginButton from "../../Buttons/LoginButton";
import GoogleSiginInButton from "../../Buttons/GoogleSigiInButton";
import TextInput from "../../Inputs/TextInput";
import styles from "./SignUpForm.module.scss";

export const SignUpForm = () => {
  const [singUp, setSingUp] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <>
      <form className={styles.formContainer}>
        <div className={styles.inputBlock}>
          <label> Email Address</label>
          <TextInput
            onChange={({ target: { value } }) =>
              setSingUp({ ...singUp, name: value })
            }
            placeHolder="Your name"
            value={singUp.name}
          />
        </div>
        <div className={styles.inputBlock}>
          <label> Email Address</label>
          <EmailInput
            onChange={({ target: { value } }) =>
              setSingUp({ ...singUp, email: value })
            }
            placeHolder="Email Address"
            value={singUp.email}
          />
        </div>
        <div className={styles.inputBlock}>
          <div className={styles.labelWrapper}>
            <label>Password</label>
          </div>
          <PasswordInput
            onChange={({ target: { value } }) =>
              setSingUp({ ...singUp, password: value })
            }
            value={singUp.password}
            placeHolder="Password"
          />
        </div>
        <div className={styles.buttonsection}>
          <div className={styles.termsOfServece}>
            <p className={styles.diviredText}>
              By continuing, you agree to our{" "}
              <Link to="#" className={styles.colorText}>terms of service.</Link>
            </p>
          </div>
          <LoginButton
            onClick={() => console.log("click")}
            text="Login"
          />
        </div>
      </form>
      <div className={styles.dividerWrapper}>
        <div className={styles.dividerLine}>
          {" "}
          <div className={styles.dividerText}>or sign in with</div>
        </div>
      </div>
      <div className={styles.googleBtnWrapper}>
        <GoogleSiginInButton
          onClick={() => console.log("login google")}
          text="Continue with Google"
        />
      </div>
    </>
  );
};
