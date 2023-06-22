import React from "react";
import TextInput from "@/components/Inputs/TextInput";
import EmailInput from "@/components/Inputs/EmailInput";
import PhoneNumberInput from "@/components/Inputs/PhoneNumberInput";
import LoginButton from "@/components/Buttons/LoginButton";
import "./AccountForm.scss";

const AccountForm = () => {
  return (
    <form className="account-form">
      <div className="input-wrapper">
        <label>Full name</label>
        <TextInput
          placeHolder="Tanzir Rahman"
          value=""
          onChange={() => console.log("Full name")}
        />
      </div>
      <div className="input-wrapper">
        <label>Email</label>
        <EmailInput
          placeHolder="tanzir.rahman@email.com"
          value=""
          onChange={() => console.log("Full name")}
        />
      </div>
      <div className="input-wrapper">
        <label>Username</label>
        <TextInput
          placeHolder="tanzir.rahman"
          value=""
          onChange={() => console.log("Full name")}
        />
      </div>
      <div className="input-wrapper">
        <label>Phone Number</label>
        <PhoneNumberInput
          placeholder="+880  |  51547 58868"
          value=""
          onChange={() => console.log("Full name")}
        />
      </div>
      <LoginButton
        text="Update Profile"
        onClick={() => console.log("Update Profile")}
      />
    </form>
  );
};

export default AccountForm;
