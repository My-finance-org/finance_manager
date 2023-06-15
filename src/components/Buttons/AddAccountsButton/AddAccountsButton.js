import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import styles from './AddAccountsButton.module.scss';

const AddAccountsButton = ({ text, onClick, disabled }) => {
  return (
    <Button className={styles.AddAccountsButton} variant="contained" onClick={onClick}>
      {text}
    </Button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default AddAccountsButton;