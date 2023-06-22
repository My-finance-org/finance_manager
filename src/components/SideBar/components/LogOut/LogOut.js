import React from "react";
import SVG from "react-inlinesvg";
import { NavLink } from "react-router-dom";
import logOutIcon from "@/assets/Icons/LogOut.svg";
import styles from "./LogOut.module.scss";


export default function LogOut() {

  return (
    <NavLink to={'/login'} className={styles.logOutButton}>
        <SVG
          src={logOutIcon}
          className={styles.buttonsIcon}
        />
        <p className={styles.logOutText}>Logout</p>
    </NavLink>
  );
}


