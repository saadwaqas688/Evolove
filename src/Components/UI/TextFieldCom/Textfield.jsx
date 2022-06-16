import { Box } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import CalendarIcon from "../../../assets/icons/CalendarIcon";
import { ClockIcon } from "../../../assets/icons/ClockIcon";
import PasswordIcon from "../../../assets/icons/PasswordIcon";
import SearchIcon from "../../../assets/icons/SearchIcon";
import { Colors } from "../../../config/palette";
import {
  HelperText,
  Input,
  LabelText,
  StyledPaper,
  Wrapper,
  InputMultiLine,
} from "./Textfield.style";

const TextfieldComp = ({
  error,
  helperText,
  width,
  getValue,
  label,
  showHelper,
  fullWidth,
  placeholder,
  multiLine,
  height,
  color,
  icon,
  placeholderColor,
  direction,
  justifyproperty,
  alignproperty,
  iconPosition,
  iconType,
  ...inputProps
}) => {
  return (
    <>
      <Wrapper
        width={fullWidth ? "100%" : width}
        height={height}
        direction={direction}
        justifyproperty={justifyproperty}
        alignproperty={alignproperty}
      >
        <LabelText>{label}</LabelText>
        <StyledPaper elevation={0} error={+error} width={width} color={color}>
          {multiLine ? (
            <InputMultiLine
              height={height}
              autoComplete="new-password"
              {...inputProps}
              error={+error}
              placeholder={placeholder}
              placeholderColor={placeholderColor}
            />
          ) : (
            <>
              {(icon && iconPosition==="start") && (
                <Box sx={{ marginLeft: "20px", marginTop: "6px" }}>
                  <SearchIcon />
                </Box>
              )}

              <Input
                autoComplete="new-password"
                height={height}
                {...inputProps}
                error={+error}
                placeholder={placeholder}
                placeholderColor={placeholderColor}
              />
              { (icon && iconPosition==="end" && iconType==="password" )?
             (  <Box sx={{ marginRight: "10px", marginTop: "6px" }}>
                <PasswordIcon/>
                </Box>):
                 (icon && iconPosition==="end" && iconType==="calendar" )?
                 (  <Box sx={{ marginRight: "10px", marginTop: "6px" }}>
                 <CalendarIcon/>
                 </Box>):
                  (icon && iconPosition==="end" && iconType==="clock" )?
                  (  <Box sx={{ marginRight: "10px", marginTop: "6px" }}>
                  <ClockIcon/>
                  </Box>):
                  <></>
                }
            </>
          )}
        </StyledPaper>
      </Wrapper>
      {showHelper && <HelperText error={+error}>{helperText}</HelperText>}
    </>
  );
};

export default TextfieldComp;

TextfieldComp.propTypes = {
  error: PropTypes.bool,
  getValue: PropTypes.func,
  helperText: PropTypes.string,
  label: PropTypes.string,
  showHelper: PropTypes.bool,
  width: PropTypes.string,
  placeholder: PropTypes.string,
  fullWidth: PropTypes.bool,
  multiLine: PropTypes.bool,
  height: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.bool,
  placeholderColor: PropTypes.string,
  direction: PropTypes.string,
  justifyproperty: PropTypes.string,
  alignproperty: PropTypes.string,
  iconPosition: PropTypes.string,
  iconType:PropTypes.string,
};

TextfieldComp.defaultProps = {
  height: "80px",
  label: "",
  width: "80%",
  error: false,
  fullWidth: true,
  helperText: " ",
  placeholder: "",
  showHelper: true,
  multiLine: false,
  color: Colors.grey,
  icon: false,
  placeholderColor: Colors.dimGrey,
  justifyproperty: "center",
  alignproperty: "center",
  direction: "column",
  iconPosition:"",
  iconType:"",
};
