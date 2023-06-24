import React from "react";
import AuthLayout from "@/layouts/AuthLayout";
import SingInForm from "@/components/Forms/SingInForm";
import Title from "@/components/shared/Title";
import styles from "./SignIn.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "@/store/AuthSlice";

export const SignIn = () => {
  return (
    <AuthLayout>
      <div className={styles.singIn}>
        <div className={styles.container}>
          <Title text="<span> Finance </span> Manager. <span>IO</span>" />
          <SingInForm />
        </div>
      </div>
    </AuthLayout>
  );
};
