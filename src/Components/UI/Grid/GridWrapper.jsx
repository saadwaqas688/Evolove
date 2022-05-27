import React from 'react';
import { Grid} from '@mui/material';

const GridWrapper = ({children,
  ...otherProps
}) => {

  return (
    <Grid {...otherProps} >
        {children}
        </Grid>
  );
};

export default GridWrapper;
