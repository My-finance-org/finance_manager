import React from "react";
import "./AccountDetails.scss";

export const AccountDetails = ({ ...props }) => {
  return (
    <div className="account-detail">
      <div className="details">
        <div className="top-line">
          <div className="bank-name">
            <div className="bank-name2">Bank Name</div>

            <div className="ab-bank-ltd">AB Bank Ltd.</div>
          </div>

          <div className="account-type">
            <div className="account-type2">Account type</div>

            <div className="checking">Checking</div>
          </div>

          <div className="balance">
            <div className="balance2">Balance</div>

            <div className="_25-056-00">$25,056.00</div>
          </div>
        </div>

        <div className="bottom-line">
          <div className="branch-name">
            <div className="branch-name2">Branch Name</div>

            <div className="park-street-branch">park Street Branch</div>
          </div>

          <div className="account-number">
            <div className="account-number2">Account Number</div>

            <div className="_133-456-886-8">133 456 886 8****</div>
          </div>
        </div>
      </div>

      <div className="button">
        <div className="button-big">
          <div className="add-accounts">Edit Details</div>
        </div>

        <div className="remove">Remove</div>
      </div>
    </div>
  );
};
