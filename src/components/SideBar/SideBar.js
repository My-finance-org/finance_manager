import * as React from "react";
import SideBarLinksList from "./components/SideBarLinks/SideBarLinksList";
import styles from "./SideBar.module.scss";
import LogOutButton from "./components/LogOut";
import ProfileLik from "./components/ProfileLik/ProfileLink";

export default function SideBar() {
  return (
    <div className={styles.SideBar}>
      <div className={styles.sideBarLinks}>
      <p className={styles.headerTitle}>
        <span className={styles.boldText}>Finance</span> Manager.{" "}
        <span className={styles.boldText}>IO</span>
      </p>  
        <SideBarLinksList />
      </div>
      <div className={styles.sideBarFooter}>
        <LogOutButton />
        <ProfileLik />
      </div>
    </div>
  );
}
