import { styled } from "@mui/system";
import { Colors } from "../../../config/palette";
import PaperWrapper from "../Paper/PaperWrapper";

export const Wrapper = styled("label")(({ theme, width,height }) => ({
  fontFamily: '"Poppins", "sans-serif"',
  display: "flex",
  justifyContent:"center",
  alignItems:'center',
  flexDirection: "column",
  width,
  height,
  gap: theme.spacing(1),
  color:Colors.dimGrey
}));

export const StyledPaper = styled(PaperWrapper)(({ theme, error,width}) => (
    {
  width:width,
  fontFamily: '"Poppins", "sans-serif"',
  borderRadius: "10px",
  border: `${error ? "2px" : "1px"} solid ${
    error ? "red" : Colors.grey
  }`,
  background: Colors.grey,
  // height: theme.spacing(6.25),
  display: "flex",
  alignItems: "center",
  fontWeight: 400,
  fontSize: "14px",
  [theme.breakpoints.down("md")]: {
    width: "100%", 
   },
}));

export const InputMultiLine = styled("textArea")(({ theme, value, error,height}) => {
  return {
    width: "100%",
    height,
    padding: "12px 20px",
    boxSizing: "border-box",
    border: "1px solid",
    borderRadius: "10px",
    fontSize: "20px",
     resize: 'none',
     background: Colors.dark,
    outline: "none",
    color: Colors.dimGrey,
    fontFamily: '"Poppins", "sans-serif"',
    "&:focus": {
      color: Colors.dimGrey,
    },
  };
});

export const HelperText = styled("p")(({ theme, error }) => ({
  fontFamily: '"Poppins", "sans-serif"',
  fontSize: "12px",
  lineHeight: "10px",
  color: error ? "red": "inherit",
  fontWeight: 400,
}));

export const LabelText = styled("span")(({ theme }) => ({
  fontFamily: '"Poppins", "sans-serif"',
  fontSize: "16px",
  color: Colors.dimGrey,
}));


export const Input = styled("input")(({ theme, value, error,height}) => {
  return {
    width:"100%",
    height,
    padding: "12px 20px",
    boxSizing: "border-box",
    border: "1px",
    borderRadius: "10px",
    fontSize:"20px",
    paddingLeft: theme.spacing(2.5),
    background: Colors.dark,
    outline: "none",
    color: Colors.dimGrey,
    fontFamily: '"Poppins", "sans-serif"',
        "&:focus": {
          color: Colors.dimGrey,
    },
  };
});