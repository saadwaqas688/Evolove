import { Box,Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../../../../../config/palette";
import PaperWrapper from "../../../../UI/Paper/PaperWrapper";

export const Heading = styled(Typography)(({ theme }) => ({
 fontFamily: '"Poppins", "sans-serif"',   
 color:Colors.light,
 display:"flex",
 alignItems:"center",
 justifyContent:"center",
fontWeight: "bold" ,
fontSize:"30px",
paddingTop:"60px",
paddingBottom:"60px",

[theme.breakpoints.down("md")]: {
fontSize: "20px",
},
}));


export const FormContainer = styled(Box)(({ theme }) => ({
 paddingBottom:"50px",
  width: "60%",
  height:550, 
 [theme.breakpoints.down("md")]: {
  width: "80%", 
 },
 }));
 


 export const PaperContainer = styled( PaperWrapper
  )(() => ({
   background:Colors.secondary,
     display:"flex",
  alignItems:"center",
  justifyContent:"center",
  flexDirection:"column",

 }));