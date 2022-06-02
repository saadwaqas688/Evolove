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
   fontSize:"14px",
   fontFamily: '"Poppins", "sans-serif"',
   fontWeight:"bold",
   marginBottom:"20px",
 }));