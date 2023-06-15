import React from 'react';
import SVG from 'react-inlinesvg'
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import GoogleIcon from '../../../assets/Icons/GoogleIcon.svg'
import styles from './GoogleSigiInButton.module.scss'

const GoogleSiginInButton = ({ text, onClick, disabled }) => {
  return (
    <Button className={styles.GoogleSiginInButton} variant="contained" onClick={onClick} startIcon={<SVG 
    src={GoogleIcon}
    width={24}
    height="auto"
    title=''
    />}>
      {text}
    </Button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default GoogleSiginInButton;