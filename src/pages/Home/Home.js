import React from "react";
import { MainLayout } from "../../layouts/MainLayout/MainLayout";
import RecentTransaction from "../../components/RecentTransaction/";
import VerticalBarChart from "@/components/Charts/VerticalBarChart";
import Header from "@/components/Header";
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <MainLayout>
      <div className={styles.Home}>
        <Header />
        <div className={styles.Content}>
          <RecentTransaction />
          <VerticalBarChart />
        </div>
      </div>
    </MainLayout>
  );
};
