import React from 'react';
// import { useField } from 'formik';
import { TextField } from '@mui/material';

const TextFieldWrapper = ({otherProps}) => {

  const configTextfield = {
    ...otherProps,
    fullWidth: true,
    variant: 'outlined'
  };

  return (
    <TextField {...configTextfield} />
  );
};

export default TextFieldWrapper;
