import React from "react";
import MaterialButton from "@mui/material/Button";
import { styled } from "@mui/system";
import { Colors } from "../../../config/palette";

const MaterialButtonWrapper = styled(MaterialButton)(
  ({
    theme,
    customcolor,
    custombgcolor,
    customHoverBgColor,
    customHovercolor,
  }) => ({
    margin: theme.spacing(0.5),
    color: customcolor,
    width: "230px",
    height: "62px",
    fontWeight: "bold",
    borderRadius: "32.36px",
    backgroundColor: custombgcolor ? custombgcolor : Colors.info,
    "&:hover": {
      backgroundColor: customHoverBgColor ? customHoverBgColor : "#ffb3b3",
      color: customHovercolor ? customHovercolor : "white",
    },
    "&:disabled": {
        backgroundColor: customHoverBgColor ? customHoverBgColor : "#ffb3b3",
        color: customHovercolor ? customHovercolor : "white",
      }

  })
);

const Button = (props) => {
  const { color, children, onClick, variant } = props;
  return (
    <MaterialButtonWrapper
      color={color}
      onClick={onClick}
      variant={variant}
      {...props}
    >
      {children}
    </MaterialButtonWrapper>
  );
};

export default Button;

Button.defaultProps = {
  variant: "outlined",
};
