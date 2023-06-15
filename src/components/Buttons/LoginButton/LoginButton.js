import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import styles from './LoginButton.module.scss';

const LoginButton = ({ text, onClick }) => {
  return (
    <Button className={styles.primaryButton} variant="contained" onClick={onClick}>
      {text}
    </Button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LoginButton;