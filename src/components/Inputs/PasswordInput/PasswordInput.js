import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg'
import ShowPasswordIcon from '../../../assets/Icons/ShowPassword.svg'
import HidePasswordIcon from '../../../assets/Icons/HidePassword.svg'
import styles from './PasswordInput.module.scss'


const PasswordInput = ({ placeHolder, vlaue, onChange }) => {

  const [inputType, setInputType] = useState('password')
  const [passwordIcon, setPasswordIcon] = useState(ShowPasswordIcon)
  const [passwordIconClass, setpasswordIconClass] = useState(styles.passwordIcon)

  const toggleType = () => {
    if (inputType === 'password') {
      setInputType('text')
      setPasswordIcon(HidePasswordIcon)
    } else {
      setInputType('password')
      setPasswordIcon(ShowPasswordIcon)
    }
  }

  return (
    <div className={styles.PasswordContainer}>
      <input type={inputType} className={styles.PasswordInput } placeholder={placeHolder} />
      <SVG
        src={passwordIcon}
        className={styles.passwordIcon}
        onClick={toggleType}
      />
    </div>
  );
};

PasswordInput.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  value: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PasswordInput;