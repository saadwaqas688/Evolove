import React from 'react';
import {  Paper} from '@mui/material';

const PaperWrapper = ({children,
  ...otherProps
}) => {

  return (
    <Paper {...otherProps} >
        {children}
        </Paper>
  );
};

export default PaperWrapper;
