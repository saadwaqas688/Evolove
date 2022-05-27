import PropTypes from "prop-types";
import React from "react";
import {
  HelperText,
  Input,
  LabelText,
  StyledPaper,
  Wrapper,
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
  ...inputProps
}) => {
  return (
    <>
      <Wrapper width={fullWidth ? "100%" : width}>
        <LabelText>{label}</LabelText>
        <StyledPaper elevation={0} error={+error}>
          <Input autoComplete="new-password" rows="4" cols="50" {...inputProps} error={+error} placeholder={placeholder} />
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
};

TextfieldComp.defaultProps = {
  label: "No label given",
  width: "5rem",
  error: false,
  fullWidth: true,
  helperText: " ",
  placeholder: "",
  showHelper: true,
};
