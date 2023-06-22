import React from "react";
import "./AddAccount.scss";

const AddAccount = () => {
  return (
    <div className="add-account">
      <div className="button">
        <div className="button-big">
          <div className="add-accounts">Add accounts</div>
        </div>

        <div className="edit-wrapper">
          <div className="edit-accounts">Edit Accounts</div>
        </div>
      </div>
    </div>
  );
};

export default AddAccount;
