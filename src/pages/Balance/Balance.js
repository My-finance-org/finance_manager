import React from "react";
import { MainLayout } from "@/layouts/MainLayout/MainLayout";
import AccountDetails from "@/components/AccountDetails";
import BaseTitle from "@/components/shared/BaseTitle";
import TransactionHistoryTable from "@/components/TransactionHistoryTable";
import LoginButton from "@/components/Buttons/LoginButton";
import "./Balance.scss";

export const Balance = () => {
  return (
    <MainLayout>
      <div className="balance">
        <BaseTitle
          text="Account Details"
          fontSize="22"
          classes={"mt-16 mb-16"}
        />
        <AccountDetails />
        <div>
          <BaseTitle
            text="Transactions History"
            fontSize="22"
            classes={"mt-32 mb-16"}
          />
          <div className="table-wrapper">
            <TransactionHistoryTable />
            <LoginButton
              text="Load More"
              onClick={() => console.log("Load more balance")}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
