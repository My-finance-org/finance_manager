import * as React from "react";
import SVG from "react-inlinesvg"
import overviewIcon from '@/assets/Icons/Overview.svg'
import styles from "./SideBarLinks.module.scss"
import { Link } from "react-router-dom";

export default function SideBarLinks() {
  return (
    <div className={styles.linkContainer}>
      <SVG src={overviewIcon}/>
      <Link to={'/'}>Overview</Link>
    </div>
  );
}
