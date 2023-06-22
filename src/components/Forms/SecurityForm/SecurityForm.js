import React from "react";
import TextInput from "@/components/Inputs/TextInput";
import EmailInput from "@/components/Inputs/EmailInput";
import PhoneNumberInput from "@/components/Inputs/PhoneNumberInput";
import LoginButton from "@/components/Buttons/LoginButton";
import PasswordInput from "@/components/Inputs/PasswordInput";
import "./SecurityForm.scss";

const SecurityForm = () => {
  return (
    <form className="security-form">
      <div className="input-wrapper">
        <label>Old Password</label>
        <PasswordInput
          placeHolder="****************"
          value=""
          onChange={() => console.log("Full name")}
        />
      </div>
      <div className="input-wrapper">
        <label>New Password</label>
        <PasswordInput
          placeHolder="****************"
          value=""
          onChange={() => console.log("Full name")}
        />
      </div>
      <div className="input-wrapper">
        <label>Retype Password</label>
        <PasswordInput
          placeHolder="****************"
          value=""
          onChange={() => console.log("Full name")}
        />
      </div>
      <div className="input-wrapper">
        <label>Phone Number</label>
        <PhoneNumberInput
          placeholder="+880 | 51547 58868"
          value=""
          onChange={() => console.log("Full name")}
        />
      </div>
      <LoginButton
        text="Update Password"
        onClick={() => console.log("Update Password")}
      />
    </form>
  );
};

export default SecurityForm;
