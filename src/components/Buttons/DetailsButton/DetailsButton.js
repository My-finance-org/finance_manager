import React from 'react';
import PropTypes from 'prop-types';
import RightArrow from '../../../assets/Icons/RightArrow.svg'
import styles from './DetailsButton.module.scss';

const DetailsButton = ({ text, onClick }) => {
  return (
    <button className={styles.DetailsButton} onClick={onClick}>
      {text}
      <img src={RightArrow} alt=""/>
    </button>
  );
};

DetailsButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DetailsButton;