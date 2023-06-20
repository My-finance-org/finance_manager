import * as React from "react";
import styles from "./SideBar.module.scss"
import SideBarLinks from "./SideBarLinks";

export default function SideBar() {
  return <div className={styles.SideBar}>
    <p className={styles.headerTitle}> 
    <span className={styles.boldText}>Finance</span> Manager. <span className={styles.boldText}>IO</span></p>
    <SideBarLinks/>
  </div>;
}
