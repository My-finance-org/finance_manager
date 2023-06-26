import React from "react";
import PropTypes from "prop-types";
import styles from "./EmaiInput.module.scss";

const EmailInput = ({ placeHolder, value, onChange, required }) => {
  return (
    <input
      type="email"
      className={styles.EmailInput}
      value={value}
      placeholder={placeHolder}
      onChange={onChange}
      required={required}
    />
  );
};

EmailInput.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default EmailInput;
