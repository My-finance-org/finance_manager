import React from "react";
import { MainLayout } from "../../layouts/MainLayout/MainLayout";
import BaseTitle from "@/components/shared/BaseTitle";
import VerticalBarChart from "@/components/Charts/VerticalBarChart";
import "./Expenses.scss";

export const Expenses = () => {
  return (
    <MainLayout>
      <div className="expenses">
        <BaseTitle
          text="Expenses Comparison"
          fontSize="22"
          classes="mt-16 mb-16"
        />
        <VerticalBarChart period={"month"} />
      </div>
    </MainLayout>
  );
};
