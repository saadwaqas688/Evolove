import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../../../../../../config/palette";

export const HeroText = styled(Typography)(({ theme }) => ({
 fontFamily: '"Poppins", "sans-serif"',
 color:Colors.light,
 variant:"h5",
  mt: "30px", fontWeight: "bold" ,fontSize:"36px",paddingRight:"50px",paddingTop:"70px",

[theme.breakpoints.down("md")]: {
 marginBottom:"20px",
fontSize: "20px",
textAlign:"center",
paddingLeft:"10px",
paddingRight:"10px",
paddingTop:"10px"


},
}));


export const HeroSubText = styled(Typography)(({ theme }) => ({
 color:Colors.light,
 fontFamily: '"Poppins", "sans-serif"',
 variant:"h6",
 mt: "20px",fontSize:"25px",paddingRight:"100px",

[theme.breakpoints.down("md")]: {
textAlign:"center",
paddingLeft:"10px",
paddingRight:"10px",
marginBottom:"20px",
},
}));
