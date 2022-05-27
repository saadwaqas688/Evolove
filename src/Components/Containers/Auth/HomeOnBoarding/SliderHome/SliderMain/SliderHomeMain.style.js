import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../../../../../../config/palette";

export const HeroText = styled(Typography)(({ theme }) => ({
 fontFamily: '"Poppins", "sans-serif"',
 color:Colors.light,
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
 color:"#B7C6D9",
 fontFamily: '"Poppins", "sans-serif"',
 mt: "20px",fontSize:"18px",paddingRight:"190px",

[theme.breakpoints.down("md")]: {
textAlign:"center",
paddingLeft:"10px",
paddingRight:"10px",
marginBottom:"20px",
},
}));
