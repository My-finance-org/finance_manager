import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import styles from './EmaiInput.module.scss'

const EmailInput = ({ placeHolder, vlaue, onChange }) => {

    const MyTextField = styled(TextField)({
        // Додайте свої стилі тут
        borderColor: 'red',
        '& .MuiInputBase-input': {
          // Приклад зміни стилю внутрішнього input
          fontSize: '1.2rem',
        },
      });

  return (
    <MyTextField 
    className={styles.emailInput} 
    id="outlined-basic" 
    placeholder={placeHolder}
    variant="outlined" />
  );
};

EmailInput.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  value: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default EmailInput;