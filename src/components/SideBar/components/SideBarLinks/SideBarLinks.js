import * as React from "react";
import SVG from "react-inlinesvg";
import styles from "./SideBarLinks.module.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function SideBarLinks(props) {
    const {id, icon, text, path} = props

  return (
    <div className={styles.linkItem} key={id}>
      <div className={styles.linkBox}>
        <SVG src={icon}/>
        <Link to={path} className={styles.link}>{text}</Link>
      </div>
    </div>
  );
}

SideBarLinks.propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};



