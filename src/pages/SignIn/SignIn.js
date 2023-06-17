import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import Title from "../../components/shared/Title";
import EmailInput from "../../components/Inputs/EmailInput";
import PasswordInput from "../../components/Inputs/PasswordInput";
import LoginButton from "../../components/Buttons/LoginButton";
import GoogleSiginInButton from "../../components/Buttons/GoogleSigiInButton";
import styles from "./SignIn.module.scss";

export const SignIn = () => {
  const [singIn, setSingIn] = useState({
    email: "",
    password: "",
  });

  return (
    <AuthLayout>
      <div className={styles.singIn}>
        <div className={styles.container}>
          <Title text="<span> Finance </span> Manager. <span>IO</span>" />
          <form className={styles.formContainer}>
            <div className={styles.inputBlock}>
              <label> Email Address</label>
              <EmailInput
                onChange={({ target: { value } }) =>
                  setSingIn({ ...singIn, email: value })
                }
                placeHolder="Email Address"
                value={singIn.email}
              />
            </div>
            <div className={styles.inputBlock}>
              <div className={styles.labelWrapper}>
                <label>Password</label>
                <Link
                  className={styles.forgotPasswordLink}
                  to="/forgot-password"
                >
                  {" "}
                  Forgot password?
                </Link>
              </div>
              <PasswordInput
                onChange={({ target: { value } }) =>
                  setSingIn({ ...singIn, password: value })
                }
                value={singIn.password}
                placeHolder="Password"
              />
            </div>
            <div className={styles.checkBoxBlock}>
              {/*TODO: after styles input checkbox add this place */}
              <input
                type="checkbox"
                onChange={() => console.log("change checkbox")}
                checked={true}
              />
              <p>Keep me signed in</p>
            </div>
            <LoginButton
              onClick={() => console.log("click")}
              text="Login"
            />
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
          <Link
            className={styles.createAccount}
            to="/sign-up"
          >
            Create an account
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};
