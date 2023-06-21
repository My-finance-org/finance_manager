import React from "react";
import SVG from "react-inlinesvg";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import ProfileImage from "@/assets/Icons/ProfileImage.svg"
import Dots from "@/assets/Icons/dots.svg"
import styles from "./ProfileLink.module.scss";


export default function ProfileLik() {

  return (
    <NavLink to={'/settings'} className={styles.profileLink}>
        <SVG
        src={ProfileImage}
        />
        <div className={styles.profileText}>
            <p className={styles.userName}>Tanzir Rahman</p>
            <p className={styles.linkText}>View profile</p>
        </div>
        <SVG
        src={Dots}
        />
    </NavLink>
  );    
}
