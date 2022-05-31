import React from 'react';
import {  Box} from '@mui/material';

const BoxCom = ({children,
  ...otherProps
}) => {

  return (
    <Box {...otherProps} >
        {children}
        </Box>
  );
};

export default BoxCom;

