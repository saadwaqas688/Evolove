import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../../../../../../config/palette";

export const MessageText = styled(Typography)(({ theme }) => ({
    fontFamily: '"Montez", "cursive"',
 [theme.breakpoints.up("md")]: {
   fontSize: "3rem",
 },
 color: Colors.white,
 fontSize: "1.5rem",
}));

export const HeroText = styled(Typography)(({ theme }) => ({
 // fontFamily: '"Montez", "cursive"',
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
 // fontFamily: '"Montez", "cursive"',
 variant:"h6",
 mt: "20px",fontSize:"25px",paddingRight:"100px",

[theme.breakpoints.down("md")]: {
//  display: "flex",
//  justifyContent: "space-evenly",
//  alignItems: "center",
textAlign:"center",
paddingLeft:"10px",
paddingRight:"10px",
marginBottom:"20px"

//  padding: "0px",
//  margin:"auto"


},
}));
