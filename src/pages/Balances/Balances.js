import React from "react";
import { MainLayout } from "@/layouts/MainLayout/MainLayout";
import BalanceCard from "@/components/BalanceCard";
import AddAccount from "@/components/AddAccount";
import BaseTitle from "@/components/shared/BaseTitle";
import "./Balances.scss";

const balances = [1, 2, 3, 4, 5];

export const Balances = () => {
  return (
    <MainLayout>
      <BaseTitle
        text={"Balances"}
        fontSize="22"
        classes="balances-title"
      />
      <div className="flex">
        {balances.map(b => {
          return (
            <BalanceCard
              {...b}
              key={b}
            />
          );
        })}
        <AddAccount />
      </div>
    </MainLayout>
  );
};
