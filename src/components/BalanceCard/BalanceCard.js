import React from "react";
import { Link } from "react-router-dom";
import "./BalanceCard.scss";

const BalanceCard = ({}) => {
  return (
    <div className="balance-card">
      <div className="header">
        <div className="credit-card">Credit Card</div>
        <div className="type">
          <div className="frame-40714">
            <div className="master-card">Master Card</div>
          </div>
          <div className="icon">
            <div className="mastercard">
              <img
                className="mastercard-logo-1"
                src="mastercard-logo-1.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="account-details">
          <div className="account-number">
            <div className="_133-456-886-8">3388 4556 8860 8***</div>
            <div className="account-number2">Account Number</div>
          </div>
          <div className="total-amount">
            <div className="_25000">$25000</div>
            <div className="total-amount2">Total amount</div>
          </div>
        </div>
        <div className="footer">
          <div className="remove">Remove</div>
          <Link
            to={"/"}
            className="button"
          >
            <div className="details">Details</div>
            <svg
              className="chevron-right"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
