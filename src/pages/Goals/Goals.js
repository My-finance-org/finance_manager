import React from "react";
import classNames from "classnames";
import { MainLayout } from "@/layouts/MainLayout/MainLayout";
import SavingSummaryChart from "@/components/Charts/SavingSummaryChart";
import GoalsCard from "@/components/Goals";
import "./Goals.scss";

export const Goals = () => {
  const clss = classNames("goals", {}, "flex");

  return (
    <MainLayout>
      <div className={clss}>
        <GoalsCard />
        <SavingSummaryChart />
      </div>
    </MainLayout>
  );
};
