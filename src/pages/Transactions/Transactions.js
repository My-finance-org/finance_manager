import React, { useEffect, useState } from "react";
import { MainLayout } from "@/layouts/MainLayout/MainLayout";
import BaseTitle from "@/components/shared/BaseTitle";
import { Tab, TabContent, TabHeader, Tabs } from "@/components/Tabs";
import RecentTransactionTable from "@/components/RecentTransactionTable";
import LoginButton from "@/components/Buttons/LoginButton";
import TransactionModal from "@/components/Modals/TransactionModal";
import { transactions } from "@/constants/transaction";
import "./Transactions.scss";

export const Transactions = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <MainLayout>
      <div className="transactions">
        <BaseTitle
          text="Recent Transaction"
          fontSize={"22"}
          classes={"transactions-title"}
        />
        <Tabs>
          <TabHeader>
            <Tab>All</Tab>
            <Tab>Revenue</Tab>
            <Tab>Expenses</Tab>
            <button
              className="modal-open"
              onClick={() => setIsOpenModal(true)}
            >
              Create Transaction
            </button>
          </TabHeader>
          <TabContent>
            <div className="table-wrapper">
              <RecentTransactionTable transactions={transactions} />
              <LoginButton
                text="Load More"
                onClick={() => console.log("Load more firs tab")}
              />
            </div>
            <div className="table-wrapper">
              <RecentTransactionTable
                transactions={transactions.filter(t => t.revenue)}
              />
              <LoginButton
                text="Load More"
                onClick={() => console.log("Load more second tab")}
              />
            </div>
            <div className="table-wrapper">
              <RecentTransactionTable
                transactions={transactions.filter(t => t.expenses)}
              />
              <LoginButton
                text="Load More"
                onClick={() => console.log("Load more third tab")}
              />
            </div>
          </TabContent>
        </Tabs>
        <TransactionModal
          isOpen={isOpenModal}
          onClose={() => setIsOpenModal(false)}
        />
      </div>
    </MainLayout>
  );
};
