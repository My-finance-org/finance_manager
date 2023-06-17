import React, { useState, useEffect, } from 'react';
import PropTypes from 'prop-types';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'
import styles from './PhoneNumberInput.module.scss'

const PhoneNumberInput = ({ value, onChange }) => {
  return (
    <PhoneInput
    onChange={onChange}
    value={value}
        inputProps={{
          name: 'phone',
          required: true,
          autoFocus: true,
          enableSearch: true,
        }}
        containerClass={styles.inputContaier}
        inputClass={styles.input}
        dropdownClass={styles.dropdown}
      />
  );
};

PhoneNumberInput.propTypes = {
  value: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PhoneNumberInput;