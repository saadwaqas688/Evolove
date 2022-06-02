import { styled, Typography } from "@mui/material";
import { Colors } from "../../../../config/palette";


export const PopularCourseHeading = styled(Typography)(({ theme }) => ({
  fontFamily: '"Poppins", "sans-serif"',
  color:Colors.light,
  fontWeight:"bold",
  fontSize:"14px",
  marginBottom:"20px",
  [theme.breakpoints.down("lg")]: {
    textAlign:"center"
    },
}));


export const LinkContainer = styled(Typography)(() => ({
  marginBottom:"20px",
  color:"#9E8B91",
   fontSize:"14px",
   fontFamily: '"Poppins", "sans-serif"',
   fontWeight:"bold",
 }));


 export const MainContainer = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("lg")]: {
    justifyContent: "space-around",

    },
[theme.breakpoints.down("md")]: {
  flexDirection:"column",
  marginBottom:"20px",
  },
}));