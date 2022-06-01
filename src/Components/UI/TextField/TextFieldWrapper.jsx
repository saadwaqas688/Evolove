import React from 'react';
// import { useField } from 'formik';
import { TextField } from '@mui/material';
import { TextFieldContainer } from './TextFieldWrapper.style';

const TextFieldWrapper = ({otherProps}) => {

  // const configTextfield = {
  //   ...otherProps,
  //   fullWidth: true,
  //   variant: 'outlined'
  // };

  return (
    <TextFieldContainer   variant='outlined'/>
  );
};

export default TextFieldWrapper;

