import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../../../../../config/palette";
import GridWrapper from "../../../../UI/Grid/GridWrapper";
import PaperWrapper from "../../../../UI/Paper/PaperWrapper";

export const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: '"Poppins", "sans-serif"',
  color: Colors.light,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  fontSize: "30px",
  paddingTop: "60px",

  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
}));

export const FormContainer = styled(Box)(({ theme }) => ({
  paddingTop: "50px",
  width: "60%",
  height: 450,
  [theme.breakpoints.down("md")]: {
    width: "80%",
  },
}));

export const GridItem = styled(GridWrapper)(({ theme }) => ({
  padding: "10px",
  [theme.breakpoints.down("md")]: {},
}));

export const PaperContainer = styled(PaperWrapper)(() => ({
  background: Colors.secondary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));

export const ImageContainer = styled("img")(({ src }) => ({
  src: `url(${src})`,
  width: "40px",
  height: "40px",
  background: Colors.dark,
  border: `1px solid ${Colors.grey}`,
  borderRadius: "15px",
  paddingTop: "10px",
  paddingBottom: "10px",
  paddingRight: "40px",
  paddingLeft: "40px",
}));

export const ImageContainerMain = styled(Box)(() => ({
  dixplay: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "20px",
  marginBottom: "30px",
}));

export const LinkContainer = styled(Typography)(() => ({
  paddingBottom: "150px",
  color: Colors.darkGrey,
  fontSize: "20px",
  fontFamily: '"Poppins", "sans-serif"',
  fontWeight: "bold",
}));

export const OrWithText = styled(Typography)(() => ({
  color: Colors.darkGrey,
  fontSize: "30px",
  fontFamily: '"Poppins", "sans-serif"',
}));
export const ErrorText = styled("span")(({ theme }) => ({
  color:"red",
  display:'flex',
  justifyContent:'center'
   }));