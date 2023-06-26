import React from "react";
import PropTypes from "prop-types";
import styles from "./TextInput.module.scss";

const TextInput = ({ placeholder, value, onChange, required }) => {
  return (
    <input
      type="text"
      className={styles.TextInput}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
