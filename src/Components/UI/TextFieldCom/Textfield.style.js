import { styled } from "@mui/system";
import PaperWrapper from "../Paper/PaperWrapper";

export const Wrapper = styled("label")(({ theme, width }) => ({
  fontFamily: '"Poppins", "sans-serif"',
  display: "flex",
  flexDirection: "column",
  width,
  gap: theme.spacing(1),
  color:"white"
}));

export const StyledPaper = styled(PaperWrapper)(({ theme, error }) => ({
  fontFamily: '"Poppins", "sans-serif"',
  borderRadius: "10px",
  border: `${error ? "2px" : "1px"} solid ${
    error ? "red" : "white"
  }`,
  background: "black",
  // height: theme.spacing(6.25),
  display: "flex",
  alignItems: "center",
  fontWeight: 400,
  fontSize: "14px",
}));

export const Input = styled("input")(({ theme, value, error }) => {
  return {
        width: "100%",
    height: "150px",
    padding: "12px 20px",
    boxSizing: "border-box",
    border: "2px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
    // resize: none;
    rows:4,
     cols:50,
     resize: 'none',
    // paddingLeft: theme.spacing(2.5),
    background: "black",
    // border: "none",
    outline: "none",
    // height: "70%",
    // width: "100%",
    color: "white",
    fontFamily: '"Poppins", "sans-serif"',
    "&:focus": {
      color: "white",
      // borderLeft: `${
      //   !error
      //     ? `${value.length > 0 ? "2px" : "1px"} solid black
      //       `
      //     : "none"
      // }`,
    },
  };
});

export const HelperText = styled("p")(({ theme, error }) => ({
  fontFamily: '"Poppins", "sans-serif"',
  fontSize: "12px",
  lineHeight: "10px",
  // height: "10px",
  color: error ? "red": "inherit",
  fontWeight: 400,
}));

export const LabelText = styled("span")(({ theme }) => ({
  fontFamily: '"Poppins", "sans-serif"',
  fontSize: "16px",
  color: "#4A5568",
}));
