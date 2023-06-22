import React from "react";
import PropTypes from "prop-types";
import SideBar from "../../components/SideBar";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import styles from "./MainLayout.module.scss";

export const MainLayout = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <SideBar />
      {false && <Loader />}
      <div className={styles.mainLayoutWrapper}>
        <Header />
        <div className={styles.mainLayoutContent}>{children}</div>
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
