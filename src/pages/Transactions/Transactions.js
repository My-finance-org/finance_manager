import React from "react";
import { MainLayout } from "@/layouts/MainLayout/MainLayout";
import BaseTitle from "@/components/shared/BaseTitle";
import { Tab, TabContent, TabHeader, Tabs } from "@/components/Tabs";
import TransactionTable from "@/components/TransactionTable";
import { transactions } from "@/constants/transaction";
import LoginButton from "@/components/Buttons/LoginButton";
import "./Transactions.scss";

export const Transactions = () => {
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
          </TabHeader>
          <TabContent>
            <div className="table-wrapper">
              <TransactionTable transactions={transactions} />
              <LoginButton
                text="Load More"
                onClick={() => console.log("Load more firs tab")}
              />
            </div>
            <div className="table-wrapper">
              <TransactionTable
                transactions={transactions.filter(t => t.revenue)}
              />
              <LoginButton
                text="Load More"
                onClick={() => console.log("Load more second tab")}
              />
            </div>
            <div className="table-wrapper">
              <TransactionTable
                transactions={transactions.filter(t => t.expenses)}
              />
              <LoginButton
                text="Load More"
                onClick={() => console.log("Load more third tab")}
              />
            </div>
          </TabContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};
