import React from 'react';
import styles from "./Title.module.scss"
import PropTypes from "prop-types";

export const Title = ({text}) => {
  return (
    <div className={styles.container} dangerouslySetInnerHTML={{__html: text}} />
  );
};

Title.propTypes={
  text:PropTypes.string.isRequired,
}