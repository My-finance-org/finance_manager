import React from "react";
import SideBar from "../../components/SideBar";
import styles from "./MainLayout.module.scss";
import PropTypes from "prop-types";

export const MainLayout = ({ children }) => {
  return (
    <div className={styles.MainLayout}>
      <SideBar />
      <div>{children}</div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
