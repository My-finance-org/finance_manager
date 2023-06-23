import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RoutesEnum } from "@/constants/emun/routes";
import AuthLayout from "@/layouts/AuthLayout";
import Title from "@/components/shared/Title";
import EmailInput from "@/components/Inputs/EmailInput";
import PasswordInput from "@/components/Inputs/PasswordInput";
import LoginButton from "@/components/Buttons/LoginButton";
import GoogleSiginInButton from "@/components/Buttons/GoogleSigiInButton";
import CheckBox from "@/components/Inputs/CheckBox";
import styles from "./SignIn.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "@/store/AuthSlice";

export const SignIn = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector(state => state.auth);

  const [singIn, setSingIn] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log(auth);
  }, [auth]);

  const login = e => {
    e.preventDefault();
    console.log(singIn.email, singIn.password);
    dispatch(userLogin({ email: singIn.email, password: singIn.password }));
  };

  return (
    <AuthLayout>
      <div className={styles.singIn}>
        <div className={styles.container}>
          <Title text="<span> Finance </span> Manager. <span>IO</span>" />
          <form
            className={styles.formContainer}
            onSubmit={login}
          >
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
              <CheckBox
                checked={true}
                onChange={() => {}}
              />
              <p>Keep me signed in</p>
            </div>
            <LoginButton
              onClick={() => {}}
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
              onClick={() => {}}
              text="Continue with Google"
            />
          </div>
          <Link
            className={styles.createAccount}
            to={RoutesEnum.SignUp}
          >
            Create an account
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};
