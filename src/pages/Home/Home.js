import React from "react";
import { MainLayout } from "../../layouts/MainLayout/MainLayout";
import RecentTransaction from "../../components/RecentTransaction/";

export const Home = () => {
  return (
    <MainLayout>
      <RecentTransaction />
    </MainLayout>
  );
};
