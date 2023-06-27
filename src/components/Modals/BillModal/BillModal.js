import React, { useEffect, useState } from "react";
import Select from "react-select";
import DatePicker from "react-date-picker";
import TextInput from "@/components/Inputs/TextInput";
import Modal from "../Modal";
import BaseTitle from "@/components/shared/BaseTitle";
import "./BillModal.scss";

const options = [
  { value: "Credit Card", label: "Credit Card" },
  { value: "Checking", label: "Checking" },
  { value: "Savings", label: "Savings" },
  { value: "Investment", label: "Investment" },
  { value: "Loan", label: "Loan" },
];

const BillModal = ({ isOpen, onClose }) => {
  const [bill, setBill] = useState({
    date: "",
    logo: "",
    title: "",
    description: "",
    lastChange: "",
    amount: "",
  });

  const createTransaction = e => {
    e.preventDefault();
    console.log("bill", bill);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="transaction-modal"
    >
      <BaseTitle
        text={"Create bill"}
        fontSize={"22"}
      />

      <form
        className="transaction-modal__form"
        onSubmit={createTransaction}
      >
        <div className="input-wrapper">
          <label htmlFor="">Date</label>
          <DatePicker
            onChange={value => {
              setBill({ ...bill, date: value });
            }}
            value={bill.date}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="">Choose Logo</label>
          <TextInput
            onChange={({ target: { value } }) => {
              setBill({ ...bill, logo: value });
            }}
            value={bill.logo}
            placeholder="Enter Logo"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="">Title</label>
          <TextInput
            onChange={({ target: { value } }) => {
              setBill({ ...bill, title: value });
            }}
            value={bill.title}
            placeholder="Enter Title"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="">Description</label>
          <TextInput
            onChange={({ target: { value } }) => {
              setBill({ ...bill, description: value });
            }}
            value={bill.description}
            placeholder="Enter Descriptionr"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="">Last Change</label>
          <TextInput
            onChange={({ target: { value } }) => {
              setBill({ ...bill, lastChange: value });
            }}
            value={bill.lastChange}
            placeholder="Enter Last Change"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="">Amount</label>
          <TextInput
            onChange={({ target: { value } }) => {
              setBill({ ...bill, amount: value });
            }}
            value={bill.amount}
            placeholder="Enter Amount"
          />
        </div>
        <br />
        <button className="transaction-modal__button-create">
          Create Bills
        </button>
      </form>
    </Modal>
  );
};

export default BillModal;
