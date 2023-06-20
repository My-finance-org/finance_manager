import * as React from "react";
import SideBarLinksList from "./components/SideBarLinks/SideBarLinksList";

import styles from "./SideBar.module.scss";

export default function SideBar() {
  return (
    <div className={styles.SideBar}>
      <p className={styles.headerTitle}>
        <span className={styles.boldText}>Finance</span> Manager.{" "}
        <span className={styles.boldText}>IO</span>
      </p>
      <SideBarLinksList/>
    </div>
  );
}

