import * as React from "react";
import SideBarLinksList from "./components/SideBarLinks/SideBarLinksList";
import LogOutButton from "./components/LogOut";
import ProfileLink from "./components/ProfileLink/ProfileLink";
import userPhoto from '@/assets/Icons/ProfileImage.svg'
import styles from "./SideBar.module.scss";

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
        <ProfileLink 
        userName={'Tanzir Rahman'}
        userPhoto={userPhoto}
        />
      </div>
    </div>
  );
}
