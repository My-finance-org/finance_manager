import React from 'react';
import SVG from 'react-inlinesvg'
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import RightArrow from '../../../assets/Icons/RightArrow.svg'
import styles from './DetailsButton.module.scss';

const DetailsButton = ({ text, onClick, disabled }) => {
  return (
    <Button className={styles.DetailsButton} variant="contained" onClick={onClick} endIcon={<SVG 
      src={RightArrow}
      width={16}
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

export default DetailsButton;