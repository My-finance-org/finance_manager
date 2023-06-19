import React from "react";
import PropTypes from "prop-types";
import styles from "./TextInput.module.scss";

const TextInput = ({ placeHolder, value, onChange }) => {
  return (
    <input
      type="text"
      className={styles.TextInput}
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
    />
  );
};

TextInput.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
