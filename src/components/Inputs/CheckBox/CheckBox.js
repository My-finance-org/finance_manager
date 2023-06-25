import React from "react";
import PropTypes from "prop-types";
import styles from "./CheckBox.module.scss";

const CheckBox = ({ checked, onChange }) => {
  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        className={styles.checkBox}
        checked={checked}
        onChange={onChange}
      />
      <label
        htmlFor="checkbox"
        className={styles.label}
      ></label>
    </>
  );
};

CheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
};

export default CheckBox;
