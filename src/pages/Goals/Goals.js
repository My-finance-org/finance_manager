import React from "react";
import { MainLayout } from "@/layouts/MainLayout/MainLayout";
import SavingSummaryChart from "@/components/Charts/SavingSummaryChart";

export const Goals = () => {
  return (
    <MainLayout>
      <SavingSummaryChart />
    </MainLayout>
  );
};
