import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import styles from './CheckButton.module.scss';

const PrimaryButton = ({ text, onClick, disabled }) => {
  return (
    <Button className={styles.primaryButton} variant="contained" onClick={onClick}>
      {text}
    </Button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default PrimaryButton;