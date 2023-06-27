import React, { useEffect, useState } from "react";
import Select from "react-select";
import DatePicker from "react-date-picker";
import TextInput from "@/components/Inputs/TextInput";
import Modal from "../Modal";
import BaseTitle from "@/components/shared/BaseTitle";
import "./TransactionModal.scss";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const TransactionModal = ({ isOpen, onClose }) => {
  const [date, setDate] = useState(new Date());
  const [transaction, setTransaction] = useState({
    item: "",
    shopName: "",
    date: null,
    paymentMethod: "",
    amount: "",
  });

  const createTransaction = e => {
    e.preventDefault();
    console.log("transaction", transaction);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="transaction-modal"
    >
      <BaseTitle
        text={"Create Transaction"}
        fontSize={"22"}
      />

      <form
        className="transaction-modal__form"
        onSubmit={createTransaction}
      >
        <div className="input-wrapper">
          <label htmlFor="">Item</label>
          <TextInput
            onChange={({ target: { value } }) => {
              setTransaction({ ...transaction, item: value });
            }}
            value={transaction.item}
            placeholder="Enter item name"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="">Shop Name</label>
          <TextInput
            onChange={({ target: { value } }) => {
              setTransaction({ ...transaction, shopName: value });
            }}
            value={transaction.shopName}
            placeholder="Enter Shop Name"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="">Date</label>
          <DatePicker
            onChange={value => {
              setTransaction({ ...transaction, date: value });
            }}
            value={transaction.date}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="">Payment Method</label>
          <Select
            options={options}
            onChange={item => {
              setTransaction({ ...transaction, paymentMethod: item.value });
            }}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="">Amount</label>
          <TextInput
            onChange={({ target: { value } }) => {
              setTransaction({ ...transaction, amount: value });
            }}
            value={transaction.amount}
            placeholder="Enter Amount"
          />
        </div>
        <br />
        <button className="transaction-modal__button-create">
          Create Transaction
        </button>
      </form>
    </Modal>
  );
};

export default TransactionModal;
