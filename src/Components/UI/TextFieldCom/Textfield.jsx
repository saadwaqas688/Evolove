import PropTypes from "prop-types";
import React from "react";
import {
  HelperText,
  Input,
  LabelText,
  StyledPaper,
  Wrapper,
  InputMultiLine
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
  ...inputProps
}) => {
  return (
    <>
      <Wrapper width={fullWidth ? "100%" : width} height={height}>
        <LabelText>{label}</LabelText>
        <StyledPaper elevation={0} error={+error} width={width} >{ multiLine?
                              <InputMultiLine height={height} autoComplete="new-password"  {...inputProps} error={+error} placeholder={placeholder} />
                              :

                      <Input autoComplete="new-password" height={height}  {...inputProps} error={+error} placeholder={placeholder} />
        }
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
  multiLine:PropTypes.bool,
  height: PropTypes.string,
};

TextfieldComp.defaultProps = {
  height:"80px",
  label: "",
  width:"80%",
  error: false,
  fullWidth: true,
  helperText: " ",
  placeholder: "",
  showHelper: true,
  multiLine:false,
};
