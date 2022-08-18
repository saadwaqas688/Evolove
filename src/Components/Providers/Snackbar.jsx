import React from "react";
import { SnackbarProvider } from "notistack";
import { styled } from "@mui/material/styles";
import {Colors} from './../../config/palette.js'

const StyledSnackBar = styled(SnackbarProvider)(({ theme }) => ({
  "&.SnackbarItem-variantSuccess": {
    backgroundColor: Colors.success,
  },
  "&.SnackbarItem-variantWarning": {
    backgroundColor: Colors.warning,
  },
  "&.SnackbarItem-variantInfo": {
    backgroundColor: Colors.primary,
  },
  "&.SnackbarItem-variantError": {
    backgroundColor: Colors.danger,
  },
}));

const Snackbar = ({ children, ...props }) => {
  return (
    <StyledSnackBar
      autoHideDuration={1500}
      preventDuplicate={true}
      maxSnack={3}
      {...props}
    >
      {children}
    </StyledSnackBar>
  );
};

export default Snackbar;
