import React from "react";
import PropTypes from "prop-types";
import SideBar from "../../components/SideBar";
import styles from "./MainLayout.module.scss";

export const MainLayout = ({ children }) => {
  return (
    <div className={styles.MainLayout}>
      <SideBar />
      <div className={styles.MainLayoutContent}>{children}</div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
